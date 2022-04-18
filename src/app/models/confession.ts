import {model, Model, Schema} from "mongoose";
import definedModel from "./defined.model";

const confessionSchema = new Schema({
    user_oid:Object,
    content:String,
    total:Object,
    media:Array
},definedModel)

const Confession:Model<any> = model("Confession",confessionSchema,'confessions')
export default Confession

