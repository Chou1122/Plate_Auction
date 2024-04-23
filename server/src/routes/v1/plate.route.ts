import PlateController from "@/controllers/plate.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { checkRole } from "@/middlewares/role.middler";
import { Router } from "express";

const PlateRouter = Router();

PlateRouter.get("/", PlateController.getPlate);
PlateRouter.delete("/", [checkJWT, checkRole(["ADMIN", "PROVIDER"])], PlateController.deleteManyPlate);
PlateRouter.post("/", [checkJWT, checkRole(["AUCTIONEER"])], PlateController.createRoomLive);
PlateRouter.post("/", [checkJWT, checkRole(["PROVIDER"])], PlateController.createPlate);
PlateRouter.get("/my", [checkJWT, checkRole(["ADMIN", "PROVIDER"])], PlateController.getMyPlate);
PlateRouter.delete("/:id", [checkJWT, checkRole(["ADMIN", "PROVIDER"])], PlateController.deletePlate);


export default PlateRouter;