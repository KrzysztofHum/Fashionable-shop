const mongoose = require("mongoose");

var prodCategorySchema = new mongoose.Schema(
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

module.exports = mongoose.model("PCategory", prodCategorySchema);
