import { NextFunction } from "express";
import { ILocalData, Request, Response } from "@/types/controller";
import * as jwt from "jsonwebtoken";
import config from "@/configs/env";
import handleError from "@/utils/handle_error";
import { generateToken, setToken } from "@/utils/token";

export async function checkRWT(req: Request, res: Response, next: NextFunction) {
    const refresh = req.cookies.refresh;

    handleError(res, async () => {
        if (refresh) {
            try {
                const data = <ILocalData>jwt.verify(refresh, config.JWT_REFRESH_KEY);
                const token = generateToken(data);

                setToken(res, data.remember, token);
                res.locals = data;

                next();
            } catch (error) {
                console.log(error);
                res.sendStatus(401);
            }
        } else return res.sendStatus(401);
    })
}