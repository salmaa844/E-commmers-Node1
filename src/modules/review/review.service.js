import Apperror from "../../utils/Apperror.js";
import { getPaginationData } from "../../utils/pagination/pagination.js";
import * as data from "./review.data.js"

export const createReview = async (review)=>{
   
    const exist = await data.findReview({
        userId:review.userId,
        productId:review.productId
    })

    if(exist) throw new Apperror("your cant review this product twice",400)

   return await data.createReview(review);
    
    
}
export const getAllReview = async (productId,page,limit,skip)=>{
    const allreview = await data.getAllReview(productId,limit,skip);
    if(!allreview) return {message:"not found any review about you"}
    const reviewpag = getPaginationData(allreview,page,limit);
    return {
        reviewpag,
        review:allreview
    }
}

export const removeReview = async (userId, productId) => {
  const existProduct = await data.findReview({ userId, productId });
  if (!existProduct) throw new Apperror("Review not found", 404);

  await data.removeReview(userId, productId);

  return true;
};
export const removeReviewByAdmin = async (id) => {

  await data.removeReviewByAdmin(id);

  return true;
};
