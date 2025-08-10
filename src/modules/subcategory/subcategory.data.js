import { SubCategoryModel } from "../../../Database/models/subcategory.model.js"


export const createSubCategory = async (data) => {

    return await SubCategoryModel.create(data);
}

export const getSubcategoryByCategoryId = async (data) => {
    return await SubCategoryModel.exists({
        categoryId: data.categoryId,
        name: data.name
    })
}
export const getSubcategoryForProduct = async (categoryId, sub) => {
    return await SubCategoryModel.findOne({
        _id: sub,
        categoryId
    })

}

export const getallSubCategory = async (limit,skip) => {
    const count =await  SubCategoryModel.countDocuments();
    const data = await SubCategoryModel.find().select("_id name categoryId status").limit(limit).skip(skip)
    return{
        count,
        data
    }
}

export const getSubcategoryById = async (id) => {
    return await SubCategoryModel.findOne({ _id: id }).select("_id name categoryId status")
}
export const existsubCategoryById = async (id) => {
    return await SubCategoryModel.exists({ _id: id })
}

export const updateSubcategoryById = async (id, data) => {
    return await SubCategoryModel.findByIdAndUpdate(id, data, { new: true })
}

export const deleteSubcategoryById = async (id) => {
    return await SubCategoryModel.findByIdAndDelete(id)
};
