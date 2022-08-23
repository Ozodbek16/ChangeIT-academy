const express = require("express");
const router = express.Router();
const login = require('../../controllers/admin/login')

router.get("/", login.home);

router.post("/", login.post);

module.exports = router;
