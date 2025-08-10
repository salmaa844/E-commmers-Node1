import Joi from "joi";
import objectId from "./objectId.validator";
export const updateQunt = Joi.object({
    productId:objectId.required(),
    qnt:Joi.number().min(1).required()

})

export const addToCart= Joi.object({
     productId:objectId.required(),
     attributes:Joi.array().items(
        Joi.object({
            name: Joi.string().required,
            value: Joi.alternatives().try(Joi.string(),Joi.number()).required()

        })
     ).optional()
})