import Validator from "./base.validator";

export interface LoginBody {
    email: string;
    password: string;
    remember: boolean;
    device: string;
}

export interface LogoutBody {
    device: string;
}

export interface RegisterBody{
    email: string;
    password: string;
    re_password: boolean;
    phone: string;
    otp: string;
    fullname: string;
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
}