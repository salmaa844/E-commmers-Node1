
import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
     name:{
        type:String,
        required:true
    }
    ,
     type:{
        type:String,
        required:true
    }
},{
    _id:false
}
);
export default imageSchema;