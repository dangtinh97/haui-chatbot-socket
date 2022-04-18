import {model, Model, Schema} from "mongoose";
import definedModel from "./defined.model";

const MessageSchema = new Schema({
    id:Number,
    from_user_id:Number,
    to_user_id:Number,
    type_message:String,
    message:String,
    reactions:Array,
    medias:[],
    deleted_flag:Boolean,
    info:Object,
    status:String,
    room_id:Number
},definedModel)

const Message:Model<any> = model('Message',MessageSchema,'dt_messages')
export const STATUS_MESSAGE_NORMAL = "NORMAL"
export const STATUS_MESSAGE_DELETE = "DELETE"
export default Message