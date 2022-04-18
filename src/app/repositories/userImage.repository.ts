import {BaseRepository} from "./base.repository";
import ImageUser from "../models/imageUser.model";


class UserImageRepository extends BaseRepository{
    constructor() {
        super(ImageUser);
    }
}
export default UserImageRepository