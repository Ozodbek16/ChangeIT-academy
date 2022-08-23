const Lessons = require('../../model/Crud/Lessons')
const Contact = require('../../model/Contact')

exports.getAll = async (req, res) => {
  const lessons = await Lessons.find();
  const contact = await Contact.find()
  res.render("openlessons", {
    title: "Openlessons",
    lessons,
    contact: contact[0]
  });
};
