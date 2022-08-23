module.exports = (req, res, next) => {
  if (req.query.lang && req.query.lang === "ru") {
    res.locals.langRu = true;
  }
  next();
};
