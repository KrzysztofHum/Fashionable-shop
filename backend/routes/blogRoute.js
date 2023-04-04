import express from "express";
import {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
  uploadBlogs,
} from "../controller/blogCtrl.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";
import { uploadPhoto, blogImgResize } from "../middlewares/uploadImages.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBlog);
router.put(
  "/upload/:id",
  authMiddleware,
  isAdmin,
  uploadPhoto.array("images", 2),
  blogImgResize,
  uploadBlogs
);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put("/:id", authMiddleware, isAdmin, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmin, deleteBlog);

export default router;
