import {BaseRepository} from "./base.repository";
import Message from "../models/message.model";
import StrHelper from "../helpers/str.helper";

class MessageRepository extends BaseRepository{
    constructor() {
        super(Message);
    }

    async getMessage(roomId:Number,lastOid:string)
    {
        return new Promise((resolve:any)=>{
            this._model.aggregate([
                {
                    $match:{
                        room_id:roomId,
                        _id: lastOid === "" ? {
                            $exists:true
                        } : {
                            $gt:StrHelper.toObjectId(lastOid)
                        }
                    }
                },
                {
                    $sort:{
                        _id:-1
                    }
                },
                {
                    $limit:20
                }
            ]).then(resolve)
        })
    }
}

export default MessageRepository