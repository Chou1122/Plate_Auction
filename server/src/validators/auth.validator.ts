import { InputError } from "@/types/controller";
import Validator from "./base.validator";

export interface LoginBody {
    email: string;
    password: string;
    remember: boolean;
    device: string;
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

export default class AuthValidator extends Validator {
    static validateLogin(data: LoginBody) {
        this.checkEmail(data.email);
        this.checkDevice(data.device);
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
}