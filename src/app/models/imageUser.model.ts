import {Model, model, Schema} from "mongoose";
import definedModel from './defined.model'
import {ObjectId} from "mongodb";
const imageUserSchema = new Schema({
    path:String,
    user_id:Number,
    type:String,
    image_attachment_id:Number,
    user_oid:ObjectId,
    status:String,
    id:Number,
    deleted_flag:Boolean
},definedModel).pre('save',function (next){
    if(this.isNew){
        this.deleted_flag = false
    }
    next()
})
export const STATUS_NORMAL = "NORMAL"
const ImageUser:Model<any> = model("ImageUser",imageUserSchema,'dt_user_images')
export default ImageUser