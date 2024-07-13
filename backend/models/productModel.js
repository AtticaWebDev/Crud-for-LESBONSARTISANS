import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  type: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  },
  rating: {
    type: String,
    require: true,
  },
  available: {
    type: Boolean,
    require: false,
  },
});

export default mongoose.model("Products", userSchema);
