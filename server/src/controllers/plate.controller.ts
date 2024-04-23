import PlateModel from "@/models/plate.model";
import { Request, Response } from "@/types/controller";
import handleError from "@/utils/handle_error";
import PlateValidator, { CreatePlateBody } from "@/validators/plate.vaidator";

export default class PlateController {
    static getPlate(req: Request, res: Response) {
        handleError(res, async () => {
            const plates = await PlateModel.getPlates();
            res.json({
                message: "OK",
                data: {
                    plates
                }
            });
        })
    }

    static getMyPlate(req: Request, res: Response) {
        const user = res.locals.user;

        handleError(res, async () => {
            const plates = await PlateModel.getMyPlates(user.id);
            res.json({
                message: "OK",
                data: {
                    plates
                }
            });
        })
    }

    static createPlate(req: Request, res: Response) {
        const user = res.locals.user;
        const body = <CreatePlateBody>req.body;

        handleError(res, async () => {
            PlateValidator.validateCreate(body);

            const plate = await PlateModel.createPlate({
                plate: body.plate,
                province: body.province,
                type: body.type,
                uid: user.id,
                vehicle: body.vehicle
            });

            res.json({
                message: "OK",
                data: { plate }
            });
        })
    }

    static deletePlate(req: Request, res: Response) {
        const user = res.locals.user;
        const id = req.params.id;

        handleError(res, async () => {
            if (user.role === "ADMIN") await PlateModel.forceDeletePlate([id]);
            else await PlateModel.deletePlate(id, user.id)
            res.sendStatus(200);
        })
    }

    static deleteManyPlate(req: Request, res: Response) {
        const user = res.locals.user;
        const plates = req.body.plates;

        handleError(res, async () => {
            if (user.role === "ADMIN") await PlateModel.forceDeletePlate(plates);
            else await PlateModel.deletePlate(plates, user.id)
            res.sendStatus(200);
        })
    }

    static createRoomLive(req: Request, res: Response) {
        const user = res.locals.user;
        const plates = req.body.plates;

        handleError(res, async () => {
            await PlateModel.createLive(plates)
        })
    }
}