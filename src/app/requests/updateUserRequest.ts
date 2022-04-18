import {checkSchema} from "express-validator";
import {notEmpty} from "./define";

export const updateUserRequest = checkSchema({
    gender:{
        notEmpty:notEmpty,
        isIn:{
            errorMessage:"in_array",
            options:[["MALE","FEMALE"]]
        }
    },
    age:{
        notEmpty:notEmpty,
        isInt:{
            errorMessage:"is_numeric",
        },
        custom:{
            options:(value)=>{
                if(value<10 || value>100){
                    throw new Error("between:10,100")
                }
                return true;
            }
        }
    },
    care_about_gender:{
        notEmpty:notEmpty,
        isIn:{
            errorMessage:"in_array",
            options:[["MALE","FEMALE"]]
        }
    },
    address:{
        notEmpty:notEmpty
    }
})