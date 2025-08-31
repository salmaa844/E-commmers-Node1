import { ProductSchema } from "../../../Database/models/product.model.js"
export const createProduct = async(data)=>{
    return await ProductSchema.create(data)
}

export const getAllProduct = async (limit, skip) => {
  const results = await ProductSchema.find({})
    .select("name description price category status attributes subcategory")
    .populate("category", "name")
    .limit(limit)
    .skip(skip);

  const count = await ProductSchema.countDocuments({});
  return { count, results };
};

export const searchProduct = async (limit, skip, search) => {
  const filter = {
    $or: [
      { name: { $regex: search, $options: "i" } },
      { description: { $regex: search, $options: "i" } },
    ],
  };

  const results = await ProductSchema.find(filter)
    .select("name description price category status attributes subcategory")
    .populate("category", "name")
    .limit(limit)
    .skip(skip);

  const count = await ProductSchema.countDocuments(filter);
  return { count, results };
};

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