import mongoose from "mongoose";

const prodCategorySchema = new mongoose.Schema(
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

export default mongoose.model("PCategory", prodCategorySchema);
