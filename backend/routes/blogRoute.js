const express = require("express");
const {
  createBlog,
  updateBlog,
  getBlog,
  getAllBlogs,
  deleteBlog,
  likeBlog,
  dislikeBlog,
} = require("../controller/blogCtrl");
const { authMiddleware, isAdmim } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmim, createBlog);
router.put("/likes", authMiddleware, likeBlog);
router.put("/dislikes", authMiddleware, dislikeBlog);
router.put("/:id", authMiddleware, isAdmim, updateBlog);
router.get("/:id", getBlog);
router.get("/", getAllBlogs);
router.delete("/:id", authMiddleware, isAdmim, deleteBlog);

module.exports = router;
