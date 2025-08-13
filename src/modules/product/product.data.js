import { ProductSchema } from "../../../Database/models/product.model.js"
export const createProduct = async(data)=>{
    return await ProductSchema.create(data)
}

export const getAllProduct = async(limit,skip,search)=>{
    const results =  await ProductSchema.find({
        $or:[
           { name:{$regex:search ,$options:"i"}},
           { description:{$regex:search ,$options:"i"}}
        ]
    }).select("name description price category status attributes subcategory")
    .populate("category","name")
    .limit(limit)
    .skip(skip);

    const count = await ProductSchema.countDocuments(
        {
        $or:[
           { name:{$regex:search ,$options:"i"}},
           { description:{$regex:search ,$options:"i"}}
        ]
    }
    );
    
    return {
        count,
        results
    }
}
export const getProductById = async(id)=>{
    const product= await ProductSchema.findById(id)
    .select("name description price category status attributes subcategory")
    .populate("category","name");
    return product
}

export const updateProductById = async(id,data)=>{
     const product= await ProductSchema.findByIdAndUpdate(id,data,{new:true});
     return product
}