import AuthController from "@/controllers/auth.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/logout", [checkJWT], AuthController.logout);
AuthRouter.post("/register");
AuthRouter.post("/reset");
AuthRouter.post("/resetpassword");
AuthRouter.post("/sendOTP");

export default AuthRouter;