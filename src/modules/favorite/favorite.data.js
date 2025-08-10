import { FavoriteSchema } from "./../../../Database/models/favorite.model.js"
export const createFavorite = async (userId, productId) => {

    return await FavoriteSchema.create(
        {
            userId,
            products: [
                    productId
            ]
        }
    )
}
export const getFavoriteUserId = async (userId) => {
    return await FavoriteSchema.findOne({userId})
}

export const addProductToFav = async (userId, productId) => {

    return await FavoriteSchema.updateOne({ userId }, {
        $addToSet: { products:  productId  }
    })
}
export const removeFromFavorite = async (userId)=>{
    return await FavoriteSchema.updateOne({userId},{
        $set:{products:[]}
    })
}
export const removeFromFavoriteById = async (userId, productId) => {
  return await FavoriteSchema.updateOne(
    { userId },
    { $pull: { products:{productId  }} }
  );
};

