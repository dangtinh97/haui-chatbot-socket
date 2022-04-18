import {BaseRepository} from "./base.repository";
import Attachment from "../models/attachment.model";

class AttachmentRepository extends BaseRepository{
    constructor() {
        super(Attachment);
    }
}

export default AttachmentRepository