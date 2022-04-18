import {ApiResponse} from "./ApiResponse";
import lang from "../../config/lang";
// import i18n from "i18n";
const { I18n } = require('i18n')
const i18n = new I18n()
export default class ResponseSuccess extends ApiResponse
{
    // @ts-ignore
    constructor(public response:object={}, public content:string=null,public status:number=200) {
        i18n.configure(lang)
        if(content===null) {
            content = i18n.__('success')
        }
        super(status,content,response);
    }
}
