import {BaseRepository} from "./base.repository";
import User from "../models/user.model";
import {ObjectId} from "mongodb";
import StrHelper from "../helpers/str.helper";

class UserRepository extends BaseRepository {
    public constructor() {
        super(User);
    }

    public async infoUser(userOid: ObjectId) {
        return User.aggregate([
            {
                $match: {
                    _id: userOid
                }
            },
            {
                $lookup:{
                    from:'dt_favorites',
                    localField:'id',
                    foreignField:"user_id",
                    as:"favorites"
                }
            }
        ])
    }

    public async matching(from_user_id:number,user_oid:string,lastOid:string):Promise<any>
    {
        let match:object={
            _id:{
                $ne:StrHelper.toObjectId(user_oid)
            }
        };

        if(StrHelper.isObjectId(lastOid)) match = {
            $and:[
                {
                    _id:{
                        $ne:StrHelper.toObjectId(user_oid)
                    }
                },
                {
                    _id:{
                        $gt:StrHelper.toObjectId(lastOid)
                    }
                }
            ]
        }
        return new Promise((resolve:any) =>{
            User.aggregate([
                {
                    $match:match
                },
                {
                    $limit:2
                },
                {
                    $sort:{
                        _id:-1
                    }
                },
                {
                    $lookup:{
                        from:'dt_follows',
                        localField:'id',
                        foreignField:'follow_user_id',
                        pipeline:[
                            {
                                $match:{
                                    from_user_id:from_user_id,
                                }
                            }
                        ],
                        as:'follows'
                    }
                },
                {
                    $lookup:{
                        from: 'dt_attachments',
                        localField: 'avatar_attachment_id',
                        foreignField: 'id',
                        as:'attachments'
                    }
                },
                {
                    $project:{
                        full_name:1,
                        age:1,
                        address:1,
                        introduce:1,
                        location:1,
                        follow:{ $arrayElemAt: [ "$follows", 0 ] },
                        attachment:{ $arrayElemAt: [ "$attachments", 0 ] }
                    }
                }
            ]).then(res=>resolve(res ?? null))
        })
    }
}

export default UserRepository