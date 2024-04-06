import { InputError } from "@/types/controller";
import Validator from "./base.validator";
import { UserRole } from "@prisma/client";

export interface LoginBody {
    email: string;
    password: string;
    remember: boolean;
    device: string;
}

export interface LogoutBody {
    device: string;
}

export interface RegisterBody {
    device: string;
    cid: string,
    email: string;
    password: string;
    re_password: string;
    phone: string;
    otp: string;
    fullname: string;
    role: UserRole
}

export interface OTPBody {
    email: string;
    device: string;
}

export default class AuthValidator extends Validator {
    static validateLogin(data: LoginBody) {
        this.checkEmail(data.email);
        this.checkEmpty(data.device, "device");
    }

    static validateLogout(data: LogoutBody) {
        this.checkEmpty(data.device, "device");
    }

    static validateOTP(data: OTPBody) {
        this.checkEmail(data.email);
    }

    static validateRegister(data: RegisterBody) {
        this.checkEmail(data.email);
        this.checkPassword(data.password);
        this.checkOTP(data.otp);
        this.checkCID(data.cid);
        this.checkPhone(data.phone);
        this.checkRole(data.role);

        if (data.password !== data.re_password)
            throw new InputError("Re-type password must be same as password", "re_password", data.re_password);
    }
}