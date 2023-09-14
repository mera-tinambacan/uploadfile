const multer = require("multer");

// ----- configure how the files are stored ----- //
const storageResume = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/resume");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

const storageCert = multer.diskStorage({
    destination: function (req, file, cb) {
        //where to store the file
        cb(null, "uploads/certificates");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    },
});

// ----- Accept pdf file type only ----- //
const fileFilter = (req, file, cb) => {
    if (
        file.mimetype === "application/pdf"
    ) {
        cb(null, true);
    } else {
            cb(null, false);
        }
};

const uploadResume = multer({
    storage: storageResume,
    limits: {
        fileSize: 1024 * 1024,
    },
    fileFilter: fileFilter,
});

const uploadCert = multer({
    storage: storageCert,
    limits: {
        fileSize: 1024 * 1024,
    },
    fileFilter: fileFilter,
});

module.exports = uploadResume;
module.exports = uploadCert;


