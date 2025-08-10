import Apperror from "../../utils/Apperror.js"
import createImageObject from "../../utils/images/createImageObj.js"
import deleteImageFile from "../../utils/images/deleteImageFile.js"
import { getPaginationData } from "../../utils/pagination/pagination.js"
import * as data from "./category.data.js"
import mongoose from "mongoose"

const addCategory = async (body) => {
    const exist = await data.existCategoryByName(body.name)
    if (exist) throw new Apperror("category name already exist ", 400)
    const image = createImageObject(body.image);
    if (image) {
        body.image = image
    }
    
    const category = await data.createCategory(body);
    return category;
    1
}

const getallCategory = async (page,limit,skip) => {
    const items = await data.getAllCategories(limit,skip);
    if (!items || items.length === 0) throw new Apperror("categories not found", 400)
         const pagination = getPaginationData(items,page,limit)
            return {
                ...pagination,
                items
            };
    
}
export const getCategoryById = async (id) => {

    const MongoseId = new mongoose.Types.ObjectId(id);
    const category = await data.getCategoryById(MongoseId);
    if (!category) throw new Apperror("category not found", 400);
    return category;
};
const updateCategory = async (id, body, file) => {
    const category = await data.getCategoryById(id);
    if (!category) throw new Apperror("category not found", 400);

    if (file) {
        const image = createImageObject(file);
        if (image) {
            body.image = image;
        }
        if (category.image?.name) {
            await deleteImageFile(category.image);
        }
    }

    const edit = await data.updateCategoryById(id, body);
    return edit;
};
const deleteCategory = async (id) => {

    const category = await data.getCategoryById(id);
    if (!category) throw new Apperror("category not found", 404);
    if (category.image?.name) {
        await deleteImageFile(category.image);
    }
    const deleted = await data.deleteCategoryById(id);
    if (!deleted) throw new Apperror("failed to delete category", 500);
    return deleted;

}
export {
    addCategory,
    getallCategory,
    updateCategory,
    deleteCategory

}