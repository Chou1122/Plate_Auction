import SessionController from "@/controllers/seesion.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { Router } from "express";

const SessionRouter = Router();

SessionRouter.post("/revoke", [checkJWT], SessionController.revoke);  // Done

export default SessionRouter;