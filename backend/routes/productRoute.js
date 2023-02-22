const express = require("express");
const {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
} = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getaProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);
router.get("/wishlist", authMiddleware, addToWishlist);

module.exports = router;
