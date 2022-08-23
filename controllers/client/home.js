const Home = require("../../model/Home");
const Techs = require("../../model/Crud/Techs");
const Reviews = require("../../model/Crud/Reviews");
const images = require("../../model/images");
const Coworking = require("../../model/Coworking");

exports.get = async (req, res) => {
  const home = await Home.find();
  const techs = await Techs.find();
  const reviews = await Reviews.find();
  const coworking = await Coworking.find();

  res.render("index", {
    title: "ChangeIT academy",
    home: res.locals.langRu ? home[1] : home[0],
    coworking: res.locals.langRu ? coworking[1] : coworking[0],
    reviews,
    techs,
    img: await images.findById("62f1f4fffbd1da7cfd81c1f4"),
  });
};
