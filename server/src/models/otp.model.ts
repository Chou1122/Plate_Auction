import { redis } from "@/configs/redis";
import { NameType, getKey } from "@/utils/redis";

export default class OTPModel {
    static async createOTP(uid: string, otp: string) {
        await redis.set(getKey(uid, NameType.USER_OTP), otp, { EX: 120 });
    }
}