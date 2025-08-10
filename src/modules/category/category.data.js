import { CategoryModel } from "../../../Database/models/category.model.js"

const createCategory = async (data) => {
    return await CategoryModel.create(data);

}
const getCategoryByName = async (name) => {
    return await CategoryModel.findOne({ name }).select("_id name image status attributes")

}
const existCategoryByName = async (name) => {
    return await CategoryModel.exists({ name })

}
const existCategoryById = async (categoryId) => {
    return await CategoryModel.exists({ _id:categoryId })

}
const getAllCategories = async (limit,skip) => {
    const data= await CategoryModel.find({status:"active"}).select("_id name image status attributes").limit(limit).skip(skip);
    const count = await CategoryModel.countDocuments({status:"active"})

    return {
        data,
        count
    };

}
export const getCategoryById = async (categoryId) => {
    return await CategoryModel.findById(categoryId).select("_id name image.url status attributes");
};
const updateCategoryById = async (categoryid, updatedata) => {
    return await CategoryModel.findByIdAndUpdate(categoryid, updatedata, { new: true }).select("_id name image status attributes");
}
const deleteCategoryById = async (categoryid) => {
    return await CategoryModel.findByIdAndDelete(categoryid)

}

export {
    createCategory,
    getCategoryByName,
    existCategoryByName,
    getAllCategories,
    existCategoryById,
    updateCategoryById,
    deleteCategoryById

}