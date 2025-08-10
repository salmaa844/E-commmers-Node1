
import mongoose from "mongoose";
import  imageSchema from "../schema/image.schema.js";

const categorySchema = new mongoose.Schema({

    name: {
        type:String,
        required:true,
        unique:true
        
    },
    image:{
        type:imageSchema,
        required:true
    },
   status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    },
    attributes:[
        {
            name:{
                type:String,
                required:true
            },
            type:{
                type:String,
                enum:["string","number","enum"],
                required:true
            },
            options:[String],
            allowCustomValue:{
                type:Boolean,
                default:true
            }

        }
    ]
},
    {
        timestamps: true
    }
)

export const CategoryModel = mongoose.model("Category",categorySchema)