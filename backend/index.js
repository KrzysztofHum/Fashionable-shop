import express from "express";
import dotenv from "dotenv";
import dbConnect from "./config/dbConnect.js";
import authRouter from "./routes/authRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use("api/user", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
