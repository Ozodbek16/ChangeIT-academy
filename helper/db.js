const mongoose = require("mongoose");

module.exports = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    console.log("MongoDB success connected");
  } catch (error) {
    console.log(error);
  }
};
