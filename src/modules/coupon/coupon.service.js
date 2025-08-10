import Apperror from "../../utils/Apperror.js";
import { getPaginationData } from "../../utils/pagination/pagination.js";
import * as data from "./coupon.data.js"


export const createCoupon = async (couponData) => {
  const exists = await data.findCouponByCode(couponData.code);
  if (exists) return { message: "coupon already exists" };

  const coupon = await data.createCoupon(couponData);
  return coupon;
};

export const getAll = async(page, limit, skip)=>{
   const coupon = await data.getAll(limit,skip);
   const result = getPaginationData(coupon,page,limit);
   return result
    
}
export const updateCoupon = async(id,couponData)=>{
  const exist = await data.findCouponById(id);
  if(!exist) throw new Apperror("coupon not exists",404);
    const Coupon = await data.updateCoupon(id,couponData);
    return Coupon
}
export const removeCoupon = async(id)=>{
    const Coupon = await data.removeCoupon(id);
    return Coupon
}
