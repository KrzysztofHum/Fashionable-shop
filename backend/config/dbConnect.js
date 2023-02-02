const mongoose = require("mongoose");

const dbConnect = () => {
  try {
    const conn = mongoose.connect(process.env.MONGODB_URL);
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Databse error");
    throw new Error(err);
  }
};

module.exports = dbConnect;
