import express from "express";
import {
  createBrand,
  updateBrand,
  getBrand,
  getAllBrand,
  deleteBrand,
} from "../controller/brandCtrl.js";
import { authMiddleware, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, createBrand);
router.put("/:id", authMiddleware, isAdmin, updateBrand);
router.get("/:id", getBrand);
router.get("/", getAllBrand);
router.delete("/:id", authMiddleware, isAdmin, deleteBrand);

export default router;
