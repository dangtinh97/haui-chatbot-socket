import BaseService from "./base.service";
import {Request, Response} from "express";
import {ApiResponse} from "../responses/ApiResponse";
import ResponseSuccess from "../responses/ResponseSuccess";
import UserRepository from "../repositories/user.repository";
import StrHelper from "../helpers/str.helper";
import ResponseError from "../responses/ResponseError";
import User, {STATUS_NORMAL} from "../models/user.model";
const jwt = require('jsonwebtoken')
import jwtConfig from '../../config/jwt'
class AuthService extends BaseService{
    public readonly userRepository:UserRepository
    constructor(req:Request,res:Response) {
        super(req,res)
        this.userRepository = new UserRepository()
    }

    public async login(username:string,password:string):Promise<ApiResponse>
    {
        let user:any = await this.userRepository.findOne({
            email:username
        })
        if(user===null) return new ResponseError(204,this.res.__('user.login_not_valid'))

        if(!user.verify_account) return new ResponseError(202,this.res.__('user.account_not_verified'))
        let passwordHash = user.password;
        if(!await StrHelper.comparePassword(password,passwordHash)) return new ResponseError(201,this.res.__('user.login_not_valid'))
        return new ResponseSuccess({...this.userTransformer(user),
        token:this.signToken(user._id)
        });
    }

    public async registerEmail(email:string,password:string,long:number,lat:number):Promise<ApiResponse>{
        let findUser:any =await this.userRepository.findOne({
            email:email
        })


        if(findUser!=null && findUser.verify_account) return new ResponseError(201,this.res.__('user.email_exists'))

        let passwordHash = StrHelper.hashPassword(password);
        let user:any;

        let dataCreate = {
            email:email,
            password:passwordHash,
            ...this.infoOtherNew(),
            id:findUser?.id ?? 0,
            location:{
                type:"Point",
                coordinates:[long,lat]
            }
        }
        if(findUser==null){
            dataCreate.id =await this.userRepository.countId()
            user = await this.userRepository.create(dataCreate)
        }else {
            user =await this.userRepository.findAndUpdate({
                email:email
            },dataCreate)
        }

        return new ResponseSuccess({
            user_oid:user._id
        })
    }

    private infoOtherNew():any{
        return {
            verify_account:false,
            status:STATUS_NORMAL,
        }
    }

    private userTransformer(user:any){
        return {
            user_oid:user._id,
            user_id:user.id,
            full_name:user.full_name ?? "",
            address:user.address ?? "",
            mobile:user.mobile ?? "",
            email:user.email ?? "",
            avatar_image:user.avatar_image ?? "",
            cover_image:user.cover_image ?? "",
            link_qr_code:user.link_qr_code ?? ""
        }
    }

    private signToken(userOid:string){
        return jwt.sign({
            iat:Math.floor(new Date().getTime()/1000),
            nbf:Math.floor(new Date().getTime()/1000),
            exp:Math.floor(new Date().getTime()/1000) + (jwtConfig.ttl as number),
            sub:userOid
        }, jwtConfig.secret);
    }
}
export default AuthService