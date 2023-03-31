import Coupon from "../models/couponModel.js";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongodb.js";

const createCoupon = asyncHandler(async (req, res) => {
  try {
    const newCoupon = await Coupon.create(req.body);
    res.json(newCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

const getAllCoupons = asyncHandler(async (req, res) => {
  try {
    const coupons = await Coupon.find();
    res.json(coupons);
  } catch (err) {
    throw new Error(err);
  }
});

const updateCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updateCoupon = await Coupon.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updateCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

const deleteCoupon = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteCoupon = await Coupon.findByIdAndDelete(id);
    res.json(deleteCoupon);
  } catch (err) {
    throw new Error(err);
  }
});

export { createCoupon, getAllCoupons, updateCoupon, deleteCoupon };
