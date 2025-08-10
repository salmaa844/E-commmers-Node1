import mongoose from "mongoose";

const reviewSchema = new mongoose.Schema({

    userId:{
        type:mongoose.Types.ObjectId,
        ref:"User",
        required:true
    },
    productId:{
        type:mongoose.Types.ObjectId,
        ref:"Product",
        required:true
    },
    comment:{
        type:String,
        required:true,
        trim:true
    }

},{
    timestamps:true
})

export const ReviewSchema = mongoose.model("Review",reviewSchema);