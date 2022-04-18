import {Model, Schema} from "mongoose";
import mongoose from "mongoose";

let schemaCounter = new Schema({
    name_collection:String,
    id:Number
})
const Counter:Model<any> = mongoose.model('Counter',schemaCounter ,'counters');
export default Counter