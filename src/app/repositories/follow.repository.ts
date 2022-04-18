import {BaseRepository} from "./base.repository";
import Follow from "../models/follow.model";

class FollowRepository extends BaseRepository{
    public constructor() {
        super(Follow);
    }
}

export default FollowRepository