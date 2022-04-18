import {model, Model, Schema} from "mongoose";
import definedModel from "./defined.model";

const messageSchema = new Schema({
    from_user_oid:String,
    to_user_oid:String,
    message:String,
    room_uuid:String
},definedModel)

const Message:Model<any> = model("Message",messageSchema,'messages')
export default Message
