import { UserRole } from "@prisma/client";
import { Response as _Response, Request as _Request, NextFunction as _NextFunction } from "express"
export interface IUser {
    fullname: string;
    role: UserRole
    id: string;
    avatar?: string;
}

export interface ILocalData<T extends IUser = IUser> {
    user: T,
    device: string;
    remember: boolean
}

export interface IResponseData {
    message: string,
    name?: string,
    data?: any
}

export type Response<T = IResponseData, N = ILocalData> = _Response<T, N>
export type Request<T = any> = _Request<any, any, any, T>;
export type NextFunction = _NextFunction

export class InputError extends Error {
    field: string;
    value?: any;

    constructor(message: string, field: string, value?: any) {
        super(message);
        Object.setPrototypeOf(this, InputError.prototype);
        this.field = field;
        this.value = value;
    }
}