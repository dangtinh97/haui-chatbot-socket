import {Server,Socket} from "socket.io";
import jwtConfig from "../../config/jwt";
import SocketService from "../services/socket.service";
import StrHelper from "../helpers/str.helper";
const jwt = require('jsonwebtoken')
const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");
import {
    JOIN_ROOM,
    SEND_MESSAGE,
    SEND_REACTION,
    SEND_TYPING, SOCKET_DISCONNECT_WITH_YOU,
    SOCKET_NEW_CONNECT, SOCKET_TYING,
    USER_ONLINE
} from '../constants/constants'
import databaseConfig from '../../config/database'
const DB = "nguoi-la";
const COLLECTION = "socket.io-adapter-events";
class SocketController {
    public io:Server
    public fromUserOid:string
    public roomOid:string
    public socketService:SocketService
    public users:any
    public room_uuid:string
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
            let token = socket.handshake.auth.token
            if (token === undefined) next(new Error("NO TOKEN Authorized 1!"));
            try {
                let decoded = jwt.verify(token.replace('Bearer ', ''), jwtConfig.secret);
                this.fromUserOid = decoded.sub
                return next()
            } catch (err) {
                console.log(err)
                next(new Error("error---"+err.message));
            }
        })
    }

    private _connection(socket:Socket)
    {
        let token = socket.handshake.auth.token
        let decoded = jwt.verify(token.replace('Bearer ', ''), jwtConfig.secret);
        let userOid = decoded.sub
        this.socketService.saveSocket(socket.id,userOid).then()

        socket.on(SEND_MESSAGE,(data:any)=>this._sendMessage(data,userOid))
        // socket.on(SEND_TYPING,(data:any)=>this._typing(data))
        // socket.on(SEND_REACTION,(data:any)=>this._sendReaction(data))
        socket.on("disconnect",()=>this._disconnect(socket,userOid))
        socket.on(JOIN_ROOM,(data:any)=>this._joinRoom(socket,data,userOid))
        socket.on(SOCKET_NEW_CONNECT,(data:any)=>this._socketNewConnect(socket,data,userOid))
        socket.on(SOCKET_DISCONNECT_WITH_YOU,(data:any)=>this._socketDisconnectWithYou(socket,data,userOid))
        socket.on(SOCKET_TYING,(data:any)=>this._onTyping(socket,data,userOid))
        // this.io.to(this.roomOid).emit(USER_ONLINE,{
        //     from_user_oid:this.fromUserOid
        // })
    }

    async _onTyping(socket:Socket,data:any,userOid:string)
    {
        this.io.to(data.room_uuid).emit(SOCKET_NEW_CONNECT,{
            type:data.type,
            from_user_oid:userOid
        })
    }

    async _socketNewConnect(socket:Socket,data:any,fromUserOid:string)
    {
        this.io.to(data.room_uuid).emit(SOCKET_NEW_CONNECT,{
            from_user_oid:fromUserOid
        })
    }

    async _socketDisconnectWithYou(socket:Socket,data:any,fromUserOid:string)
    {
        this.io.to(data.room_uuid).emit(SOCKET_DISCONNECT_WITH_YOU,{
            from_user_oid:fromUserOid
        })

        socket.leave(data.room_uuid)
    }

    async _joinRoom(socket:Socket,data:any,userOid:string)
    {
        socket.join(data.room_uuid)
        this.room_uuid = data.room_uuid.toString()
        this.io.to(this.room_uuid).emit(JOIN_ROOM,{
            from_user_oid:userOid
        })
    }

    async _sendMessage(data:any,userOid:string)
    {
        this.io.to(data.room_uuid).emit(SEND_MESSAGE,{
            from_user_oid:userOid,
            message:data.message
        })
    }

    public _disconnect(socket:Socket,userOid:string){
        this.socketService.saveSocket(socket.id,this.fromUserOid,"PULL").then()
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

    }

}
export default SocketController
