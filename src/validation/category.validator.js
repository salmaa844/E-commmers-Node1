import Joi from "joi"
import mongoose from "mongoose";
import objectId from "./objectId.validator.js";
import multerFileSchema from "./image.validator.js";


const attributesSchema =Joi.object({
    name:Joi.string().trim().min(2).max(50).required(),
    type:Joi.string().valid("string","number","enum").required(),
    options:Joi.alternatives().conditional("type",{
        is:"enum",
        then:Joi.array().items(Joi.string().trim()).min(1).required(),
        otherwise:Joi.forbidden()
    }),
    allowCustomValue:Joi.boolean().default(true)
})

export const create = Joi.object({
    name:Joi.string().trim().min(2).max(50).required(),
    status:Joi.string().valid("active","inactive"),
    image:multerFileSchema.required(),
    attributes:Joi.array().items(attributesSchema.default([]))
   
})

export const update = Joi.object({
    name:Joi.string().trim().min(2).max(50),
    status:Joi.string().valid("active","inactive"),
    image:multerFileSchema.optional(),
    attributes:Joi.array().items(attributesSchema.default([])),
    id:objectId.required()
})
export const categoryIdParams = Joi.object({
    id:objectId.required()
})