const express = require("express");
const {
  createUser,
  loginUserCtrl,
  getAllUsers,
  deleteUser,
  getaUser,
  updatedUser,
} = require("../controller/userCtrl.js");

const router = express.Router();

router.post("/register", createUser);
router.post("/login", loginUserCtrl);
router.get("/all-users", getAllUsers);
router.get("/:id", getaUser);
router.delete("/:id", deleteUser);
router.put("/:id", updatedUser);

module.exports = router;
