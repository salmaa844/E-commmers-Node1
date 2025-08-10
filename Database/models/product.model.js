import mongoose from "mongoose";
import imageSchema from "./../schema/image.schema.js"
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        default: true,
        minLength: 0,
        maxLength: 50
    },
    description: {
        type: String,
    },
    price: {
        type: Number,
        required: true

    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: "Category",
        required: true
    },
    attributes: [{
        name: { type: String, required: true },
        value: [
            {
                type: mongoose.Schema.Types.Mixed,
                required: true
            }
        ],
        _id:false
    }],
    subcategory: {
        type: mongoose.Types.ObjectId,
        ref: "SubCategory",
        required: true
    },
    discount: {
        type: Number,
        required: true,
        min: 0,
        max: 50
    },
    finalPrice: {
        type: Number
    },
    mainImage: {
        type:imageSchema,
        required: true
    },
    subImages: {
        type: [imageSchema],
        default: []
    },
    stock: {
        type: Number,
        required: true,
        min: 0
    }


}, {
    timestamp: true
})

export const ProductSchema = mongoose.model("Product", productSchema)