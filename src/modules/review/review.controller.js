import { getPagination } from "../../utils/pagination/pagination.js";
import * as service from "./review.service.js"

export const create = async (req, res, next) => {

    const { productId, comment } = req.body;
    const userId = req.user._id
    const review = await service.createReview({ userId, productId, comment });
    res.status(201).json({
        message: "create review",
        review
    })

}

export const getAll = async (req, res, next) => {
    const { id } = req.params
    const { page, limit, skip } = getPagination(req);
    const review = await service.getAllReview(id, page, limit, skip);
    res.status(201).json(review)

}
export const removeReview = async (req, res, next) => {
    const  { productId}= req.query
    const {_id} =req.user
   await service.removeReview(_id, productId);
    res.status(201).json({
        status: "success",
        message: "Review removed successfully"
    })

}
export const removeReviewByAdmin = async (req, res, next) => {
    const  { productId }= req.params;
   await service.removeReviewByAdmin(productId);
    res.status(201).json({
        status: "success",
        message: "Review removed successfully"
    })

}


