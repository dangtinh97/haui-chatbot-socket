import express, {Express} from 'express'
import {Server} from "net"
import { Server as SocketServer } from "socket.io";
import http, {ServerOptions} from "http";
import helmet from "helmet";
import appConfig from '../src/config/app'
import bodyParser from "body-parser";
import i18n from 'i18n'
import ResponseError from "./app/responses/ResponseError";
import lang from "./config/lang";
import * as mongoose from "mongoose";
import databaseConfig from "../src/config/database"
import SocketController from "./app/controllers/socket.controller";
class App {
    public server:Server
    private readonly app:Express;
    constructor() {
        this.app = express()
        this.configLang()
        this.configPort()
        this.configMiddleware()
        this.connectDB()
        this.createServer()
        this.createSocket()
    }

    private configPort(){
        this.app.set('port',appConfig.port);
    }

    private configMiddleware()
    {
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use(helmet())
        this.app.use(i18n.init)
        this.app.use((req,res,next)=>{
            return res.json((new ResponseError(404,res.__('url_not_exists'))).toObject())
        })
    }

    private createServer(){
        this.server = http.createServer(this.app);
    }

    private configLang(){
        i18n.configure(lang)
    }

    private connectDB()
    {
        mongoose.connect(databaseConfig.uri).catch(function (error){
            console.log(error)
            process.exit(-1)
        })
    }

    private createSocket()
    {
        let io = new SocketServer(this.server as any,{
            cors:"*"
        } as any)
        return new SocketController(io)
    }
}

export default App
