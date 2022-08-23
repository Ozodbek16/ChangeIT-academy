const express = require("express");
const router = express.Router();
const courses = require("../../controllers/client/courses");

router.get("/", courses.getAll);

router.get("/:id", courses.getOne);

module.exports = router;
