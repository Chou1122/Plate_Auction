import TokenModel from "@/models/token.model";
import { Request, Response } from "@/types/controller";
import handleError from "@/utils/handle_error";

export default class SessionController {
    static revoke(req: Request, res: Response) {
        const { device, user } = res.locals;

        handleError(res, async () => {
            await TokenModel.revokeDevice(user.id, device);
            res.sendStatus(200);
        })
    }
}