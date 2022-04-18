import {Model, Schema,model} from "mongoose";
import definedModel from "./defined.model";

const userSchema = new Schema({
    full_name:String,
    avatar:String,
    email:String,
    fb_uid:String,
    type_account:String,
    gender:String,
},definedModel)

const User:Model<any> = model("User",userSchema,'users')
export default User
