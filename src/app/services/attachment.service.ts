import BaseService from "./base.service";
import {Request, Response} from "express";
import {ApiResponse} from "../responses/ApiResponse";
import ResponseSuccess from "../responses/ResponseSuccess";
import GoogleCloudHelper from "../helpers/googleCloud.helper";
import AttachmentRepository from "../repositories/attachment.repository";
import {USE_ATTACHMENT} from "../models/attachment.model";

class AttachmentService extends BaseService {
    protected attachmentRepository:AttachmentRepository
    constructor(req:Request, res:Response) {
        super(req,res);
        this.attachmentRepository = new AttachmentRepository()
    }

    public async store(file:any):Promise<ApiResponse>
    {
        const ext = GoogleCloudHelper.extensionByMimetype(file.mimetype)
        let upload = await GoogleCloudHelper.upload(file.buffer,file.originalname)
        if(upload.status !==200 ) return upload
        let save:any = await this.attachmentRepository.create({
            mimetype:file.mimetype,
            full_url:upload.getData().url,
            path:upload.getData().path,
            use:USE_ATTACHMENT,
            bucket_name:upload.getData().bucket_name,
            id:await this.attachmentRepository.countId(),
            user_id:this.req.user.id ?? -1
        })
        return new ResponseSuccess({
            url:upload.getData().url,
            attachment_oid:save._id
        })

    }
}

export default AttachmentService