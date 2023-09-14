const multer = require("multer");
//configure how the files are stored
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //where to store the file
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const fileFilter = (req, file, cb) => {
    //reject file if it's not pdf
    if (
        file.mimetype === "application/pdf"
    ) {
        cb(null, true);
    } else {
            cb(null, false);
        }
};

const upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024,
    },
    fileFilter: fileFilter,
});

module.exports = upload;
