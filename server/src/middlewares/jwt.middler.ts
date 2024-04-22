import { Request, Response, NextFunction } from "@/types/controller";
import * as jwt from "jsonwebtoken";
import { checkRWT } from "./rwt.middler";
import TokenModel from "@/models/token.model";
import { IToken, verifyToken } from "@/utils/token";

interface ICheckJWT {
    tokenOn?: "query" | "cookie"
}

export async function checkJWT(this: ICheckJWT | void, req: Request, res: Response, next: NextFunction) {
    const token = <IToken>req.cookies;

    if (!token.token) return res.sendStatus(401);

    try {
        const { device, user, ...rest } = verifyToken(token.token);

        if (TokenModel.hasDevice(user.id, device)) {
            res.locals = { user, device, ...rest }
            next();
        } else return res.sendStatus(401);
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            checkRWT(req, res, next);
        } else {
            console.log(error);
            return res.sendStatus(401);
        }
    }
}