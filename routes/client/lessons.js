const express = require("express");
const router = express.Router();
const lessons = require("../../controllers/client/lessons");

router.use("/", lessons.getAll);

module.exports = router;
