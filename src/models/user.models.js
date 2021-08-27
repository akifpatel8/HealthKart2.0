const mongoose = require("mongoose");

const itemsSchema = new mongoose.Schema(
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

const Item = mongoose.model("item", itemsSchema);
module.exports = Item;
