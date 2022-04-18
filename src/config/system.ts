const multer = require("multer");

export default {
    single:multer().single('file')
}