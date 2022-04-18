import mongoose from "mongoose";
import {ObjectId} from "mongodb";
const  mongo = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;
class StrHelper {
    static isEmail(email:string){
        return String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );
    }

    public static htmlEscape(text:string):string {
        return text.replace(/&/g, '&amp;').
        replace(/</g, '&lt;').  // it's not neccessary to escape >
            replace(/"/g, '/"').
            replace(/'/g, '/\'').
            trim() || ''
    }

    public static hashPassword(myPlaintextPassword:string):Promise<string>{
        return bcrypt.hashSync(myPlaintextPassword, saltRounds);
    }

    public static async comparePassword(myPlaintextPassword:string,hash:string){
        return new Promise((resolve, reject)=>{
            try{
                bcrypt.compare(myPlaintextPassword, hash).then(function(result:any) {
                    return resolve(result)
                });
            }catch (e) {
                return resolve(false)
            }

        })

    }

    public static toObjectId(str:string):ObjectId
    {
        return mongo.Types.ObjectId(str)
    }

    public static isObjectId(str:string)
    {
        let ObjectId = mongoose.Types.ObjectId
        return ObjectId.isValid(str)
    }


    public static shuffle(arrayBegin:Array<any>):Array<any> {
        let array=[...arrayBegin]
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
        }

        return array;
    }

    public static rand(min:number=0,max:number=10)
    {
        if(max<=min) return null;
        return Math.floor(Math.random()*(max-min+1))+min
    }

}

export default StrHelper