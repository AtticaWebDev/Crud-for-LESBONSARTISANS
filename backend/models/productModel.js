import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  type: String,
  price: Number,
  rating: Number,
  available: Boolean,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
