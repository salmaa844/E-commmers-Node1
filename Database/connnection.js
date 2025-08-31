import mongoose from "mongoose"


const connectDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MONGO connection");
    }catch(error){
        console.log("MONGO connection failed",error.messsage);
    }
}

export default connectDB;
