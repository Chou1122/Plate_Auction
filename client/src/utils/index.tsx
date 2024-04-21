import axios from "axios";
import { toast } from "react-toastify";
import FingerprintJS from '@fingerprintjs/fingerprintjs'

export interface IDeviceInfo {
    device: string;
    language: string;
    timezone: string;
    platform: string;
    ip: string;
}

export function formToObject<T extends object = {}>(data: HTMLFormElement): T {
    const d = new FormData(data);
    const r = Object.fromEntries(d.entries());
    return r as T;
}

export async function getIPAddress(): Promise<string> {
    try {
        const response = await axios.get("https://api.ipify.org/?format=json")

        if (response.status === 200) {
            return response.data.ip;
        } else throw new Error("Failed to get IP address");
    } catch (e) {
        toast.error("Failed to get IP address")
        return "";
    }
}

export async function getDeviceInfo(): Promise<IDeviceInfo> {
    const fs = await FingerprintJS.load();
    const f = await fs.get();

    return {
        device: f.visitorId,
        // @ts-ignore
        language: f.components.languages.value[0][0] || "Vi-vn",
        // @ts-ignore
        timezone: f.components.timezone.value,
        // @ts-ignore
        platform: f.components.platform.value,
        ip: await getIPAddress()
    }
}

export async function getDeviceID(): Promise<string> {
    const fs = await FingerprintJS.load();
    const f = await fs.get();

    return f.visitorId;
}