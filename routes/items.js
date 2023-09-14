const express = require("express");
const router = express.Router();

const uploadResume  = require("../middleware/multer");
const uploadCert  = require("../middleware/multer");
const { getResume, addResume, getCert, addCert} = require("../controllers/items");

router.route("/resume").get(getResume).post(uploadResume.single("file"), addResume);
router.route("/cert").get(getCert).post(uploadCert.single("file"), addCert);

module.exports = router;