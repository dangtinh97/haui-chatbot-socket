import {checkSchema} from "express-validator";
import {isArray} from "./define";

export const updateImageUserRequest = checkSchema({
    add_images:{
        isArray:isArray
    },
    delete_images:{
        isArray:isArray
    }
})