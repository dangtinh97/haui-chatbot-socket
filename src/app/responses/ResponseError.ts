import {ApiResponse} from "./ApiResponse";
const { I18n } = require('i18n')
const i18n = new I18n()
import lang from "../../config/lang";

export default class ResponseError extends ApiResponse
{
    // @ts-ignore
    constructor(public status:number=201, public content:string=null, public response:object={}) {
        i18n.configure(lang)
        if(content===null) {
            content = i18n.__('server_error')
        }
        super(status,content,response);
    }
}
