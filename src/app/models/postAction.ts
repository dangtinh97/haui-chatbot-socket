import {model, Model, Schema} from "mongoose";
import definedModel from "./defined.model";

const postActionSchema = new Schema({
    user_oid:Object,
    confession_oid:Object,
    type:String,
    content:String
},definedModel)

const PostAction:Model<any> = model("PostAction",postActionSchema,'confession_actions')

export default PostAction
