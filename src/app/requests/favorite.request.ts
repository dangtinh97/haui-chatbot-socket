import {checkSchema} from "express-validator";
import {isArray, notEmpty} from "./define";

export const favoriteRequest = checkSchema({
    list_choice:{
        isArray:isArray
    }
})