const Coworking = require("../../model/Coworking");

module.exports = {
    home: async (req, res) => {
        const coworking = await Coworking.find();
        res.render("admin/coworkingPage", {
          layout: "admin",
          coworking: coworking[0],
          error: req.flash("error"),
        });
    },
    edit: async (req, res) => {
        try {
          await Coworking.findByIdAndUpdate(req.params.id, { $set: req.body });
          res.redirect("back");
        } catch (error) {
          req.flash("error", "Something went wrong?");
          console.log(error);
          res.redirect("back");
        }
    },
    editList: async (req, res) => {
        try {
          await Coworking.findByIdAndUpdate(req.params.id, {
            $push: {
              [req.params.name]: req.body[req.params.name],
            },
          });
          res.redirect("back");
        } catch (error) {
          req.flash("error", "Something went wrong?");
          res.redirect("back");
        }
    },
    delete: async (req, res) => {
      try {
        await Coworking.findByIdAndUpdate(req.params.id, {
          $pull: {
            'premium_botom': req.body.premium
          }
        })
        res.redirect('back')
      } catch (error) {
        req.flash("error", "Something went wrong?");
        res.redirect("back");
      }
    }
}