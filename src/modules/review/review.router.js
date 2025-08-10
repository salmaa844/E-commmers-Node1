import { Router } from "express";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./review.controller.js"
import authenticateJWT from "../../middlewares/authMiddleware.js";
import ROLE from "../../../Database/roles.js";
import * as schema from "./../../validation/review.validator.js"
import {validate} from "./../../middlewares/validation.js"
const router = Router();

router.post("/",
    authenticateJWT([ROLE.USER]),
    validate(schema.create),
    asyncHandler(controller.create)
)
router.get("/:id",
    authenticateJWT([ROLE.USER]),
    validate(schema.reviewIdParams),
    asyncHandler(controller.getAll)
)
router.delete("/",
    authenticateJWT([ROLE.USER]),
      validate(schema.idValidation),
    asyncHandler(controller.removeReview)
)

router.delete("/:productId",
    authenticateJWT([ROLE.ADMIN]),
      validate(schema.idValidation),
    asyncHandler(controller.removeReviewByAdmin)
)

export default router;