import { InputError } from "@/types/controller";
import Validator from "./base.validator";
import { Sessions, UserSettings, Users } from "@prisma/client";

export type DeviceInfo = Omit<Sessions, "id">

export interface LoginBody {
    email: string;
    password: string;
    remember: boolean;
    device: string;
    device_info: DeviceInfo
}

export interface LogoutBody {
}

export interface RegisterBody {
    device: string;
    cid: string,
    email: string;
    password: string;
    re_password: string;
    phone: string;
    otp: string;
    fullname: string
}

export interface OTPBody {
    email: string;
    device: string;
}

export interface ResetBody {
    email: string;
}

export interface SetPassword {
    password: string;
    re_password: string;
}

export interface UpdateMeBody {
    user: Omit<Users, "password" | "id" | "role">,
    setting: Omit<UserSettings, "id" | "uid">
}

export interface UpdatePasswordMeBody {
    old_password: string
    password: string
    re_password: string
}

export default class AuthValidator extends Validator {
    static validateLogin(data: LoginBody) {
        this.checkEmail(data.email);
        this.checkDevice(data.device);

        // Check device info
    }

    static validateLogout(data: LogoutBody) {
    }

    static validateOTP(data: OTPBody) {
        this.checkEmail(data.email);
        this.checkDevice(data.device);
    }

    static validateRegister(data: RegisterBody) {
        this.checkDevice(data.device);
        this.checkEmail(data.email);
        this.checkPassword(data.password);
        this.checkOTP(data.otp);
        this.checkCID(data.cid);
        this.checkPhone(data.phone);

        if (data.password !== data.re_password)
            throw new InputError("Re-type password must be same as password", "re_password", data.re_password);
    }

    static validateReset(data: ResetBody) {
        this.checkEmail(data.email);
    }

    static validateSetPassword(data: SetPassword) {
        this.checkPassword(data.password);

        if (data.password !== data.re_password)
            throw new InputError("Re-type password must be same as password", "re_password", data.re_password);
    }

    static validateUpdateMe(data: UpdateMeBody) {
        this.checkCID(data.user.cid);
        this.checkEmail(data.user.email);
        this.checkPhone(data.user.phone);
        this.checkEmpty(data.user.fullname, "fullname");
        this.checkEmpty(data.user.address, "address");
        this.checkGender(data.user.gender);
    }

    static validateUpdatePasswordMe(data: UpdatePasswordMeBody) {
        this.checkPassword(data.password);

        if (data.password !== data.re_password)
            throw new InputError("Re-type password must be same as password", "re_password", data.re_password);
    }
}