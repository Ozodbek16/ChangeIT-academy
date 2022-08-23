const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("admin/register", {
    layout: "auth",
    title: "Ro'yxatdan o'tish",
  });
});

router.post("/", (req, res) => {});

module.exports = router;
