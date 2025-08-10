
import mongoose from "mongoose";

const subcategorySchema = new mongoose.Schema({

    name: {
        type:String,
        required:true,
        unique:true
        
    },
    categoryId:{
        type:mongoose.Types.ObjectId,
        ref:"Category",
        required:true
    },
   status:{
        type:String,
        default:"active",
        enum:["active","inactive"]
    }
},
    {
        timestamps: true
    }
)

export const SubCategoryModel = mongoose.model("SubCategory",subcategorySchema)