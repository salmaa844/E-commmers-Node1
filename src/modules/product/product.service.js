import Apperror from "../../utils/Apperror.js"
import { validateAttributesByCategoryId } from "../../utils/validateAttributes.js"
import * as data from "./product.data.js"
import { getSubcategoryForProduct } from "../subcategory/subcategory.data.js"
import { getPaginationData } from "../../utils/pagination/pagination.js"

export const createProduct = async (body) => {
    const isValid = await validateAttributesByCategoryId(body.category, body.attributes)

    if (!isValid) throw new Apperror("invalid attributes for this category", 400);

    const subcategory = await getSubcategoryForProduct(body.category, body.subcategory);
    if (!subcategory) {
        throw new Apperror("this subcategory doesnt belong to this category", 400)
    }


    if (body.discount || body.discount > 0) {
        body.finalPrice = body.price * (1 - body.discount / 100);

    }
    return await data.createProduct(body)

}

export const getAllProduct = async (page,limit,skip) => {
    const product = await data.getAllProduct(limit,skip);
    if (!product) throw new Apperror("products not found", 400);
    const pagination = getPaginationData(product,page,limit)
    return pagination;
}
export const getProductById = async(id)=>{
     const product = await data.getProductById(id);
     if(!product)throw new Apperror("product not exist", 400);

     return product;
}
export const updateProductById = async(id, body) => {
    const exist = await data.getProductById(id);
    if (!exist) throw new Apperror("product not exist", 400);

    if (body.category && body.attributes) {
        const isValid = await validateAttributesByCategoryId(body.category, body.attributes);
        if (!isValid) throw new Apperror("invalid attributes for this category", 400);
    }

    if (body.category && body.subcategory) {
        const subcategory = await getSubcategoryForProduct(body.category, body.subcategory);
        if (!subcategory) {
            throw new Apperror("this subcategory doesn't belong to this category", 400);
        }
    }

    if (body.discount || body.discount > 0) {
        body.finalPrice = body.price * (1 - body.discount / 100);
    }

    const product = await data.updateProductById(id, body);
    return product;
}


