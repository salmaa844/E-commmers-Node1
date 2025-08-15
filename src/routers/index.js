import globalErrorHandler from "../middlewares/globalErrorHandler.js";
import authRouter from "./../modules/auth/auth.router.js"
import categoryRouter from "./../modules/category/category.route.js"
import subcategoryRouter from "./../modules/subcategory/subcategory.route.js"
import productRouter from "./../modules/product/product.router.js"
import cartRouter from "./../modules/cart/cart.router.js"
import favRouter from "./../modules/favorite/favorite.router.js"
import orderRouter from "./../modules/order/order.router.js"
import couponRouter from "./../modules/coupon/coupon.router.js"
import reviewRouter from "./../modules/review/review.router.js"
import cors from "cors";
import { initJobs } from "../jobs/initJobs.js";

// var whitelist = ['http://127.0.0.1:5500']
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
const init = (express, app) => {
    app.use(express.json());

    app.use(cors({
        origin:"*",
        credentials:true
    }))
    app.get("/",(req,res)=>{
        res.json({
            message:"hi from our api"
        })
    })
    app.use("/uploads", express.static("uploads/"))
    app.use("/api/auth", authRouter)
    app.use("/api/categories", categoryRouter)
    app.use("/api/subcategory", subcategoryRouter)
    app.use("/api/products", productRouter);
    app.use("/api/cart", cartRouter);
    app.use("/api/fav", favRouter);
    app.use("/api/order", orderRouter);
    app.use("/api/coupon", couponRouter);
    app.use("/api/review", reviewRouter);

    initJobs()
    app.use(globalErrorHandler)
}
export default init;