const express = require("express");
const {
  createBrand,
  updateBrand,
  getBrand,
  getAllBrands,
  deleteBrand,
  likeBrand,
  dislikeBrand,
} = require("../controller/brandCtrl");
const { authMiddleware, isAdmim } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmim, createBrand);
router.put("/likes", authMiddleware, likeBrand);
router.put("/dislikes", authMiddleware, dislikeBrand);
router.put("/:id", authMiddleware, isAdmim, updateBrand);
router.get("/:id", getBrand);
router.get("/", getAllBrands);
router.delete("/:id", authMiddleware, isAdmim, deleteBrand);

module.exports = router;
