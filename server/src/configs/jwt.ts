import * as jwt from "jsonwebtoken";
import env from "@/configs/env"

export const TokenJWT: jwt.SignOptions = {
    expiresIn: env.ENV === "dev" ? "10s" : "86400s"
}

export const RefreshJWT: jwt.SignOptions = {
    expiresIn: env.ENV === "dev" ? "3600s" : "86400s"
}

export const ResetJWT: jwt.SignOptions = {
    expiresIn: env.ENV === "dev" ? "3600s" : "300s"
}