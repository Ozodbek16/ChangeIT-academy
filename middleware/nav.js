const links = require('../model/links');
const Nav = require('../model/Nav')
module.exports = async (req, res, next) => {
  const nav = await Nav.find()
  const link = await links.findById('62fb2c6519cafe31b4ed9ff4')
  res.locals.link = link
  res.locals.nav = nav[0]
  next()
};