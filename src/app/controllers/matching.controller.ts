import BaseController from "./base.controller";
import {Request, Response} from "express";
import StrHelper from "../helpers/str.helper";
import ResponseError from "../responses/ResponseError";
import UserService from "../services/user.service";
import MatchingService from "../services/matching.service";
class MatchingController extends BaseController{
    protected readonly matchingService:MatchingService
    public constructor(req:Request, res:Response) {
        super(req,res)
        this.matchingService = new MatchingService(req,res)
    }

    public async index():Promise<any>
    {
        if(!StrHelper.isObjectId(this.getParamString('user_oid'))){
            return this.res.json(new ResponseError(422,'user_oid not is object id').toObject())
        }

        const matching = await this.matchingService.matching(this.getParamString('user_oid'),this.getParamString('last_oid'))
        return this.res.json(matching.toObject())
    }

    public async store():Promise<any>
    {
        let change = await this.matchingService.store(this.getParamString('user_oid'),this.getParamString('type'))
        return this.res.json(change.toObject())
    }
}

export default MatchingController