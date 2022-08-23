const express = require("express");
const router = express.Router();

router.use("/", require("./home"));

router.use("/courses", require("./courses"));

router.use("/coworking", require("./coworking"));

router.use("/lessons", require("./lessons"));

router.use("/contact", require("./contact"));

module.exports = router;