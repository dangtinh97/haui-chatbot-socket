import {BaseRepository} from "./base.repository";
import Setup from "../models/setup.model";

class SetupRepository extends BaseRepository{
    constructor() {
        super(Setup);
    }
}

export default SetupRepository