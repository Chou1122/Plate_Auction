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

export interface CreateUserBody {
    email: string;
    fullname: string;
    role: UserRole;
}

export interface DeleteUserBody {
    id: string;
}

export interface UpdateUserBody {
    email: string;
    fullname: string;
    role: UserRole;
}

export interface GeneratePasswordUserBody{
    id: string;
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

    /**
     * =================
     * User Admin
     * =================
     */
    static validateCreate(data: CreateUserBody) {
        this.checkEmail(data.email);
        this.checkRole(data.role);
    }

    static validateDelete(data: DeleteUserBody) {
        this.checkID(data.id);
    }

    static validateUpdate(data: UpdateUserBody) {
        this.checkEmail(data.email);
        this.checkRole(data.role);
    }

    static async validateGeneratePasswordUser(data: GeneratePasswordUserBody){
        this.checkID(data.id);
    }
}