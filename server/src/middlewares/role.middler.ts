import { NextFunction, Request, Response } from "@/types/controller";
import { UserRole } from "@prisma/client";

type F = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export function checkRole(roles: UserRole[]): F {
    return async (req: Request, res: Response, next: NextFunction) => {
        const { role } = res.locals.user;

        if (!roles.includes(role)) res.sendStatus(401);
        else next();
    }
}