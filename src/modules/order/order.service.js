import { getCart, emptyCart } from "../cart/cart.data.js"
import * as data from "./order.data.js"
import { getPaginationData } from "../../utils/pagination/pagination.js"
import { findCouponByCode } from "../coupon/coupon.data.js";
import Apperror from "../../utils/Apperror.js";

export const createOrder = async (userId, address, phone, paymentType, couponCode) => {
  
  const cart = await getCart(userId);
  if (!cart || cart.products.length === 0) {
    return { message: "cart is empty" }
  }

  let coupon = null;
  if (couponCode) {
    coupon = await findCouponByCode(couponCode);
    if (!coupon || coupon.status !== "active") {
      throw new Apperror("coupon is invalid or inactive");
    }
    const now = new Date();
    if (now < new Date(coupon.validFrom) || now > new Date(coupon.validUntil)) {
      throw new Apperror("coupon is expired or not yet active");
    }
  }

  let totalPrice = 0;
 
const products = cart.products.map((p) => {
  const itemTotal = p.price * p.qnt;
  totalPrice += itemTotal;
  return {
    productId: p.productId,
    qnt: p.qnt,
    price: p.price,
    finalPrice: itemTotal
  };
});


  if (coupon ) {
    totalPrice -= coupon.discount;
    if (totalPrice < 0) totalPrice = 0;
  }

  const order = await data.createOrder({
  userId,
  address,
  phone,
  paymentType,
  totalPrice,
  coupon: coupon._id ,
  products
});

  await emptyCart(userId);

  return {
    message: "order placed",
    order
  };
};

export const getMyOrders = async (userId, page, limit, skip) => {
  const myOrder = await data.getMyOrders(userId, limit, skip);
  if (!myOrder) {
    return { message: "no order to review" };
  }

  const result = getPaginationData(myOrder, page, limit);

  return result;
};

export const getMyOrder = async (userId, id) => {
  const myOrder = await data.getMyOrder(userId, id);
  if (!myOrder) {
    return { message: "no order to review" };
  }

  return {
    message: "success",
    myOrder
  };
};


export const getOrdersForAdmin = async (status, page, limit, skip) => {
  const Order = await data.getOrdersForAdmin(status, limit, skip);
  if (!Order) {
    return { message: "no order to review" };
  }
  const result = getPaginationData(Order, page, limit);
  return {
    message: "success",
    result
  };
};
export const updateOrderStatus = async (orderId, status) => {
  const updatedOrder = await data.updateOrderStatus(orderId, status);
  if (!updatedOrder) {
    return { message: "Order not found" };
  }
  return updatedOrder;
};
