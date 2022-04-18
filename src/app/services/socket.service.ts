import ChatRoomRepository from "../repositories/ChatRoomRepository";
import {Server} from "socket.io";
import StrHelper from "../helpers/str.helper";
import UserRepository from "../repositories/user.repository";
import MessageRepository from "../repositories/message.repository";
import {ApiResponse} from "../responses/ApiResponse";
import ResponseSuccess from "../responses/ResponseSuccess";
import ResponseError from "../responses/ResponseError";

var CryptoJS = require("crypto-js");
const MD5 = require('crypto-js/md5')
var Utf8 = CryptoJS.enc.Utf8;

class SocketService {
    protected readonly messageRepository: MessageRepository
    protected readonly chatRoomRepository: ChatRoomRepository
    protected userRepository: UserRepository

    constructor() {
        this.chatRoomRepository = new ChatRoomRepository()
        this.userRepository = new UserRepository()
        this.messageRepository = new MessageRepository()
    }

    public async findRoomAndSaveSocket(roomOid: string, socketId: any, fromUserOid: any): Promise<any> {
        return await this.chatRoomRepository.findAndModify({
            _id: StrHelper.toObjectId(roomOid)
        }, {
            $push: {
                sockets: {
                    'user_oid': StrHelper.toObjectId(fromUserOid),
                    'socket_id': socketId
                }
            }
        })
    }

    public decryptedMessage(textPlan:string,roomOid:string)
    {
        let key = CryptoJS.MD5(roomOid).toString()
        return CryptoJS.AES.decrypt(textPlan, Utf8.parse(key), {
            iv: Utf8.parse(key.substr(0, 16))
        }).toString(Utf8)
    }

    public async sendMessage(room: any, data: any, users: any, fromUserOid: string): Promise<any> {
        const roomOid: string = room._id.toString()
        let decrypted = this.decryptedMessage(data.data,roomOid)

        if (decrypted === "") return {
            decode_data: true,
            send_socket: false,
            message_oid: ""
        }

        let messageData = JSON.parse(decrypted)

        let fromUser = users.filter(function (user: any) {
            return user._id.toString() === fromUserOid
        })[0]
        const fromUserId = fromUser.id

        let toUser = users.filter(function (user: any) {
            return user._id.toString() !== fromUserOid
        })[0]
        const toUserId = toUser.id
        let createMessage: any = await this.saveMessage(messageData, roomOid, room.id, fromUserId, toUserId)

        let haveInRoom = room.sockets.filter((socket: any) => {
            return socket.user_oid !== fromUserOid
        }).length > 0

        if (!haveInRoom) {

        }

        return {
            decode_data: true,
            send_socket: haveInRoom,
            message_oid: createMessage._id.toString()
        }
    }

    private encrypt(data:string,roomOid:string)
    {
        let key = CryptoJS.MD5(roomOid).toString()
        return CryptoJS.AES.encrypt(data, Utf8.parse(key), {
            iv: Utf8.parse(key.substr(0, 16))
        }).toString()
    }

    private async saveMessage(messageData: any, roomOid: string, roomId: number, fromUserId: number, toUserId: number): Promise<any>
    {
        let message = ''

        if (typeof messageData.message !== "undefined" && messageData.message !== "" && messageData.type_message ==="TEXT") {
            message = this.encrypt(messageData.message, roomOid)
        }

        let dataCreateMessage:any = {
            id: await this.messageRepository.countId(),
            message: message,
            medias: messageData.media.map(function (str: string) {
                return StrHelper.toObjectId(str)
            }),
            room_id: roomId,
            from_user_id: fromUserId,
            to_user_id: toUserId,
            type_message: messageData.type_message,
        }

        if(messageData.type_message==="SEND_LOVE"){
            dataCreateMessage.info = {
                status_love:"NEW"
            }
        }

        return new Promise((resolve: any) => {
            Promise.all([
                this.messageRepository.create(dataCreateMessage),
                this.saveMessageLast(roomOid,{
                    message_last: message,
                    type_message: messageData.type_message,
                    user_id_send_last: fromUserId,
                })
            ]).then((data: Array<any>) => {
                return resolve(data[0])
            })
        })
    }

    private async saveMessageLast(roomOid:string,data:any)
    {
        return await this.chatRoomRepository.findAndUpdate({
            _id:StrHelper.toObjectId(roomOid)
        },{
            ...data,
            time_send_last: new Date()
        })
    }

    public async removeSocket(roomOid: string, socketId: string) {
        await this.chatRoomRepository.findAndModify({
            _id: StrHelper.toObjectId(roomOid)
        }, {
            $pull: {
                'sockets': {socket_id: socketId}
            }
        })
    }

    async findUserByCond(cond: any) {
        return await this.userRepository.find(cond)
    }

    async reaction(data: any, roomId: number, fromUserId: number, toUserOid: string): Promise<ApiResponse> {
        if (typeof data.message_oid === "undefined" || !StrHelper.isObjectId(data.message_oid)) return new ResponseError()

        return new Promise((resolve: any) => {
            Promise.all([
                this.messageRepository.findAndModify({
                    _id: StrHelper.toObjectId(data.message_oid),
                    room_id: roomId,
                    reactions: {
                        $ne: fromUserId
                    }
                }, {
                    $push: {
                        reactions: [fromUserId]
                    }
                }),
                this.partnerOnline(roomId, toUserOid)
            ]).then(function (res: any) {
                console.log(res)
                return resolve((new ResponseSuccess({
                    send_socket: res[1]
                })))
            })
        })
    }

    private async partnerOnline(roomId: number, userOid: string): Promise<boolean> {
        return await this.chatRoomRepository.findOne({
            id: roomId,
            'sockets.user_oid': StrHelper.toObjectId(userOid)
        }) !== null
    }
}

export default SocketService