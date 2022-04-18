import {Server} from "socket.io";
import StrHelper from "../helpers/str.helper";
import UserRepository from "../repositories/user.repository";
import MessageRepository from "../repositories/message.repository";
import ConnectRepository from "../repositories/connect.repository";
import ResponseSuccess from "../responses/ResponseSuccess";

var CryptoJS = require("crypto-js");
const MD5 = require('crypto-js/md5')
var Utf8 = CryptoJS.enc.Utf8;

class SocketService {
    protected readonly messageRepository: MessageRepository
    protected userRepository: UserRepository
    protected readonly connectRepository: ConnectRepository

    constructor() {
        this.userRepository = new UserRepository()
        this.messageRepository = new MessageRepository()
        this.connectRepository = new ConnectRepository()
    }

    async saveSocket(socketId: string, userOid: string, type = "PUSH") {
        await this.connectRepository.findAndModify({
            from_user_oid: StrHelper.toObjectId(userOid)
        }, type === "PULL" ? {
            $pull: {
                socket_ids: socketId
            }
        } : {
            $push: {
                socket_ids: socketId
            }
        })
        return new ResponseSuccess()
    }
}

export default SocketService
