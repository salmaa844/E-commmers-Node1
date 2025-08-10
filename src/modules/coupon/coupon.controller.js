import { getPagination } from "../../utils/pagination/pagination.js";
import * as service from "./coupon.service.js"
export const createCoupon = async (req, res, next) => {

    const coupon = await service.createCoupon(req.body);

    res.status(201).json({
        message: "success",
        data: coupon
    })
}

export const getAll = async (req, res, next) => {
    const { page, limit, skip } = getPagination(req)
    const allCoupon = await service.getAll(page, limit, skip);
    res.status(200).json({
            message: "success",
            data: allCoupon
        })
}

export const updateCoupon = async (req, res, next) => {
    const Coupon = await service.updateCoupon(req.params.id, req.body);
    res.status(200).json({
            message: "success",
            data: Coupon
        })
}
export const removeCoupon = async (req, res, next) => {
    await service.removeCoupon(req.params.id);
    res.status(200).json({ message: "remove success" })
}
