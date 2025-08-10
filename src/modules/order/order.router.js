import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./order.controller.js"
import authenticateJWT from "./../../middlewares/authMiddleware.js"
import ROLE from "../../../Database/roles.js";
import { validate } from "../../middlewares/validation.js";
import * as Schemas  from "./../../validation/order.validator.js";

const router = Router();

router.post("/add",
    authenticateJWT([ROLE.USER]),
    validate(Schemas.create),
    asyncHandler(controller.addOrder)
);

router.get("/",
    authenticateJWT([ROLE.USER]),
    asyncHandler(controller.getMyOrders));
router.get("/admin",
    authenticateJWT([ROLE.ADMIN]),
    asyncHandler(controller.getOrdersForAdmin));

router.patch("/:orderId/status",
    authenticateJWT([ROLE.ADMIN]),
    validate(Schemas.updateOrderStatus),
    asyncHandler(controller.updateOrderStatus)
);

router.get("/:id",
    authenticateJWT([ROLE.USER]),
    asyncHandler(controller.getMyOrder));

export default router;