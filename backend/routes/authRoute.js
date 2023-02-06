const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  deleteUser,
  getaUser,
  updatedUser,
  blockUser,
  unblockUser,
  handleRefreshToken,
} = require("../controller/userCtrl");

const { authMiddleware, isAdmin } = require("../middlewares/authMiddleware");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", authMiddleware, isAdmin, getaUser);
router.delete("/:id", deleteUser);
router.put("/edit-user", authMiddleware, updatedUser);
router.put("/block-user/:id", authMiddleware, isAdmin, blockUser);
router.put("/unblock-user/:id", authMiddleware, isAdmin, unblockUser);
router.put("/refresh", handleRefreshToken);

module.exports = router;
