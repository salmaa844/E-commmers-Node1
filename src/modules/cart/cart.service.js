import * as data from "./cart.data.js"
import areAttriputesEqual from "./../../utils/areAttriputesEqual.js"
import Apperror from "../../utils/Apperror.js";
import { getProductById } from "../product/product.data.js";
import mongoose from "mongoose";


export const addToCart = async (userId, productData) => {
    const mongoId = new mongoose.Types.ObjectId(userId)
    const cart = await data.findCartByUserId(mongoId);
   
    const product = await getProductById(productData.productId)
    
    if(!product) throw new Apperror("product not Found",404);

    if(product.discount) productData.price = product.finalPrice;
    else productData.price = product.price;
    
    if (!cart) {
        await data.createCart(userId,productData);
        return {
            newCart: true,
            added: true,
            status: 200
        };
    }
    

    const productIndex = cart.products.findIndex(item => {
    return (
      item.productId.toString() === productData.productId.toString() &&
      areAttriputesEqual(item.attributes, productData.attributes)
    
    );
     
  });
    if (productIndex > -1) {
        return {
            message: "Product already in the cart"
        };
    }else{
         cart.products.push(productData);
         await data.pushProductToCart(cart);
    }
    return {
        newCart: false,
        added: true,
        status: 200
    };
};

export const getMyCart = async(userId)=>{
    const cart = await data.getCart(userId);
    return cart || {cart:[]}
}

export const emptyCart = async(userId)=>{
    const clear = await data.emptyCart(userId);
    return clear

}
export const deleteProductFromCart = async(userId,productCartId)=>{

    const remove = await data.removProductFromCart(userId,productCartId)
   return remove.modifiedCount >0
}
export const updateQuntity = async(userid,productId,qnt)=>{

    const update = await data.updateQuntity(userid,productId,qnt);
    return update.modifiedCount >0
}
