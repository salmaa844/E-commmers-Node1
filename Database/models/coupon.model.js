
import mongoose from "mongoose";

const couponSchema = new mongoose.Schema({
    code: {
        type:String,
        required:true,
        unique:true,
        uppercase:true
        
    },
    discount:{
        type:Number,
        required:true,
        min:0,
        max:50
    },
   validFrom:{
        type:Date,
         required:true
    },
    validUntil:{
        type:Date,
        required:true
    },
    usedCount:{
        type:Number,
        default:0
    },
    status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    }


},
    {
        timestamps: true
    }
)


export const CouponModel = mongoose.model("Coupon",couponSchema)