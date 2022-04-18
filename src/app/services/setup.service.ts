import BaseService from "./base.service";
import {Request, Response} from "express";
import SetupRepository from "../repositories/setup.repository";
import {ApiResponse} from "../responses/ApiResponse";
import ResponseSuccess from "../responses/ResponseSuccess";

class SetupService extends BaseService{
    public setupRepository:SetupRepository
    constructor(req:Request,res:Response) {
        super(req,res);
        this.setupRepository = new SetupRepository()
    }

    public async config():Promise<ApiResponse>
    {
        let configs =await this.setupRepository.find({
            type:{$in:["SETUP_GENERAL","LIST_FAVORITE"]}
        })
        const configGeneral = configs.filter((value:any)=>{
            return value.type==="SETUP_GENERAL"
        })[0].data ?? {}


        const configFavorite:Array<string> = configs.filter((value:any)=>{
            return value.type==="LIST_FAVORITE"
        })[0].data ?? []
        let response:any = JSON.parse(JSON.stringify(configGeneral))
        const lang = this.req.header('lang')
        response.list_pavorite = configFavorite.map<object>(function (value:any){
            return {
                key:value.key,
                label:lang==="en" ? value.en : value.vi
            }
        })
        return new ResponseSuccess(response)
    }
}

export default SetupService