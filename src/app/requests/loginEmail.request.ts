import {checkSchema} from "express-validator";
import {IsEmptyOptions} from "express-validator/src/options";
import {notEmpty} from "./define";

export const loginEmailRequest = checkSchema({
    username:{
        notEmpty:notEmpty
    },
    password:{
        notEmpty:notEmpty
    }
})