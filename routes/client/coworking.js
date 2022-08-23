const express = require("express");
const router = express.Router();
const coworking = require("../../controllers/client/coworking");

router.get("/", coworking.get);

module.exports = router;
