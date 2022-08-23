const Home = require("../../model/Home");

module.exports = {
    home: async (req, res) => {
        res.render("admin/homePage", {
          layout: "admin",
          error: req.flash("error"),
        });
    },
    edit: async (req, res) => {
        try {
          await Home.findByIdAndUpdate(req.params.id, {
            $set: req.body,
          });
      
          res.redirect("back");
        } catch (error) {
          req.flash("error", "Something went wrong?");
          console.log(error);
          res.redirect("back");
        }
    },
    listEdit: async (req, res) => {
        try {
          await Home.findOneAndUpdate(
            { [`${req.params.name}._id`]: req.params.itemid },
            {
              $set: {
                [`${req.params.name}.$`]: req.body,
              },
            }
          );
      
          res.redirect("back");
        } catch (error) {
          req.flash("error", "Something went wrong?");
          console.log(error);
          res.redirect("back");
        }
    },
    push : async (req, res) => {
      try {
        await Home.findOneAndUpdate({id: req.params.id}, {
          $push:{
            [req.params.name]: req.body
          }
        })
        res.redirect('back')
      } catch (error) {
        req.flash("error", "Something went wrong?");
          console.log(error);
          res.redirect("back");
      }
    }
}