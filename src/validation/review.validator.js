import Joi from "joi";
import objectId from "./objectId.validator.js";

export const create = Joi.object({
    comment:Joi.string().required(),
    productId: objectId.required(),
})
export const reviewIdParams = Joi.object({
    id:objectId.required(),
     limit: Joi.number().min(1),
    page: Joi.number().min(1)
})
export const idValidation = Joi.object({
  productId: objectId.required(),
});