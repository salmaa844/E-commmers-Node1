import Joi from "joi";
import objectId from "./objectId.validator.js";

export const createCouponSchema = Joi.object({
  code: Joi.string().min(3).max(30).required(),
  discount: Joi.number().min(0).required(),
  validFrom: Joi.date().required(),
  validUntil: Joi.date().greater(Joi.ref("validFrom")).required(),
  status: Joi.string().valid("active", "inactive").optional()
});

export const updateCouponSchema = Joi.object({
  code: Joi.string().min(3).max(30).optional(),
  discount: Joi.number().min(0).optional(),
  validFrom: Joi.date().optional(),
  validUntil: Joi.date().greater(Joi.ref("validFrom")).optional(),
  status: Joi.string().valid("active", "inactive").optional(),
  id:objectId.required()
});

export const couponId = Joi.object({
    id:objectId.required()
})