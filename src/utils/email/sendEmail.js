import Apperror from "../Apperror.js";
import { sendEmail } from "./nodemailer.js"
import * as temp from "./emailTemplet.js"
export async function sendSystemEmail(type, email, value) {

    const emailtype = {
        confirmEmail: {
            subject: "Confirm your email",
            html: temp.getEmailConfirmationTemplate
        },
        reset: {
            subject: "Reset your password",
            html: temp.getPasswordResetTemplate
        }
    }
    // let subject = "";
    // let html = "";

    // if (type === "confirmEmail") {
    //     subject = "confirm your email";
    //     html = "";
    // } else if (type = "reset") {
    //     subject = "reset your password";
    //     html = "";
    // } else {
    //     return new Apperror("invalid email type", 500)
    // }
    const config = emailtype[type];
    if (!config) throw new Apperror("invalid email type", 500)
    const html = config.html(value);
    await sendEmail({ to: email, subject: config.subject, html })

}