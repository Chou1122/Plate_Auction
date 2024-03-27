import AuthController from "@/controllers/auth.controller";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/register");
AuthRouter.post("/reset");
AuthRouter.post("/resetpassword");
AuthRouter.post("/sendOTP");

export default AuthRouter;