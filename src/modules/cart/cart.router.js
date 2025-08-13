import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./cart.controller.js"
import authenticateJWT from "./../../middlewares/authMiddleware.js"
import ROLE from "../../../Database/roles.js";
import { validate } from "../../middlewares/validation.js";
import * as Schemas from "../../validation/cart.validator.js"

const router = Router();

router.post("/add",
    authenticateJWT([ROLE.USER]),
    validate(Schemas.addToCart),
    asyncHandler(controller.addToCartController)
);
router.patch("/update-quantity",
      authenticateJWT([ROLE.USER]),
      validate(Schemas.updateQunt),
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