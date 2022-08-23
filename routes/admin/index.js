const express = require("express");
const router = express.Router();
const pages = require("../../controllers/admin/pages");
const HomePage = require("../../controllers/admin/homePage");
const CoworkingPage = require("../../controllers/admin/coworkingPage");
const ContactPage = require("../../controllers/admin/contactPage");
const NavPage = require("../../controllers/admin/navFoot");

router.get("/", async (req, res) => {
  res.render("admin/admin", {
    layout: "admin",
  });
});

router.get("/pages/:name/:nam", pages.page);

// Navbar and Foooter
router.get("/edit/foot_nav", NavPage.home);

router.post("/edit/foot_nav/:id/:name", NavPage.edit);

// home

router.get("/home/edit", HomePage.home);

router.post("/edit/home/:id/:name", HomePage.edit);

router.post("/list/edit/home/:id/:name", HomePage.push);

router.post("/list/edit/home/:id/:name/:itemid", HomePage.listEdit);

// coworking

router.get("/coworking/edit", CoworkingPage.home);

router.post("/edit/coworking/:id/:name", CoworkingPage.edit);

router.post("/coworking/list/edit/:id/:name", CoworkingPage.editList);

router.post("/coworking/list/delete/:id/:index", CoworkingPage.delete);

// contact
router.get("/contact/edit", ContactPage.home);

router.post("/edit/contact/:id/:name", ContactPage.edit);

router.post("/contact/list/edit/:id/:name/:itemid", ContactPage.editList);

// crud
router.use("/crud", require("./crud"));

router.use("/img", require("./img"));

// users

router.use("/users", require("./users"));

// Links

router.use('/links', require('./links'))

module.exports = router;