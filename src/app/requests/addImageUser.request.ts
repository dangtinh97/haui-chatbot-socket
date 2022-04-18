import {checkSchema} from "express-validator";
import {isArray} from "./define";

export const addImageUserRequest = checkSchema({
    add_images:{
        isArray:isArray
    }
})