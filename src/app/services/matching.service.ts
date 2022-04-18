import {Request, Response} from "express";
import {ApiResponse} from "../responses/ApiResponse";
import ResponseSuccess from "../responses/ResponseSuccess";
import UserRepository from "../repositories/user.repository";
import FollowRepository from "../repositories/follow.repository";
import StrHelper from "../helpers/str.helper";

class MatchingService {
    protected readonly userRepository:UserRepository
    protected readonly followRepository:FollowRepository
    constructor(public req:Request, public res:Response) {
        this.userRepository = new UserRepository()
        this.followRepository = new FollowRepository()
    }

    public async matching(userOid:string,lastOid:string):Promise<ApiResponse>
    {
        const matching:Array<any> =await this.userRepository.matching(this.req.user.id as number,userOid,lastOid)
        const response:Array<any> = matching.map(function (user){
            return {
                user_oid:user._id,
                gender:user.gender,
                age:user.age,
                address:user.address ?? "",
                avatar:user.attachment ? user.attachment.full_url : "",
                follow:user.follow ? user.follow.type :"",
                introduce:user.introduce ?? ""
            }
        })

        return new ResponseSuccess({
            list:response
        },this.res.__('success'),response.length>0 ? 200 : 204)
    }

    public async store(userOid:string,type:string):Promise<ApiResponse>
    {
        const user =await this.userRepository.findOne({
            _id:StrHelper.toObjectId(userOid)
        })

        await this.followRepository.findAndUpdate({
            from_user_id:this.req.user.id,
            follow_user_id:user.id,
        },{
            type:type,
            deleted_flag:false
        },true)
        return new ResponseSuccess()
    }
}

export default MatchingService