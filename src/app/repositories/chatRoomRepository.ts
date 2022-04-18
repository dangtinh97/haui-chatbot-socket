import {BaseRepository} from "./base.repository";
import ChatRoom from "../models/chatRoom.model";

class ChatRoomRepository extends BaseRepository{
    constructor() {
        super(ChatRoom)
    }
}

export default ChatRoomRepository