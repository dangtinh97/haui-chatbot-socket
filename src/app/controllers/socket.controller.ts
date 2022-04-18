import {Server,Socket} from "socket.io";
import jwtConfig from "../../config/jwt";
import SocketService from "../services/socket.service";
import StrHelper from "../helpers/str.helper";
const jwt = require('jsonwebtoken')
const { createAdapter } = require("@socket.io/mongo-adapter");
const { MongoClient } = require("mongodb");
import {JOIN_ROOM, SEND_MESSAGE, SEND_REACTION, SEND_TYPING, USER_ONLINE} from '../constants/constants'
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
        this.socketService.saveSocket(socket.id,this.fromUserOid).then()

        // socket.join(this.roomOid)
        // socket.on(SEND_MESSAGE,(data:any)=>this._sendMessage(data,socket))
        // socket.on(SEND_TYPING,(data:any)=>this._typing(data))
        // socket.on(SEND_REACTION,(data:any)=>this._sendReaction(data))
        socket.on("disconnect",()=>this._disconnect(socket))
        socket.on(JOIN_ROOM,(data:any)=>this._joinRoom(socket,data))
        // this.io.to(this.roomOid).emit(USER_ONLINE,{
        //     from_user_oid:this.fromUserOid
        // })
    }

    async _joinRoom(socket:Socket,data:any)
    {
        socket.join(data.room_uuid)
        this.room_uuid = data.room_uuid.toString()
        this.io.to(this.room_uuid).emit(JOIN_ROOM,{
            from_user_oid:this.fromUserOid
        })
    }

    async _sendMessage(data:any,socket:Socket)
    {
        let io:Server = this.io
        let roomOid:string = this.roomOid
        let fromUserOid:string = this.fromUserOid

    }

    public _disconnect(socket:Socket){
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
