const Category = require("../models/categoryModel.js");
const asyncHandler = require("express-async-handler");
const validateMongoDbId = require("../utils/validateMongodb.js");

const createCategory = asyncHandler(async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.json(newCategory)
  } catch (err) {
    throw new Error(err);
  }
});

module.exports = { createCategory };
