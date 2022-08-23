const Nav = require("../../model/Nav");

module.exports = {
    home: async (req, res) => {
        const nav = await Nav.find();
        res.render("admin/nav_footer", {
          layout: "admin",
          nav: nav[0],
        });
      },
    edit: async (req, res) => {
        try {
          await Nav.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
          res.redirect("back");
        } catch (error) {
          req.flash("error", "Something went wrong?");
          res.redirect("back");
        }
      }
}