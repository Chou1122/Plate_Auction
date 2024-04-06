import { redis } from "@/configs/redis";
import { NameType, genKey } from "@/utils/redis";

export default class OTPModel {
    static async createOTP(uid: string, otp: string, ttl: number = 120) {
        await redis.set(genKey(uid, NameType.USER_OTP), otp, { EX: ttl });
    }

    static async verifyOtp(uid: string, otp: string) {
        const value = await redis.get(genKey(uid, NameType.USER_OTP));
        return value === otp;
    }
}