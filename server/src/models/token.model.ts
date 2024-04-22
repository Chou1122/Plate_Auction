import { redis } from "@/configs/redis";
import { NameType, genKey } from "@/utils/redis";
import { DeviceInfo } from "@/validators/auth.validator";
import { PrismaClient, Sessions } from "@prisma/client";

const maxDevice = 3;
const prisma = new PrismaClient();
export default class TokenModel {
    static async addDevice(uid: string, deviceID: string, deviceInfo: DeviceInfo) {
        const raw = await redis.get(genKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        if (devices.length < maxDevice) {
            if (!devices.includes(deviceID)) {
                devices.push(deviceID);
                await redis.set(genKey(uid, NameType.USER_DEVICES), JSON.stringify(devices));

                await prisma.sessions.create({
                    data: {
                        device: deviceInfo.device,
                        ip: deviceInfo.ip,
                        language: deviceInfo.language,
                        platform: deviceInfo.platform,
                        timezone: deviceInfo.timezone
                    }
                })
            }
        } else {
            throw new Error("Excess device number");
        }
    }

    // Remove specified device
    static async removeDevice(uid: string, deviceID: string) {
        const raw = await redis.get(genKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        if (devices.includes(deviceID)) {
            devices.splice(devices.indexOf(deviceID), 1);
            await redis.set(genKey(uid, NameType.USER_DEVICES), JSON.stringify(devices));
        }

        await prisma.sessions.deleteMany({
            where: { device: deviceID }
        })
    }

    // remove all devices, except this device
    static async revokeDevice(uid: string, deviceID: string) {
        const raw = await redis.get(genKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];
        devices.splice(devices.indexOf(deviceID), 1);

        await redis.set(genKey(uid, NameType.USER_DEVICES), JSON.stringify([deviceID]));

        await prisma.sessions.deleteMany({
            where: {
                device: {
                    in: devices
                }
            }
        })
    }

    // Remove all devices, include this device
    static async revokeAllDevices(uid: string) {
        const raw = await redis.get(genKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        await redis.del(genKey(uid, NameType.USER_DEVICES));

        await prisma.sessions.deleteMany({
            where: {
                device: {
                    in: devices
                }
            }
        })
    }

    static async countDevices(uid: string) {
        const raw = await redis.get(genKey(uid, NameType.USER_DEVICES));
        return raw ? JSON.parse(raw).length : 0;
    }

    static async hasDevice(uid: string, deviceID: string) {
        const raw = await redis.get(genKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        return devices.includes(deviceID);
    }

    static async getAllDevices(uid: string): Promise<Omit<Sessions, "id">[]> {
        const raw = await redis.get(genKey(uid, NameType.USER_DEVICES));
        const devices = raw ? JSON.parse(raw) : [];

        return await prisma.sessions.findMany({
            where: {
                device: {
                    in: devices
                }
            },
            select: {
                device: true,
                ip: true,
                language: true,
                platform: true,
                timezone: true
            }
        });
    }
}