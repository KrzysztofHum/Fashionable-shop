import express from "express";
import {
  createProduct,
  getaProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
  addToWishlist,
  rating,
} from "../controller/productCtrl.js";
import { isAdmin, authMiddleware } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.put("/wishlist", authMiddleware, addToWishlist);
router.put("/rating", authMiddleware, rating);
router.post("/", authMiddleware, isAdmin, createProduct);
router.get("/", getAllProducts);
router.get("/:id", getaProduct);
router.put("/:id", authMiddleware, isAdmin, updateProduct);
router.delete("/:id", authMiddleware, isAdmin, deleteProduct);

export default router;
