import BaseController from "./base.controller";
import {Response, Request} from "express";
import UserService from "../services/user.service";
import ResponseSuccess from "../responses/ResponseSuccess";

class UserController extends BaseController{
    protected readonly userService:UserService
    constructor(req:Request,res:Response) {
        super(req,res);
        this.userService = new UserService(req,res)
    }

    public async update()
    {
        let update = await this.userService.updateUser(this.getParamString('user_oid'),{
            ...this.req.body,
            full_name:this.getParamString('full_name'),
            address:this.getParamString('address'),
            age:this.getParamInt('age')
        })
        this.res.json(update.toObject())
    }

    public async show()
    {
        await this.userService.info(this.req.user._id)
        return this.res.json()
    }

    public async addFavorite()
    {
        const listChoice:Array<string> = this.req.body.list_choice ?? []
        if(listChoice.length === 0) return this.res.json((new ResponseSuccess()))
        const userId = this.req.user.id
        let create = await this.userService.addFavorite(listChoice,userId)
        return this.res.json(create.toObject())
    }

    public async updateFavorite()
    {

    }

    public async createImage()
    {
        let addPhoto = await this.userService.addPhoto(this.req.body.add_images)
        return this.res.json(addPhoto.toObject())
    }

    public async updateImage()
    {
        let deleted = await this.userService.deletePhoto(this.req.body.delete_images ?? []);
        let addPhoto = await this.userService.addPhoto(this.req.body.add_images,false)
        return this.res.json(new ResponseSuccess().toObject())

    }
}

export default UserController