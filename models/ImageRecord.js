const mongoose = require("mongoose");

const ImageSchema = new mongoose.Schema({
  agency_name: String,
  milk_1_liter: String,
  milk_500_ml: String,
  milk_250_ml: String,
  milk_120_ml: String,
  curd_1_liter: String,
  curd_500_ml: String,
  curd_400_ml: String,
  curd_200_ml: String,
  curd_110_ml: String,
  other_product: String,
  other_product_quantity: String,
  submittedAt: {
    type: Date,
    default: Date.now,
  },
  image: String, // base64 image string
});

module.exports = mongoose.model("ImageRecord", ImageSchema);
