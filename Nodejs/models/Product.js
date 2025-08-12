const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  sku: String,
  salesCount: Number,
  revenue: Number,
  salesUnitsLabel: String, // like "Sales" or "units"
  growthPercent: Number,
  growthPositive: Boolean, // true if growth is positive
  imageUrl: String,
});

module.exports = mongoose.model("Product", productSchema);
