import { OrderSchema } from "../../../Database/models/order.model.js"

export const createOrder = async (data)=>{
    return await OrderSchema.create(data);
}
export const getMyOrders = async (userId,limit,skip)=>{
    const count = await OrderSchema.countDocuments({userId})
    const results = await OrderSchema.find({userId}).limit(limit).skip(skip)
    return {
        count,
        results
    }
}
export const getMyOrder = async (userId, id) => {
  return await OrderSchema.findOne({ _id: id, userId });
};
export const getOrdersForAdmin = async (status,limit,skip)=>{
    const count = await OrderSchema.countDocuments({status})
    const order = await OrderSchema.find({status}).limit(limit).skip(skip)
    return {
        count,
        results :order
    }
}
export const updateOrderStatus = async (orderId, status) => {
  return await OrderSchema.findByIdAndUpdate(
    orderId,
    { status },
    { new: true }
  );
};

