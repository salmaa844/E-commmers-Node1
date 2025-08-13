import { UserSchema } from "./../../Database/models/user.model.js";
import cron from "node-cron";
import { sendSystemEmail } from "../utils/email/sendEmail.js";

export function scheduleBirthday() {
    try {
        cron.schedule("0 0 * * *", async () => {
            console.log("🔔 فحص أعياد الميلاد");
            const today = new Date();
            const month = today.getMonth() + 1;
            const day = today.getDate();

            const users = await UserSchema.find();

            for (const user of users) {
                if (!user.birthDate) continue;

                const birth = new Date(user.birthDate);
                if (birth.getDate() === day && (birth.getMonth() + 1) === month) {
                    await sendSystemEmail("birthdayGreeting", user.email, user.username);
                    console.log(`🎉 أُرسل بريد تهنئة إلى ${user.email}`);
                }
            }
        });
    } catch (error) {
        console.log(error)
    }
}
