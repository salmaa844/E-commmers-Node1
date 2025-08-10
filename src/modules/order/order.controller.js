import * as service from "./order.service.js"
import { getPagination } from "../../utils/pagination/pagination.js";
export const addOrder = async (req, res, next) => {
  const { _id } = req.user;
  const { address, phone, paymentType,couponCode } = req.body;
  const order = await service.createOrder(
    _id,
    address,
    phone,
    paymentType,
    couponCode);
  res.status(201).json(order)

}

export const getMyOrders = async (req, res, next) => {
  const { _id } = req.user;
  const { page, limit, skip } = getPagination(req);
  const myOrder = await service.getMyOrders(_id, page, limit, skip);
  res.status(200).json({
    message:"success",
    data:myOrder
  }
    )
}

export const getMyOrder = async (req, res, next) => {
  const { _id } = req.user;
  const { id } = req.params;

  const myOrder = await service.getMyOrder(_id, id);
  res.status(200).json(myOrder)
}

export const getOrdersForAdmin = async (req, res, next) => {
  const { page, limit, skip } = getPagination(req);
  const { status } = req.query;
  const Order = await service.getOrdersForAdmin(status, page, limit, skip);
  res.status(200).json(Order)
}

export const updateOrderStatus = async (req, res, next) => {
  const { orderId } = req.params;
  const { status } = req.body;

  const updatedOrder = await service.updateOrderStatus(
    orderId,
    status
  );

  res.status(200).json({
    message: "Order status updated successfully",
    order: updatedOrder,
  });
};
