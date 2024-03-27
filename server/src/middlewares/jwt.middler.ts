import { Request, Response, NextFunction, ILocalData } from "@/types/controller";
import * as jwt from "jsonwebtoken";
import config from "@/configs/env";
import { checkRWT } from "./rwt.middler";
import TokenModel from "@/models/token.model";

interface ICheckJWT {
    tokenOn?: "query" | "cookie"
}

export async function checkJWT(this: ICheckJWT | void, req: Request, res: Response, next: NextFunction) {
    const token = this && this.tokenOn === "query"
        ? <string>req.query.token
        : <string>req.cookies.token;

    if (!token) return res.sendStatus(401);

    try {
        const { device, user, ...rest } = <ILocalData>jwt.verify(token, config.JWT_KEY);

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