
import mongoose from "mongoose";

const productInCart = new mongoose.Schema({
  productId: {
    type: mongoose.Types.ObjectId,
    ref: "Product",
    required: true
  },
  qnt: {
    type: Number,
    default: 1
  },
  price:{
    type:Number,
    required:true
  },
  attributes: [
    {
      name: {
        type: String,
        required: true
      },
      value: {
        type: mongoose.Schema.Types.Mixed, 
        required: true
      },
      _id:false
    }
  ]
}, { _id: true });

const cartSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        productInCart
    ],

}, {
    timestamps: true
})

export const CartSchema = mongoose.model("Cart", cartSchema);