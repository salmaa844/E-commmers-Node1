import Joi from "joi"
import objectId from "./objectId.validator.js";


export const register = Joi.object({
    username:Joi.string().trim().min(3).max(50).required(),
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required()
})

export const login = Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().min(8).required()
})
export const confirmEmail = Joi.object({
    email:Joi.string().email().required(),
    code:Joi.string().length(5).required()
})