const toDel = require("../../utils/toDel");
const Images = require("../../model/images");

module.exports = {
  home: async (req, res) => {
    const imgs = await Images.find();

    res.render("admin/imgs", {
      layout: "admin",
      img: imgs[0],
    });
  },
  post: async (req, res) => {
    const filename = await Images.findById("62f1f4fffbd1da7cfd81c1f4");

    await toDel(`${filename[`${req.params.name}`]}`);

    await Images.findByIdAndUpdate("62f1f4fffbd1da7cfd81c1f4", {
      [`${req.params.name}`]: req.file.filename,
    });

    res.redirect("back");
  },
};
