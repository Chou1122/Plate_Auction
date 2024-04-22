import PlateController from "@/controllers/plate.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { checkRole } from "@/middlewares/role.middler";
import { Router } from "express";

const PlateRouter = Router();

PlateRouter.get("/", PlateController.getPlate);
PlateRouter.get("/my", [checkJWT, checkRole(["ADMIN", "PROVIDER"])], PlateController.getMyPlate);
PlateRouter.post("/", [checkJWT, checkRole(["PROVIDER"])], PlateController.createPlate);
PlateRouter.delete("/:id", [checkJWT, checkRole(["ADMIN", "PROVIDER"])], PlateController.deletePlate);

export default PlateRouter;