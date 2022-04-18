import {BaseRepository} from "./base.repository";
import Message from "../models/message";


class MessageRepository extends BaseRepository{
    constructor() {
        super(Message);
    }

    async listMessage(roomUUID:string,lastOid:string):Promise<Array<any>>
    {
        return new Promise((resolve:any)=>{
            this._model.aggregate([
                {
                    $match:{
                        room_uuid:roomUUID
                    }
                },
                {
                    $sort:{
                        _id:-1
                    }
                },
                {
                    $limit:25
                }
            ]).then((res:Array<any>)=> resolve(res))
        })
    }
}

export default MessageRepository
