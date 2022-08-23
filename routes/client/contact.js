const express = require("express");
const router = express.Router();
const contact = require("../../controllers/client/contact");

router.get("/", contact.get);

router.post('/user-contact', contact.post)

router.get('/user-contact/del/:id', contact.delID)

module.exports = router;
