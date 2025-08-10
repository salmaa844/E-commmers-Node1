import { getPagination } from "../../utils/pagination/pagination.js";
import * as service from "./subcategory.service.js"
const createSubCategory = async (req, res, next) => {
    
    const subcategory = await service.createSubCategory(req.body);
    res.status(200).json({
        message: "created subcategory success",
        data: subcategory
    })

}
const getallSubCategory = async (req, res, next) => {
    const {page,limit,skip} = getPagination(req);
    const subcategory = await service.getallSubCategory(page,limit,skip);
    res.status(200).json({
        message: "success",
        data: subcategory
    })
}
const getSubCategoryByCategoryId = async (req, res, next) => {
    const subcategory = await service.getSubcategoryByCategoryId(req.params.id);
    res.status(200).json({
        message: "success",
        data: subcategory
    })
}
const getSubCategoryById = async (req, res, next) => {
    const subcategory = await service.getSubCategoryById(req.params.id);
    res.status(200).json({
        message: "success",
        data: subcategory
    })
}
const updateSubCategory = async (req, res, next) => {
    const subcategory = await service.updateSubcategoryById(req.params.id, req.body);
    res.status(200).json({
        message: "update SubCategory success",
        data: subcategory
    })

}
const deleteSubCategory = async (req, res, next) => {
   await service.deleteSubCategoryById(req.params.id);
    res.status(200).json({
        message: "delete SubCategory success",
    })
}
export {
    createSubCategory,
    getallSubCategory,
    getSubCategoryById,
    updateSubCategory,
    deleteSubCategory,
    getSubCategoryByCategoryId

} 