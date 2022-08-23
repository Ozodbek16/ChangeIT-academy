const newLocal = "Page not found";
module.exports = (req, res) => {
  res.render("404", {
    title: newLocal,
    layout: 'auth'
  });
};
