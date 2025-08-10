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
const init = (express, app) => {
    app.use(express.json());
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


    app.use(globalErrorHandler)
}
export default init;