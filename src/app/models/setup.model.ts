import {model, Model, Schema} from "mongoose";
import definedModel from './defined.model'
const setupSchema = new Schema({
    data:Object,
    type:String
},definedModel)

const Setup:Model<any> = model('Setup',setupSchema,'setups_app')
export default Setup