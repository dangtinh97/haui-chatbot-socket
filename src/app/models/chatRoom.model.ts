import {model, Model, Schema} from "mongoose";
import {ObjectId} from "mongodb";
import definedModel from "./defined.model";

const chatRoomSchema = new Schema({
    user_oid_create:ObjectId,
    joins:Array,
    status:String,
    id:Number,
    sockets:Array,
    message_last:String,
    type_message:String,
    user_id_send_last:Number,
    time_send_last:Date
},definedModel)

const ChatRoom:Model<any> = model('ChatRoom',chatRoomSchema,'dt_chat_rooms')

export default ChatRoom