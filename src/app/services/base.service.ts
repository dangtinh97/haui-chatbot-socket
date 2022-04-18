import {Request, Response} from "express";

class BaseService {
    constructor(public req:Request,public res:Response) {
    }
}

export default BaseService