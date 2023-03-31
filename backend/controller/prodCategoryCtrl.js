import PCategory from "../models/prodCategoryModel.js";
import asyncHandler from "express-async-handler";
import validateMongoDbId from "../utils/validateMongodb.js";

const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await PCategory.create(req.body);
    res.json(newCategory);
  } catch (err) {
    throw new Error(err);
  }
});

const updateCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const updatedCategory = await PCategory.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.json(updatedCategory);
  } catch (err) {
    throw new Error(err);
  }
});

const deleteCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const deleteCategory = await PCategory.findByIdAndDelete(id);
    res.json(deleteCategory);
  } catch (err) {
    throw new Error(err);
  }
});

const getCategory = asyncHandler(async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const getaCategory = await PCategory.findById(id);
    res.json(getaCategory);
  } catch (err) {
    throw new Error(err);
  }
});

const getAllCategory = asyncHandler(async (req, res) => {
  try {
    const getAllCategory = await PCategory.find();
    res.json(getAllCategory);
  } catch (err) {
    throw new Error(err);
  }
});

export {
  createCategory,
  updateCategory,
  deleteCategory,
  getCategory,
  getAllCategory,
};
