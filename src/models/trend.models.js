const mongoose = require("mongoose");
const trendSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, required: true },
    img: { type: String, required: true },
  },
  {
    versionKey: false,
  }
);
const Trend = mongoose.model("trend", trendSchema);
module.exports = Trend;
