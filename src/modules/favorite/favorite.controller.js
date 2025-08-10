import * as service from "./favorite.service.js"
export const addToFavorite = async (req, res, next) => {
   const { _id } = req.user;
   const productId = req.body;
   const fav = await service.addToFavorite(_id, productId)
   res.status(201).json({
      message: "Product has been added to favorites",
      data: fav
   })
};

export const removeFromFavorite = async (req, res, next) => {
   const { _id } = req.user;
   await service.removeFromFavorite(_id)
   res.status(201).json({
      message: "deleted all favorite"
   })
};
export const removeFromFavoriteById = async (req, res, next) => {
   const { _id } = req.user;
    const { productId } = req.body;
   const deleted=await service.removeFromFavoriteById(_id,productId)
   res.status(201).json({
      message: "sussecc deleted your favorite",
      data:deleted
   })
};
export const getFavorites = async (req, res, next) => {
   const { _id } = req.user;
   const fav = await service.getFavorites(_id)
   res.status(201).json({
      message: "Retrieve favorite products",
      data: fav
   })
};
