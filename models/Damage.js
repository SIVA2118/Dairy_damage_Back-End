const mongoose = require('mongoose');

const damageSchema = new mongoose.Schema({
  agency_name: String,
  milk_1_liter: Number,
  milk_500_ml: Number,
  milk_250_ml: Number,
  milk_120_ml: Number,
  curd_1_liter: Number,
  curd_500_ml: Number,
  curd_400_ml: Number,
  curd_200_ml: Number,
  curd_110_ml: Number,
  other_product: String,
  other_product_quantity: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Damage', damageSchema);
