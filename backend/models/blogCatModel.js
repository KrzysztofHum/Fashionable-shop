const mongoose = require("mongoose");

var blogCategorySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timeseries: true }
);

module.exports = mongoose.model("BCategory", blogCategorySchema);
