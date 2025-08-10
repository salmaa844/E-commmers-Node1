import { Router } from "express";
import * as controller from "./auth.controller.js";
import asyncHandler from "../../utils/asyncHandler.js";
import authenticateJWT from "./../../middlewares/authMiddleware.js"
import ROLE from "../../../Database/roles.js";
import upload from "../../middlewares/multer.middlewares.js";
const router = Router();

router.post('/register',upload.single("image"),asyncHandler(controller.register));
router.post('/login',asyncHandler(controller.login));
router.post('/confirm_email',asyncHandler(controller.confirmEmail))


export default router;


