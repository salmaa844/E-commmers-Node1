import * as data from "./subcategory.data.js"
import Apperror from "../../utils/Apperror.js"
import { existCategoryById } from "./../category/category.data.js"
import { getPaginationData } from "../../utils/pagination/pagination.js";
const createSubCategory = async (payload) => {
    const category = await existCategoryById(payload.categoryId);
    if (!category) {
        throw new Apperror("category not found", 400);
    }
    const exist = await data.getSubcategoryByCategoryId(payload);
    if (exist) {
        throw new Apperror("subcategory already exists", 400);
    }

    const subcategory = await data.createSubCategory(payload);
    if (!subcategory) {
        throw new Apperror("Failed to create subcategory", 500);
    }
    return subcategory;
};

const getallSubCategory = async (page,limit,skip) => {

    const items = await data.getallSubCategory(limit,skip);
    if (!items || items.length === 0) {
        throw new Apperror("categories not found", 400)
    }
    const pagination = getPaginationData(items,page,limit)
    return {
        ...pagination,
        items
    };
}
const getSubCategoryById = async (id) => {
    const subcategory = await data.getSubcategoryById(id);
    if (!subcategory) {
        throw new Apperror("category not found", 400)
    }
    return subcategory;
}

const updateSubcategoryById = async (id, updateData) => {
    const exist = await data.existsubCategoryById(id); 
    if (!exist) {
        throw new Apperror("subcategory not found", 400);
    }
    const subcategory = await data.updateSubcategoryById(id, updateData);
    if (!subcategory) throw new Apperror("subcategory not found", 400);
    return subcategory;
};
const deleteSubCategoryById = async (id) => {
const deteted = await data.deleteSubcategoryById(id);
 if(!deteted) throw new Apperror("subcategory not found",400)
    return ;
}
export {
    createSubCategory,
    getallSubCategory,
    getSubCategoryById,
    updateSubcategoryById,
    deleteSubCategoryById
}