import {checkSchema} from "express-validator";
import {IsEmptyOptions} from "express-validator/src/options";
import {isEmail, notEmpty} from "./define";

export const registerEmailRequest = checkSchema({
    email:{
        notEmpty:notEmpty,
        isEmail:isEmail
    },
    password:{
        notEmpty:notEmpty
    }
})