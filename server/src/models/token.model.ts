import { redis } from "@/configs/redis";
import { NameType, getKey } from "@/utils/redis";

const maxDevice = 3;

export default class TokenModel {
    static async addDevice(uid: string, deviceID: string) {
        const raw = await redis.get(getKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        if (devices.length < maxDevice) {
            if (!devices.includes(deviceID)) {
                devices.push(deviceID);
                await redis.set(getKey(uid, NameType.USER_DEVICES), JSON.stringify(devices));
            }
        } else {
            throw new Error("Excess device number");
        }
    }

    static async removeDevice(uid: string, deviceID: string) {
        const raw = await redis.get(getKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        if (devices.includes(deviceID)) {
            devices.splice(devices.indexOf(deviceID), 1);
        }
    }

    static async countDevices(uid: string) {
        const raw = await redis.get(getKey(uid, NameType.USER_DEVICES));
        return raw ? JSON.parse(raw).length : 0;
    }

    static async hasDevice(uid: string, deviceID: string) {
        const raw = await redis.get(getKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        return devices.includes(deviceID);
    }
}