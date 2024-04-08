import { Request, Response, NextFunction } from "@/types/controller";
import { IToken, verifyReset } from "@/utils/token";
import handleError from "@/utils/handle_error";

export async function checkSWT(req: Request, res: Response, next: NextFunction) {
    const token = <IToken>req.cookies;

    if (!token.token) return res.sendStatus(401);

    handleError(res, async () => {
        const { device, user, ...rest } = verifyReset(token.token);
        res.locals = { user, device, ...rest }
        next();
    }, 401);
}