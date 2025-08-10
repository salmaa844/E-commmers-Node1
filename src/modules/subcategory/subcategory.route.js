import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./subcategory.controller.js"
import * as SchemaTypes from "./../../validation/subcategory.validator.js"
import { validate } from "../../middlewares/validation.js";
import authenticateJWT from "./../../middlewares/authMiddleware.js"
import ROLE from "../../../Database/roles.js";

const router = Router();

router.post("/",
    authenticateJWT([ROLE.ADMIN]),
    validate(SchemaTypes.create),
    asyncHandler(controller.createSubCategory));

router.get("/", asyncHandler(controller.getallSubCategory));

router.get("/:id",
    validate(SchemaTypes.subCategoryIdParams),
    asyncHandler(controller.getSubCategoryById));


router.put("/:id",
    authenticateJWT([ROLE.ADMIN]),
    validate(SchemaTypes.update),
    asyncHandler(controller.updateSubCategory));

router.delete("/:id",
    authenticateJWT([ROLE.ADMIN]),
    validate(SchemaTypes.subCategoryIdParams),
    asyncHandler(controller.deleteSubCategory));

export default router;