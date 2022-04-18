import {model, Model, Schema} from "mongoose";
import definedModel from './defined.model'
import {ObjectId} from "mongodb";

const userSchema:Schema = new Schema({
    id:Number,
    mobile:String,
    email:String,
    password:String,
    uid_fb:String,
    apple_id:String,
    full_name:String,
    gender:String,
    care_about_gender:String,
    age:Number,
    address:String,
    avatar_attachment_id:Number,
    cover_attachment_id:Number,
    location:Object,
    status:String,
    tokens_notification:Array,
    introduce:String,
    link_qr_code:String,
    verify_account:Boolean,
    matching_with_user_id:Number,
    deleted_flag:Boolean
},definedModel).pre('save',function (next){
    if(this.isNew){
        this.deleted_flag = false
    }
    next()
}).pre('deleteOne',function (next) {
    this.deleted_flag = true
})

const User:Model<any> = model('User',userSchema,'dt_users');
export const STATUS_NORMAL = "NORMAL"
export default User
