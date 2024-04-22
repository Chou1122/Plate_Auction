import Validator from "./base.validator";
import { UserRole } from "@prisma/client";

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

export default class UserValidator extends Validator {
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