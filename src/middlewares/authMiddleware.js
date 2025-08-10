import { findUserByEmail } from "../modules/auth/auth.data.js";
import Apperror from "../utils/Apperror.js";
import jwt from "jsonwebtoken";

const authenticateJWT = (allowedRoles = []) => {
    return async (req, res, next) => {
        try {
            const token = req.headers.authorization;
            if (!token) {
                return next(new Apperror("Token is missing", 401));
            }

            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            const user = await findUserByEmail(decoded.email);
            if (!user) {
                return next(new Apperror("User not found", 404));
            }
            if (allowedRoles.length && !allowedRoles.includes(user.role)) {
               return next( new Apperror("Access denied", 403));
            }

            req.user = {
                _id:user._id,
                username:user.username,
                email:user.email,
                status:user.status,
                role:user.role
            };
            next();
        } catch (error) {
            if (error.name === "JsonWebTokenError" || error.name === "TokenExpiredError") {
                return next(new Apperror("Invalid or expired token", 401));
            }
            next(error); 
        }
    };
};

export default authenticateJWT;
