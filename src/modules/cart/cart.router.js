import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./cart.controller.js"
import authenticateJWT from "./../../middlewares/authMiddleware.js"
import ROLE from "../../../Database/roles.js";

const router = Router();

router.post("/add",
    authenticateJWT([ROLE.USER]),
    asyncHandler(controller.addToCartController)
);
router.patch("/update-quantity",
      authenticateJWT([ROLE.USER]),
    asyncHandler(controller.updateQuntity));
router.delete("/remove",
       authenticateJWT([ROLE.USER]),
    asyncHandler(controller.removeFromCart));
router.delete("/clear",
       authenticateJWT([ROLE.USER]),
    asyncHandler(controller.clearCart));
router.get("/",
    authenticateJWT([ROLE.USER]),
    asyncHandler(controller.getMyCartController));


export default router;