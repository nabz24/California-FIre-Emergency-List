const mongoose = require("mongoose");
const ProductSchema = new mongoose.Schema(
  {
    Title: { type: String },
    Price: { type: Number },
    Description: { type: String },
    Purchased: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports.Product = mongoose.model("Product", ProductSchema);
