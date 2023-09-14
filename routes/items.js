const upload  = require("../middleware/multer");
const express = require("express");

const { getItems, addItem, downloadFile } = require("../controllers/items");

const router = express.Router();

router.route("/").get(getItems).post(upload.single("file"), addItem);

module.exports = router;