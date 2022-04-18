import express, {NextFunction, Request, Response} from 'express'
import AuthController from "../app/controllers/auth.controller";
import {validate} from "../app/requests/validate.request";
import {loginEmailRequest} from "../app/requests/loginEmail.request";
import {registerEmailRequest} from "../app/requests/registerEmail.request";
import {authMiddleware} from "../app/middleware/auth.middleware";
import UserController from "../app/controllers/user.controller";
import {updateUserRequest} from "../app/requests/updateUserRequest";
import system from "../config/system";
import AttachmentController from "../app/controllers/attachment.controller";
import SetupController from "../app/controllers/setup.controller";
import {favoriteRequest} from "../app/requests/favorite.request";
import {addImageUserRequest} from "../app/requests/addImageUser.request";
import MatchingController from "../app/controllers/matching.controller";
import TestController from "../app/controllers/test.controller";
import {updateImageUserRequest} from "../app/requests/updateImageUser.request";

export const api = express.Router()
export const apiAuth = express.Router()
api.post('/login',validate(loginEmailRequest),(req:Request,res:Response,next:NextFunction)=>(new AuthController(req,res).login()))
api.post('/register-email',validate(registerEmailRequest),(req:Request,res:Response,next:NextFunction)=>(new AuthController(req,res).registerEmail()))

api.route("/user/:user_oid")
    .patch(authMiddleware,validate(updateUserRequest),(req:Request,res:Response)=>(new UserController(req,res)).update())
    .get(authMiddleware,(req:Request,res:Response)=>(new UserController(req,res)).show())


api.post("/attachments",authMiddleware,system.single,(req:Request,res:Response,next:NextFunction)=>(new AttachmentController(req,res)).store())

api.route('/favorites')
    .post(authMiddleware,validate(favoriteRequest),(req:Request,res:Response)=>(new UserController(req,res)).addFavorite())

api.get("/setup-app",(req:Request, res:Response)=>(new SetupController(req,res)).setup())

api.route('/images')
    .post(authMiddleware,validate(addImageUserRequest),(req:Request,res:Response)=>(new UserController(req,res)).createImage())
    .patch(authMiddleware,validate(updateImageUserRequest),(req:Request,res:Response)=>(new UserController(req,res)).updateImage())

api.route("/matching")
    .get(authMiddleware,(req:Request,res:Response)=>(new MatchingController(req,res)).index())
    .post(authMiddleware,(req:Request,res:Response)=>(new MatchingController(req,res)).store())

/**test router*/
api.get("/test/create-user",(req:Request,res:Response)=>(new TestController(req,res)).createUser())
api.get("/test/add-favorite",(req:Request,res:Response)=>(new TestController(req,res)).addFavorite())