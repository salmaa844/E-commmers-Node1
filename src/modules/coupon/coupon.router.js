import { Router } from "express"
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./coupon.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js";
import ROLE from "../../../Database/roles.js";
import { validate } from "../../middlewares/validation.js";
import * as Schemas from "./../../validation/coupon.validator.js";
const router = Router();


router.post("/",
    authenticateJWT([ROLE.ADMIN]),
    validate(Schemas.createCouponSchema),
    asyncHandler(controller.createCoupon))

router.get("/",
    authenticateJWT([ROLE.ADMIN]),
    asyncHandler(controller.getAll))

router.patch("/updata/:id",
    authenticateJWT([ROLE.ADMIN]),
    validate(Schemas.updateCouponSchema),
    asyncHandler(controller.updateCoupon))
    
router.delete("/:id",
    authenticateJWT([ROLE.ADMIN]),
    validate(Schemas.couponId),
    asyncHandler(controller.removeCoupon))
export default router;