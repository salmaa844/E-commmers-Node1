import { Router } from "express";
import upload from "../../middlewares/multer.middlewares.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./product.controller.js"
import * as Schemas  from "./../../validation/product.validator.js";
import {validate} from "./../../middlewares/validation.js"
import authenticateJWT from "../../middlewares/authMiddleware.js";
import ROLE from "../../../Database/roles.js";
const router = Router();

router.post(
    "/",
    authenticateJWT([ROLE.ADMIN]),
    upload.fields([
        {
            name: "mainImage",
            maxCount: 1
        },
        {
            name: "subImages",
            maxCount: 5
        },
    ]),
      validate(Schemas.create),

    asyncHandler(controller.createProduct)

);
router.get("/",asyncHandler(controller.getAllProduct))
router.get("/search", asyncHandler(controller.searchProduct))
router.get("/:id",asyncHandler(controller.getProductById))
router.put("/:id",asyncHandler(controller.updateProductById))



export default router;