const translate = require("translate-google");

module.exports = (text, to = "ru") => {
  return new Promise(async (res, rej) => {
    let result;
    try {
      result = await translate(text, { to });
    } catch (error) {
      return rej(error);
    }
    res(result);
  });
};