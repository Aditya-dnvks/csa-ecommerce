const mongoose = require("mongoose");

const { Schema } = mongoose;

const productSchema = Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: {
    rate: Number,
    count: Number,
  },
});

const productModel = mongoose.model("product", productSchema);

module.exports = productModel;
