import {BaseRepository} from "./base.repository";
import User from "../models/user";

class UserRepository extends BaseRepository{
    constructor() {
        super(User);
    }

    public async findUserConnect(fbUid:string){
        return new Promise((resolve:any)=>{
            this._model.aggregate([
                {
                    $match:{
                        fb_uid:fbUid
                    }
                },
                {
                    $lookup:{
                        from:"connects",
                        localField:"_id",
                        foreignField:"from_user_oid",
                        as:"connects"
                    }
                }
            ]).then((users:Array<any>)=>{
                return resolve(users[0] ?? null);
            })
        })

    }
}

export default UserRepository
