import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

app.use("/", (req, res) => {
  res.send("Hello from server sode");
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
