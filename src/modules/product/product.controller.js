import createImageObject from "../../utils/images/createImageObj.js";
import { getPagination } from "../../utils/pagination/pagination.js";
import * as service from "./product.service.js"

export const createProduct = async (req, res, next) => {
    const files = req.files;
    const mainImage = createImageObject(files?.mainImage[0]);
    let subImages = [];
    if (files.subImages && files.subImages.length > 0) {
        subImages = files.subImages.map((file) => createImageObject(file))
    }
    const product = await service.createProduct({
        ...req.body,
        mainImage,
        subImages,
    })
    res.status(201).json({
        message: "success",
        data: product
    })
}

export const getAllProduct = async (req, res, next) => {
    const { page, limit, skip } = getPagination(req);
    const product = await service.getAllProduct(page, limit, skip);
    return res.status(200).json({
        message: "success",
        data: product
    })
}
export const getProductById = async (req, res, next) => {

    const product = await service.getProductById(req.params.id);
    res.status(201).json({
        message: "success",
        data: product
    })
}

export const updateProductById = async (req, res, next) => {

    const product = await service.updateProductById(req.params.id, req.body);
    res.status(201).json({
        message: "success",
        data: product
    })
}