import {model, Model, Schema} from "mongoose";
import definedModel,{save} from './defined.model'
const followSchema = new Schema({
    from_user_id:Number,
    follow_user_id:Number,
    type:String,
    deleted_flag:Boolean
},definedModel)
followSchema.pre("save",save)

const Follow:Model<any> = model("Follow",followSchema,'dt_follows')
export default Follow