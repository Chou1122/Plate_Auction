import TokenModel from "@/models/token.model";
import { Request, Response } from "@/types/controller";
import handleError from "@/utils/handle_error";

export default class SessionController {
    static revoke(req: Request, res: Response) {
        const { device: cur_device, user } = res.locals;
        const { device } = req.body;

        handleError(res, async () => {
            if (device !== cur_device) {
                await TokenModel.removeDevice(user.id, device);
            } else {
                res.json({
                    message: "Can't revoke current session device"
                })
            }
            res.sendStatus(200);
        })
    }

    static revokeAll(req: Request, res: Response) {
        const { device, user } = res.locals;

        handleError(res, async () => {
            await TokenModel.revokeDevice(user.id, device);
            res.sendStatus(200);
        })
    }

    static getAllDevices(req: Request, res: Response) {
        const { device, user } = res.locals;

        handleError(res, async () => {
            const session = await TokenModel.getAllDevices(user.id);
            res.json({
                message: "OK",
                data: {
                    session
                }
            });
        })
    }
}