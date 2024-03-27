import { withAge } from "@/configs/cookie";
import config from "@/configs/env";
import { RefreshJWT, TokenJWT } from "@/configs/jwt";
import { ILocalData, Response } from "@/types/controller";
import { sign } from "jsonwebtoken";

interface IUserPayload extends ILocalData {
    iat?: number
    exp?: number
}

interface IToken {
    token: string
    refresh?: string
}

export function generateToken(user: IUserPayload) {
    const { iat, exp, ...data } = user as IUserPayload;

    const timeLeft = (!iat) ? iat - (new Date()).getTime() / 1000 : 0;
    const OptionJWT = (!iat || timeLeft <= 0) ? RefreshJWT : { expiresIn: timeLeft + "s" }

    const token = sign(data, config.JWT_KEY, TokenJWT);
    const refresh = sign(data, config.JWT_REFRESH_KEY, OptionJWT);

    return { token, refresh }
}

export function setToken(res: Response, remember: boolean, token: IToken) {
    if (token) {
        token.refresh && res.cookie("refresh_token", token.refresh, withAge(86400))
        res
            .status(200)
            .cookie("token", token, withAge(remember ? 3600 : void 0))
            .json({ message: "success", data: token })
            .send();
    } else {
        res
            .status(200)
            .cookie("token", null, withAge(void 0))
            .cookie("refresh", null, withAge(void 0))
            .send();
    }

}