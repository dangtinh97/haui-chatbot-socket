import BaseController from "./base.controller";
import {Request, Response} from "express";
import ResponseSuccess from "../responses/ResponseSuccess";
import AuthService from "../services/auth.service";

class AuthController extends BaseController{
    private readonly authService:AuthService
    constructor(req:Request,res:Response) {
        super(req,res);
        this.authService = new AuthService(req,res)
    }

    async login()
    {
        let login =await this.authService.login(this.getParamString('username'),this.getParamString('password'));
        return this.res.json(login.toObject())
    }

    async registerEmail()
    {
        let register =await this.authService.registerEmail(this.getParamString('email'),this.getParamString('password'),this.getParamFloat('longitude'),this.getParamFloat('latitude'))
        return this.res.json(register.toObject())
    }
}

export default AuthController