import { withAge } from "@/configs/cookie";
import config from "@/configs/env";
import { RefreshJWT, TokenJWT } from "@/configs/jwt";
import { IUser, Response } from "@/types/controller";
import { sign } from "jsonwebtoken";

interface IUserPayload extends IUser {
    iat?: number
    exp?: number
}

interface IToken {
    token: string
    refresh?: string
}

export function generateToken(user: IUserPayload, has_refresh?: boolean) {
    const { iat, exp, ...data } = user as IUserPayload;

    const token = sign(data, config.JWT_KEY, TokenJWT);
    const refresh = has_refresh && sign(data, config.JWT_REFRESH_KEY, RefreshJWT)

    return { token, refresh }
}

export function setToken(res: Response, remember: boolean, token: IToken) {
    token.refresh && res.cookie("refresh_token", token.refresh, withAge(86400))
    res
        .status(200)
        .cookie("token", token, withAge(remember ? 3600 : void 0))
        .json({ message: "success", data: token })
        .send();
}