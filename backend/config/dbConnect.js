import mongoose from "mongoose";

const dbConnect = () => {
  try {
    const conn = mongoose.connect("mongodb://localhost:27017/fashionable-shop");
    console.log("Database connected successfully");
  } catch (err) {
    console.log("Databse error");
    throw new Error(err);
  }
};

export default dbConnect;
