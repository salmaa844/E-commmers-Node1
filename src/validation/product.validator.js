
import Joi from "joi"
import multerFileSchema from "./image.validator.js";
import objectId from "./objectId.validator.js";


export const create = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    description: Joi.string(),
    price: Joi.number().positive().min(1).required(),
    category: objectId.required(),
    subcategory: objectId.required(),
    attributes: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            value: Joi.array().items(
                Joi.alternatives().try(Joi.string(), Joi.number()).required()

            )
        })
    ),
    discount: Joi.number().min(0).max(100).optional(),

    mainImage: multerFileSchema.required(),
    subImages: Joi.array().items(multerFileSchema).optional().default([]),
    stock: Joi.number().min(1).required()

})
export const update = Joi.object({

    name: Joi.string().min(3).max(50),
    description: Joi.string(),
    price: Joi.number().positive().min(1),
    category: objectId,
    subCategory: objectId,
    attributes: Joi.array().items(
        Joi.object({
            name: Joi.string().required(),
            value: Joi.array().items(
                Joi.alternatives().try(Joi.string(), Joi.number()).required()

            )
        })
    ),
    stock: Joi.number().min(1),
    id: objectId.required()

})
export const getById = Joi.object({
    id: objectId.required()
})
export const remove = Joi.object({
    id: objectId.required()
})