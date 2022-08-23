const fs = require("fs");
const path = require("path");
module.exports = (filename) => {
  return new Promise((res, rej) => {
    fs.unlink(path.join(__dirname, "..", "public", "img", filename), (err) => { if (err) rej(err); else res() });
  });
};