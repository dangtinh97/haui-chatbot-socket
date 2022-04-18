import {Request, Response} from "express";
import BaseService from "./base.service";
import {ApiResponse} from "../responses/ApiResponse";
import ResponseSuccess from "../responses/ResponseSuccess";
import UserRepository from "../repositories/user.repository";
import ResponseError from "../responses/ResponseError";
import FavoriteRepository from "../repositories/favorite.repository";
import {PERSONAL} from "../models/favorite.model";
import UserImageRepository from "../repositories/userImage.repository";
import AttachmentRepository from "../repositories/attachment.repository";
import StrHelper from "../helpers/str.helper";
import ImageUser, {STATUS_NORMAL} from "../models/imageUser.model";
const mongoose = require('mongoose');

class UserService extends BaseService{
    protected readonly userRepository:UserRepository
    protected readonly favoriteRepository:FavoriteRepository
    protected readonly userImageRepository:UserImageRepository
    protected readonly attachmentRepository:AttachmentRepository
    constructor(req:Request,res:Response) {
        super(req,res)
        this.userRepository = new UserRepository()
        this.favoriteRepository = new FavoriteRepository()
        this.attachmentRepository = new AttachmentRepository()
        this.userImageRepository = new UserImageRepository()
    }

    public async updateUser(userOid:string,body:any):Promise<ApiResponse>{
        if(this.req['user']._id!==userOid) return (new ResponseError(403,"Forbidden."))
        await this.userRepository.findAndUpdate({
            _id: mongoose.Types.ObjectId(userOid),
        }, body)

        return new ResponseSuccess({},this.res.__('update_success'))
    }

    public async addFavorite(listChoice:Array<string>,userId:number):Promise<ApiResponse>
    {
        const userOid = this.req.user._id
        let insert = listChoice.map(function (value:string){
            return {
                user_id:userId,
                user_oid:StrHelper.toObjectId(userOid),
                key:value,
                active:true,
                type:PERSONAL
            }
        })
        await this.favoriteRepository.deletedMany({
            user_id:userId
        })

        await this.favoriteRepository.insert(insert)
        return new ResponseSuccess()
    }

    public async addPhoto(ids:Array<string>,setAvatar:boolean=true):Promise<ApiResponse>
    {
        if(ids.length==0) return new ResponseError(422,this.req.__('validation.is_array',this.res.__('attribute.add_images')))
        const userOid = this.req.user._id
        let objectIds = ids.map(function (str:string){
            return mongoose.Types.ObjectId(str)
        })

        let images =await this.attachmentRepository.find({
            '_id' :{
                $in:objectIds
            }
        })

        let insert:any = []

        for(let i=0;i<images.length;i++){
            let id=await this.userImageRepository.countId();
            insert.push({
                id:id,
                path:images[i].path,
                type:"PHOTO",
                image_attachment_id:images[i].id,
                user_id:this.req.user.id,
                user_oid:StrHelper.toObjectId(this.req.user._id),
                status:STATUS_NORMAL,
                deleted_flag:false
            })
        }

        if(setAvatar) await this.userRepository.findAndUpdate({
            _id:StrHelper.toObjectId(userOid)
        },{
            avatar_attachment_id:insert[0].id
        })

        await this.userImageRepository.insert(insert)
        return new ResponseSuccess()
    }

    public async info(userOid:string):Promise<ApiResponse>
    {
       let data = await this.userRepository.infoUser(StrHelper.toObjectId(userOid))
        console.log(data[0].favorites);
        return new ResponseSuccess()
    }

    public async deletePhoto(deleteImages:Array<string>):Promise<ApiResponse>
    {

        let deleteIds:Array<any> = deleteImages.map(function (id:string){
            return StrHelper.isObjectId(id) ? StrHelper.toObjectId(id):null
        })


        let update = await this.userImageRepository.updateMany({
            _id:{
                $in:deleteIds
            },
            user_id:this.req.user.id
        },{
            deleted_flag:true
        })

        return new ResponseSuccess({
            ids:[]
        })
    }




}
export default UserService