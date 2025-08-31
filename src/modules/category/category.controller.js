import Apperror from "../../utils/Apperror.js"
import { getPagination } from "../../utils/pagination/pagination.js"
import * as service from "./category.service.js"
const createCategory = async (req, res, next) => {
    if (!req.file) {
        return next(new Apperror("image file is required", 400))
    }
    const category = await service.addCategory({ ...req.body, image: req.file })
    return res.status(201).json({
        message: "category created",
        data: category
    })
}
const getallCategory = async (req, res, next) => {
    const {page,limit,skip} = getPagination(req)
    const category = await service.getallCategory(page,limit,skip);
    return res.status(201).json({
        message: "success",
        count:category.count,
        categories:category.categories
    })
}
const getCategoryById = async (req, res, next) => {

    const category = await service.getCategoryById(req.params.id);
    return res.status(200).json({
        message: "category found",
        data:category
    });

};
const updateCategory = async (req, res, next) => {
    const id= req.params.id;
    const updatedata = req.body;
     const category = await service.updateCategory(id,updatedata,req.file);
    return res.status(200).json({
        message: "update category success",
        data: category
    });
}
const deleteCategory = async (req, res, next) => {
 const id = req.params.id;
  const category = await service.deleteCategory(id);
    return res.status(200).json({
        message: "delete category success",
        
    });
}
export {
    createCategory,
    getallCategory,
    updateCategory,
    deleteCategory,
    getCategoryById

}