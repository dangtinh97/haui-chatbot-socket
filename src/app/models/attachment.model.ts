import {model, Model, Schema} from "mongoose";
import definedModel from './defined.model'

const attachmentSchema:Schema = new Schema({
    full_url:String,
    use:Boolean,
    path:String,
    mimetype:String,
    deleted_flag:Boolean,
    bucket_name:String,
    id:Number,
    user_id:Number
},definedModel).pre('save',function (next){
    if(this.isNew){
        this.deleted_flag = false
    }
    next()
}).pre('deleteOne',function (next) {
    this.deleted_flag = true
})

const Attachment:Model<any> = model('Attachment',attachmentSchema,'dt_attachments');
export const NO_USE_ATTACHMENT = false
export const USE_ATTACHMENT = true
export default Attachment