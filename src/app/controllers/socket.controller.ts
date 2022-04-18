import {Server,Socket} from "socket.io";
import jwtConfig from "../../config/jwt";
import SocketService from "../services/socket.service";
import StrHelper from "../helpers/str.helper";
const jwt = require('jsonwebtoken')
const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");
import {SEND_MESSAGE, SEND_REACTION, SEND_TYPING, USER_ONLINE} from '../constants/constants'
import databaseConfig from '../../config/database'
const DB = "datinee";
const COLLECTION = "socket.io-adapter-events";
class SocketController {
    public io:Server
    public fromUserOid:string
    public roomOid:string
    public roomId:number
    public socketService:SocketService
    public room:any
    public users:any
    public fromUser:any
    public toUser:any
    public constructor(socket:Server) {
        this.socketService = new SocketService()
        this.io = socket
        this.adapter()
        this.configMiddleware()
        this.io.on("connection",(socket:Socket)=>this._connection(socket))
    }

    async adapter()
    {
        const mongoClient = new MongoClient(databaseConfig.uri, {
            useUnifiedTopology: true,
        });

        await mongoClient.connect();
        try {
            await mongoClient.db(DB).createCollection(COLLECTION, {
                capped: true,
                size: 1e6
            });
        } catch (e) {
            // collection already exists
        }
        const mongoCollection = mongoClient.db(DB).collection(COLLECTION);

        this.io.adapter(createAdapter(mongoCollection));
    }

    configMiddleware()
    {
        this.io.use(async (socket:Socket<any>, next)=>{
            this.roomOid = socket.handshake.query.room_oid as string
            if(!StrHelper.isObjectId(this.roomOid)) return next(new Error("CHAT ROOM NOT IS OBJECT ID"))
            let token = socket.handshake.auth.token
            if (token === undefined) next(new Error("Authorized 1!"));
            try {
                var decoded = jwt.verify(token.replace('Bearer ', ''), jwtConfig.secret);
                if (decoded.exp < (new Date()).getTime() / 1000) next(new Error("Authorized 2!"));
                this.fromUserOid = decoded.sub
                let room:any =await this.socketService.findRoomAndSaveSocket(this.roomOid,socket.id,decoded.sub)
                if(room===null) return next(new Error("ROOM CHAT NOT EXISTS!"))
                this.roomId = room.id
                this.room = room
                let users =await this.socketService.findUserByCond({
                    id:{
                        $in:room.joins
                    }
                })

                this.fromUser = users.filter(function (user:any){
                    return user._id.toString() === decoded.sub
                })[0]

                this.toUser = users.filter(function (user:any){
                    return user._id.toString() !== decoded.sub
                })[0]

                this.users = users
                return next()
            } catch (err) {
                console.log(err)
                next(new Error("Authorized ERROR!"));
            }
        })
    }

    private _connection(socket:Socket)
    {
        socket.join(this.roomOid)
        socket.on(SEND_MESSAGE,(data:any)=>this._sendMessage(data,socket))
        socket.on(SEND_TYPING,(data:any)=>this._typing(data))
        socket.on(SEND_REACTION,(data:any)=>this._sendReaction(data))
        socket.on("disconnect",()=>this._disconnect(socket))
        this.io.to(this.roomOid).emit(USER_ONLINE,{
            from_user_oid:this.fromUserOid
        })
    }

    async _sendMessage(data:any,socket:Socket)
    {
        let io:Server = this.io
        let roomOid:string = this.roomOid
        let fromUserOid:string = this.fromUserOid
        this.socketService.sendMessage(this.room,data,this.users,this.fromUserOid).then(function (res:any){
                io.to(roomOid).emit(SEND_MESSAGE,{
                from_user_oid:fromUserOid,
                message_oid:res.message_oid,
                data:data.data
            })
        })
    }

    public _disconnect(socket:Socket){
        this.socketService.removeSocket(this.roomOid,socket.id).then()
    }

    public _typing(data:any)
    {
        this.io.to(this.roomOid).emit(SEND_TYPING,{
            ...data,
            from_user_oid:this.fromUserOid
        })
    }

    public _sendReaction(data:any)
    {
        const io = this.io
        const room = this.roomOid
        const fromUserOid = this.fromUserOid
        this.socketService.reaction(data,this.roomId,this.fromUser.id,this.toUser._id.toString()).then(function (res){
            io.to(room).emit(SEND_REACTION,{
                from_user_oid:fromUserOid,
                ...data
            })
        })
    }

}
export default SocketController