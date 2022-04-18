import {BaseRepository} from "./base.repository";
import Favorite from "../models/favorite.model";

class FavoriteRepository extends BaseRepository{
    constructor() {
        super(Favorite);
    }
}

export default FavoriteRepository