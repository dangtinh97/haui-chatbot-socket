import {BaseRepository} from "./base.repository";
import PostAction from "../models/postAction";

class PostActionRepository extends BaseRepository{
    constructor() {
        super(PostAction);
    }
}

export default PostActionRepository
