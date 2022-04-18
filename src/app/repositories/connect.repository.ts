import {BaseRepository} from "./base.repository";
import Connect from "../models/connect";

class ConnectRepository extends BaseRepository{
    constructor() {
        super(Connect);
    }
}

export default ConnectRepository
