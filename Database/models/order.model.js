import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({

    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true
    },
    products: [
        {
            productId: {
                _id: {
                    type: mongoose.Types.ObjectId,
                    ref: "Product",
                    required: true
                },
                name: {
                    type: String,
                    default: 1,
                    min: 1
                },
                mainImage: {
                    type: Object,
                    required: true
                }
            },
            qnt: { type: Number, default: 1, min: 1 },
            price: { type: Number, required: true },
            finalPrice: { type: Number, required: true },

        }
    ],
    totalPrice: {
        type: String,
        required: true,

    },
    address: {
        type: String,
        required: true,

    },
    phone: {
        type: String,
        required: true,

    },
    couponCode: {
        type: mongoose.Types.ObjectId,
        ref: "Coupon"
    },
    paymentType: {
        type: String,
        default: "cash",
        enum: ["cash", "card"],
        required: true
    },
    status: {
        type: String,
        default: "pending",
        enum: ["pending", "confirmed", "onway", "delivered", "cancelled"],
        required: true
    }

}, {
    timestamps: true
})

export const OrderSchema = mongoose.model("Order", orderSchema);