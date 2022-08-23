const Courses = require('../../model/Crud/Courses');

exports.getAll = async (req, res) => {
  let courses = await Courses.find();

  res.render("courses", {
    title: "All courses",
    courses
  });
};

exports.getOne = async (req, res) => {
  let course = await Courses.findById(req.params.id);
  let fors = [];
  let learns = [];

  course.for_title.forEach((item, index) => {
    fors.push({
      title: course['for_title'][index],
      description: course['for_description'][index],
      index: index + 1,
    });
  });

  course.learns_title.forEach((item, index) => {
    learns.push({
      title: course.learns_title[index],
      img: course.learns_img[index],
      description: course.learns_description[index],
    });
  });
  setTimeout(() => {
    res.render("about-course", {
      title: "All about",
      course,
      fors,
      learns
    });
  }, 1000);
};
