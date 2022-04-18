import BaseController from "./base.controller";
import {Request, Response} from "express";
import AttachmentService from "../services/attachment.service";

class AttachmentController extends BaseController{
    protected attachmentService:AttachmentService
    constructor(req:Request, res:Response) {
        super(req,res);
        this.attachmentService = new AttachmentService(req,res)
    }

    public async store()
    {
        const file = this.req.file

        let upload = await this.attachmentService.store(file)

        return this.res.json(upload.toObject())
    }

}

export default AttachmentController