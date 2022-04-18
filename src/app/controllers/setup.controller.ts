import BaseController from "./base.controller";
import {Request, Response} from "express";
import SetupService from "../services/setup.service";

class SetupController extends BaseController{
    public setupService:SetupService
    constructor(req:Request, res:Response) {
        super(req,res);
        this.setupService = new SetupService(req,res)
    }

    public async setup()
    {
       let setup = await this.setupService.config()
        return this.res.json(setup.toObject())
    }
}
export default SetupController