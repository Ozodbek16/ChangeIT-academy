const Contact = require("../../model/Contact");

module.exports = {
    home: async (req, res) => {
        res.render("admin/contactPage", {
          layout: "admin",
          error: req.flash("error"),
        });
      },
    edit: async (req, res) => {
      try {
        await Contact.findByIdAndUpdate(req.params.id, {
          $set: req.body,
        });
    
        res.redirect("back");
      } catch (error) {
        req.flash("error", "Something went wrong?");
        console.log(error);
        res.redirect("back");
      }
    },
    editList: async (req, res) => {
      try {
        await Contact.findOneAndUpdate(
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
    }
}