const express = require("express");
const router = express.Router();
const upload = require("../../middleware/admin/upld");
const imgs = require("../../controllers/admin/imgs");

router.get("/", imgs.home);

router.post("/edit/:name", upload.single("img"), imgs.post);

module.exports = router;
