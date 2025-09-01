import Apperror from "../../utils/Apperror.js";
import * as authQuery from "./auth.data.js"
import * as hashings from "./../../utils/hashing/hash.js"
import { generateCode } from "../../utils/generatecode.js";
import { sendEmail } from "../../utils/email/nodemailer.js";
import { generateToken } from "../../utils/jwt/generateToken.js";
import { sendSystemEmail } from "../../utils/email/sendEmail.js"
import ROLE from "../../../Database/roles.js";
export const register = async ({ username, email, password, role = ROLE.USER, birthDate }) => {
    const existingUser = await authQuery.findUserByEmail(email);
    if (existingUser) {
        throw new Apperror("email in use", 409);
    }

    const hashPassword = await hashings.hash(password);
    const code = generateCode(5);
    
    await sendSystemEmail("confirmEmail", email, code);

    

    return await authQuery.createUser({
        username,
        email,
        password: hashPassword,
        role,
        code,
        birthDate
    });
};

export const login = async ({ email, password }) => {
  const user = await authQuery.findUserByEmail(email);
  if (!user) throw new Apperror("Invalid email or password", 401);

  if (!user.confirmEmail) {
    throw new Apperror("Please confirm your email before logging in", 403);
  }

  const compare = await hashings.compareHash(password, user.password);
  if (!compare) throw new Apperror("Invalid email or password", 401);

  const token = generateToken({
  id: user.id,
  username: user.username,   
  email: user.email,
  status:user.status,
  role: user.role        
});


  return token;
};


export const confirmEmail = async ({ email, code }) => {
    const user = await authQuery.findUserByEmail(email);

    if (!user) throw new Apperror("User not found", 409);

    if (user.confirmEmail) throw new Apperror("Email is already confirmed", 400);

    if (user.code !== code) throw new Apperror("Invalid confirmation code", 400);

    await authQuery.confirmEmail(user);

    return true;
};
