import Joi from "joi";

import objectId  from "./objectId.validator.js"

export const create = Joi.object({
  address: Joi.string().min(3).max(100).required(),
  phone: Joi.string().required(),
  paymentType: Joi.string().valid("cash", "card").required(),
  couponCode:Joi.string().optional()
});

export const updateStatus = Joi.object({
    orderId: objectId.required(),
    status: Joi.string().valid("pending", "confirmed", "onway", "delivered", "cancelled").required(),
 
});

export const getById = Joi.object({
      id: objectId.required(),
});