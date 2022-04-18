import {NextFunction,Request,Response} from "express";

export const localesMiddleware = (req:Request,res:Response,next:NextFunction)=>{
    let lang = req.header('lang')
    if(['vi','en'].indexOf(lang)===-1) lang = 'vi'
    res.cookie('lang',lang)
    next()
}
