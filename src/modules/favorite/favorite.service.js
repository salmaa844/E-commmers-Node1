import mongoose from "mongoose";
import * as data from "./favorite.data.js"
export const addToFavorite = async (userId, productId) => {
    let fav = await data.getFavoriteUserId(userId)
    if (!fav) {
        await data.createFavorite(userId,productId);
        return true
    }
    await data.addProductToFav(userId,productId)
    return true
}
export const getFavorites = async(userId)=>{
   const fav = await data.getFavoriteUserId(userId)
    if (!fav) {
        return []
    }
    return fav
}
export const removeFromFavorite = async (userId)=>{
    const fav = await data.getFavoriteUserId(userId)
    if (!fav) throw new Apperror("Favorite not found", 404); 
    await data.removeFromFavorite(userId)
    return true;
}
export const removeFromFavoriteById = async (userId,productId)=>{
    const fav = await data.getFavoriteUserId(userId)
    if (!fav) throw new Apperror("Favorite not found", 404); 
    const remove = await data.removeFromFavoriteById(userId,productId)
   return remove.modifiedCount > 0
}
