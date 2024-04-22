import SessionController from "@/controllers/seesion.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { Router } from "express";

const SessionRouter = Router();

SessionRouter.post("/revokeAll", [checkJWT], SessionController.revokeAll);
SessionRouter.post("/revoke", [checkJWT], SessionController.revoke);
SessionRouter.get("/", [checkJWT], SessionController.getAllDevices);

export default SessionRouter;