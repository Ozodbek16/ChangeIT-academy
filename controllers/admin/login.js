const adminModel = require("../../model/admin-model");
const bcrypt = require("bcrypt");

module.exports = {
    home: (req, res) => {
        res.render("admin/login", {
          layout: "auth",
          title: "Tizimga kirish",
          error: req.flash("error"),
        });
    },
    post: async (req, res) => {
        try {
          const admin = await adminModel.findOne({ name: req.body.name });
          if (!admin) {
            req.flash("error", "Username or password is incorrect!");
            res.redirect("/admin");
          } else {
            const pass = await bcrypt.compare(req.body.password, admin.password);
            if (pass) {
              req.session.authen = true;
              req.session.admin = admin;
              res.redirect("/admin");
            } else {
              req.flash("error", "Password is incorrect!");
              res.redirect("/admin");
            }
          }
        } catch (error) {
          req.flash("error", "Username or password is incorrect!");
          res.redirect("/admin");
        }
      }
}