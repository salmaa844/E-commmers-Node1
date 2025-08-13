import { scheduleBirthday } from "./birthday.jobs.js";
import { scheduleCouponCleanup } from "./expireCoupons.jobs.js"

export const initJobs = ()=>{
    scheduleCouponCleanup();
    scheduleBirthday();
}