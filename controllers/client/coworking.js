const Coworking = require("../../model/Coworking");
const images = require("../../model/images");

exports.get = async (req, res) => {
  const coworking = await Coworking.find();
  res.render("coworking", {
    title: "Coworking",
    coworking: res.locals.langRu ? coworking[1] : coworking[0],
    img: await images.findById("62f1f4fffbd1da7cfd81c1f4"),
  });
};
