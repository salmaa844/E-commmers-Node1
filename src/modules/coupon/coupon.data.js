import { CouponModel } from "../../../Database/models/coupon.model.js"

export const findCouponByCode = async(code)=>{
    return await CouponModel.findOne({code})
}
export const findCouponById= async(couponId)=>{
    return await CouponModel.findById({_id:couponId})
}
export const createCoupon = async (data)=>{
       return await CouponModel.create(data)
}

export const getAll = async(limit, skip)=>{
    const results= await CouponModel.find().limit(limit).skip(skip).select("code discount validFrom validUntil usedCount status");
    const count = await CouponModel.countDocuments();
       return {
           count,
           results
       }
}
export const updateCoupon = async(id,couponData)=>{
    const Coupon = await CouponModel.findByIdAndUpdate(id,couponData,{new:true}).select("code discount validFrom validUntil usedCount status");
    return Coupon;
}
export const removeCoupon= async(id)=>{
    return CouponModel.findByIdAndDelete(id)
}