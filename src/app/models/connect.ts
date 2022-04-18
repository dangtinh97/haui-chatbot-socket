import {model, Model, Schema} from "mongoose";
import definedModel from "./defined.model";

const connectSchema = new Schema({
    from_user_oid:Object,
    to_user_oid:Object,
    room_uuid:String,
    status:String,
    socket_ids:Array,
},definedModel)

export const STATUS_CONNECT_FREE="FREE"
export const STATUS_CONNECT_FIND="FIND"
export const STATUS_CONNECT_BUSY="BUSY"

const Connect:Model<any> = model('Connect',connectSchema,"connects")
export default Connect
