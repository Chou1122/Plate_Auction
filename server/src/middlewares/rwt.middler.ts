import { NextFunction } from "express";
import { Request, Response } from "@/types/controller";
import handleError from "@/utils/handle_error";
import { IToken, generateToken, setToken, verifyRefresh } from "@/utils/token";

export async function checkRWT(req: Request, res: Response, next: NextFunction) {
    const token = <IToken>req.cookies;
    if (!token.refresh) return res.sendStatus(401);

    handleError(res, async () => {
        const data = verifyRefresh(token.refresh);
        const _token = generateToken(data);

        setToken(res, data.remember, _token);
        res.locals = data;

        next();
    }, 401)
}