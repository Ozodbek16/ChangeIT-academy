const Contact = require('../../model/Contact')
const User = require('../../model/Users')
module.exports = {
  get: async (req, res) => {
    const contact = await Contact.find()
    res.render("request", {
      title: "Contact",
      contact: contact[0]
    });
  },
  post: async (req, res) => {
    try {
      const user = new User({
        name: req.body.name,
        phone: req.body.phone
      })
  
      user.save()
      res.redirect('back')
    } catch (error) {
      res.redirect('back')
    }
  },
  delID: async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.redirect('back')
  }
};