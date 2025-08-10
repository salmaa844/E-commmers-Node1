
import { CartSchema } from "./../../../Database/models/cart.model.js"; // أو حسب مسار الموديل

export const findCartByUserId = async (userId) => {
  return await CartSchema.findOne({ userId })
};

export const createCart = async (userId, product) => {
  return await CartSchema.create({
    userId,
    products: [product]
  })
};

export const pushProductToCart = async (cart) => {
  return cart.save()
}
export const getCart = async (userId) => {
  return await CartSchema.findOne({ userId }).select("-_id -userId -createdAt -updatedAt -__v").populate("products.productId","name mainImage.url")
}
export const emptyCart = async (userId) => {
  return await CartSchema.updateOne({userId},{
    $set:{
      products:[]
    }
  })
}

export const updateQuntity = async (userId, productItemId, qnt) => {

  const result = await CartSchema.updateOne(
  { userId, "products._id": productItemId },
  { $set: { "products.$.qnt": qnt } }
);

return result
}

export const removProductFromCart = async(userId,productItemId)=>{
  
  const result = await CartSchema.updateOne(
    { userId },
  { $pull:{products:{_id:productItemId } }}
  )
  return result
}