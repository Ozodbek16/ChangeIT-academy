module.exports = (req, res, next) => {
  if (!req.session.authen) {
    res.redirect("/admin/login");
  } else {
    // const admin = model.findById();
    // res.locals(admin);
    next();
  }
};