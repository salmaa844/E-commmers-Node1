import { ReviewSchema } from "./../../../Database/models/review.model.js"

export const findReview = async (data) => {
    return await ReviewSchema.findOne(data)
}
export const createReview = async (data) => {
    return await ReviewSchema.create(data)
}

export const getAllReview = async (productId, limit, skip) => {

    const count = await ReviewSchema.countDocuments()
    const review = await ReviewSchema.find({ productId }).
        select("-_id userId comment").
        limit(limit).
        skip(skip)
    return {
        count,
        review
    }
}


export const removeReview = async (userId, productId) => {
  return await ReviewSchema.findOneAndDelete({ userId, productId });
}
export const removeReviewByAdmin = async (id) => {
  return await ReviewSchema.findByIdAndDelete({_id:id});
}

