import { withAge } from "@/configs/cookie";
import config from "@/configs/env";
import { RefreshJWT, ResetJWT, TokenJWT } from "@/configs/jwt";
import { ILocalData, Response } from "@/types/controller";
import { JwtPayload, sign, verify } from "jsonwebtoken";

interface IUserPayload extends ILocalData, JwtPayload { }

export interface IToken {
    token: string
    refresh?: string
}

export function generateToken(user: ILocalData) {
    const { iat, exp, ...data } = user as IUserPayload;

    const timeLeft = (!exp) ? exp - (new Date()).getTime() / 1000 : 0;
    const OptionJWT = (!exp || timeLeft <= 0) ? RefreshJWT : { expiresIn: timeLeft + "s" }

    const token = sign(data, config.JWT_KEY, TokenJWT);
    const refresh = sign(data, config.JWT_REFRESH_KEY, OptionJWT);

    return { token, refresh }
}

export function generateReset(user: ILocalData) {
    const { iat, exp, ...data } = user as IUserPayload;
    const token = sign(data, config.JWT_RESET_KEY, ResetJWT);
    return { token }
}

export function setToken(res: Response, remember: boolean, token: IToken) {
    if (token) {
        res
            .status(200)
            .cookie("token", token.token, withAge(remember ? 3600 : void 0))
            .cookie("refresh", token.refresh, withAge(86400))
    } else {
        res
            .status(200)
            .cookie("token", "", withAge(void 0))
            .cookie("refresh", "", withAge(void 0))
    }
}

export function verifyToken(token: string): ILocalData {
    return verify(token, config.JWT_KEY) as ILocalData;
}

export function verifyRefresh(token: string): ILocalData {
    return verify(token, config.JWT_REFRESH_KEY) as ILocalData;
}

export function verifyReset(token: string): ILocalData {
    return verify(token, config.JWT_RESET_KEY) as ILocalData;
}