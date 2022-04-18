import {NextFunction, Request, Response} from "express";
import ResponseError from "../responses/ResponseError";

const jwt = require('jsonwebtoken')
import jwtConfig from '../../config/jwt'
import UserRepository from "../repositories/user.repository";
import ResponseSuccess from "../responses/ResponseSuccess";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // return next()
    const token = req.header('Authorization') || req.params.token || req.body.token
    if (token === undefined) return res.json(new ResponseError(422, "Token is required.").toObject())
    try {
        var decoded = jwt.verify(token.replace('Bearer ', ''), jwtConfig.secret);
        if (decoded.exp < (new Date()).getTime() / 1000) return res.json(new ResponseError(410, "Time token expired.").toObject())
        const userRepository = new UserRepository()
        userRepository.findById(decoded.sub).then(function (user) {
            req.user = {
                id: user.id,
                _id: user._id.toString(),
                full_name: user.full_name ?? "",
            }
            return next()
        })
    } catch (err) {
        return res.json(new ResponseError(410, "Authorization!").toObject())
        // err
    }

}