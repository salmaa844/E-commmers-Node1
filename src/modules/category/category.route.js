import { Router } from "express";
import { validate } from "./../../middlewares/validation.js"
import * as controller from "./category.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import upload from "../../middlewares/multer.middlewares.js";
import * as SchemaTypes from "./../../validation/category.validator.js"
import authenticateJWT from "./../../middlewares/authMiddleware.js"
import ROLE from "../../../Database/roles.js";
const router = Router();

router.post("/",
    authenticateJWT([ROLE.ADMIN]),
    upload.single("image"),
    validate(SchemaTypes.create),
    asyncHandler(controller.createCategory)
);
router.get("/",
   // authenticateJWT([ROLE.ADMIN]),
    asyncHandler(controller.getallCategory));
router.get("/:id",
    authenticateJWT([ROLE.ADMIN]),
    validate(SchemaTypes.categoryIdParams),
    asyncHandler(controller.getCategoryById)
);
router.put("/:id",
    authenticateJWT([ROLE.ADMIN]),
    upload.single("image"),
    validate(SchemaTypes.update),
    asyncHandler(controller.updateCategory)
);
router.delete("/:id",
    authenticateJWT([ROLE.ADMIN]),
    validate(SchemaTypes.categoryIdParams),
    asyncHandler(controller.deleteCategory)
);

export default router;
