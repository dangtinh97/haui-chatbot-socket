import {BaseRepository} from "./base.repository";
import Confession from "../models/confession";
import StrHelper from "../helpers/str.helper";

class ConfessionRepository extends BaseRepository {
    constructor() {
        super(Confession);
    }

    async listPost(lastOid: string):Promise<Array<any>> {
        return new Promise((resolve: any) => {
            this._model.aggregate([
                {
                    $match: {
                        _id: !StrHelper.isObjectId(lastOid) ? {
                            $exists: true
                        } : {
                            $lt: StrHelper.toObjectId(lastOid)
                        }
                    }
                },
                {
                    $sort: {
                        _id: -1
                    }
                },
                {
                    $limit: 20
                },
                {
                    $lookup:{
                        from:"confession_actions",
                        as: 'comments',
                        let: { confession_oid: '$_id' }, //cái này là của locaField
                        pipeline:[
                            {
                                $match:{
                                    $and:[
                                        {$expr: { $eq: [ '$confession_oid', '$$confession_oid' ] }},
                                        {$expr: { $eq: [ '$type', 'COMMENT' ] }},
                                    ],

                                }
                            },
                            {
                                $sort:{
                                    _id:-1,
                                },
                            },
                            {
                                $limit:2
                            }
                        ],

                    }
                }
            ]).then((res:Array<any>)=>{
                return resolve(res)
            })
        })
    }
}

export default ConfessionRepository
