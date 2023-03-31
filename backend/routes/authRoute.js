import express from "express";
import {
  createUser,
  loginUserCtrl,
  getAllUsers,
  deleteUser,
  getaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
  logout,
  updatePassword,
  forgotPasswordToken,
  resetPassword,
  loginAdmin,
  getWishlist,
  saveAddress,
  userCart,
  getUserCart,
  emptyCart,
  applyCoupon,
  createOrder,
  getOrders,
  updateOrderStatus,
} from "../controller/userCtrl.js";

import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/forgot-password-token", forgotPasswordToken);
router.put("/reset-password/:token", resetPassword);
router.put(
  "/order/update-order/:id",
  authMiddleware,
  isAdmin,
  updateOrderStatus
);
router.put("/password", authMiddleware, updatePassword);
router.post("/login", loginUserCtrl);
router.post("/admin-login", loginAdmin);
router.post("/cart", authMiddleware, userCart);
router.get("/cart", authMiddleware, getUserCart);
router.post("/cart/applycoupon", authMiddleware, applyCoupon);
router.post("/cart/cash-order", authMiddleware, createOrder);
router.delete("/empty-cart", authMiddleware, emptyCart);
router.get("/all-users", getAllUsers);
router.get("/get-orders", authMiddleware, getOrders);
router.get("/logout", logout);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.get("/wishlist", authMiddleware, getWishlist);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/save-address", authMiddleware, saveAddress);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/refresh", handleRefreshToken);

export default router;
