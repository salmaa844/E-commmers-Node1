import express from "express"
import "dotenv/config.js"
import connectDB from "./Database/connnection.js";
import init from "./src/routers/index.js";

const app = express();

const PORT = process.env.PORT || 5000;
init(express,app)
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`CONNECTION IN PORT ${PORT}`);
    })

})
