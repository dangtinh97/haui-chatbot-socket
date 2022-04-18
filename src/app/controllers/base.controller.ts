import {Request, Response} from "express";
import StrHelper from '../helpers/str.helper'
class BaseController {
    constructor(public req:Request,public res:Response) {
    }

    private getKey(key:string):string{
        return  this.req.query[key] || this.req.params[key] || this.req.body[key] || '';
    }

    getParamInt(key:string):number{
        return parseInt(this.getKey(key)) || 0;
    }

    getParamFloat(key:string):number{
        return parseFloat(this.getKey(key)) || 0.0
    }

    getParamString(key:string):string{
        return StrHelper.htmlEscape(this.getKey(key))
    }
}

export default BaseController