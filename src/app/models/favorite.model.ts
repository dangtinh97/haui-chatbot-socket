import {Model, model, Schema} from "mongoose";
import definedModel from './defined.model'
import {ObjectId} from "mongodb";


const favoriteSchema = new Schema({
    user_id:Number,
    key:String,
    active:Boolean,
    type:String,
    user_oid:ObjectId,
},definedModel)
export const PERSONAL = "PERSONAL"
const Favorite:Model<any> = model("Favorite",favoriteSchema,'dt_favorites')
export default Favorite