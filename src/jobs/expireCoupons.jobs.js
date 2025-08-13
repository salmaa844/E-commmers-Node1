import cron from "node-cron";
import { CouponModel } from "../../Database/models/coupon.model.js";

export function scheduleCouponCleanup() {
    console.log("cron job registed");
    cron.schedule("47 18 * * *", async () => {
            console.log("cron job is working");
        try {
            const now = new Date();
            const result = await CouponModel.updateMany(
                {
                    validUntil: { $lte: now },
                    status: "active"
                },
                {
                    $set: { status: "inactive" }
                }
            );
            if (result.modifiedCount > 0) {
                console.log(`${result.modifiedCount} coupons set to inactive`);
            }
        } catch (error) {
            console.log(error);
        }
    });
}
