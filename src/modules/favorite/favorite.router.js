import ROLE from "../../../Database/roles.js";
import authenticateJWT from "../../middlewares/authMiddleware.js";
import asyncHandler from "../../utils/asyncHandler.js";
import * as controller from "./favorite.controller.js";
import { Router } from "express";

const router = Router();

router.post("/", authenticateJWT([ROLE.USER]),asyncHandler(controller.addToFavorite));

router.delete("/",authenticateJWT([ROLE.USER]),asyncHandler(controller.removeFromFavorite));

router.delete("/delete",authenticateJWT([ROLE.USER]),asyncHandler(controller.removeFromFavoriteById));

router.get("/",authenticateJWT([ROLE.USER]),asyncHandler(controller.getFavorites));

export default router;
