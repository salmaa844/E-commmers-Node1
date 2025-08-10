import Joi from "joi"
import mongoose from "mongoose"

const objectId = Joi.string().custom((value,helpers)=>{
    if(!mongoose.Types.ObjectId.isValid(value)){
      return helpers.message("invalid ObjectId");
    }
    return value;
  }, "Object Id validation")


export default objectId;