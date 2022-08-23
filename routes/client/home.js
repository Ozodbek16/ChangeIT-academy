const express = require("express");
const router = express.Router();
const home = require("../../controllers/client/home");

router.get("/", home.get);

module.exports = router;
