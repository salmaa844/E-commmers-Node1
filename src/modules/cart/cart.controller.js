import * as service from "./cart.service.js"


export const addToCartController = async (req, res, next) => {
    const { _id } = req.user;
    const productData = req.body;
    const result = await service.addToCart(_id, productData);
    return res.status(201).json(result)
};

export const updateQuntity = async (req, res, next) => {
    const { _id } = req.user;
    const data = req.body;
    const success = await service.updateQuntity(
        _id,
        data.productId,
        data.qnt
    )
   
    res.status(200).json({
        message: success ? "quntity update" : "not found"
    })

};

export const removeFromCart = async (req, res, next) => {
 const { _id } = req.user;
  const data = req.body;
  const remove = await service.deleteProductFromCart(_id,data.productId)

  res.status(200).json({
    message:remove?"product removed":"not found"
  })


};

export const clearCart = async (req, res, next) => {
    const { _id } = req.user;
    await service.emptyCart(_id);
    res.status(200).json({
        message: "cleared"
    })
};

export const getMyCartController = async (req, res, next) => {
    const { _id } = req.user;
    const cart = await service.getMyCart(_id);
    res.status(200).json({ cart });


};
