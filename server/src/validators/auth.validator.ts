import Validator from "./base.validator";

export interface LoginBody {
    email: string;
    password: string;
    remember: boolean;
}

export default class AuthValidator extends Validator{
    static validateLogin(data: LoginBody) {
        this.checkEmail(data.email);
    }
}