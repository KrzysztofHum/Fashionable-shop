import express from "express";
import dbConnect from "./config/dbConnect.js";
import dotenv from "dotenv";
import authRouter from "./routes/authRoute.js";
import productRouter from "./routes/productRoute.js";
import blogRouter from "./routes/blogRoute.js";
import brandRouter from "./routes/brandRoute.js";
import categoryRoute from "./routes/prodCategoryRoute.js";
import blogCatRoute from "./routes/blogCatRoute.js";
import couponRoute from "./routes/couponRoute.js";
import uploadRoute from "./routes/uploadRoute.js";
import bodyParser from "body-parser";
import { notFound, errorHandler } from "./middlewares/errorHandler.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import cors from "cors";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/user", authRouter);
app.use("/api/product", productRouter);
app.use("/api/blog", blogRouter);
app.use("/api/category", categoryRoute);
app.use("/api/blogcategory", blogCatRoute);
app.use("/api/brand", brandRouter);
app.use("/api/coupon", couponRoute);
app.use("/api/upload", uploadRoute);

app.use(notFound);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running at PORT ${PORT}`);
});
