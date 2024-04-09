import AuthController from "@/controllers/auth.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { checkRole } from "@/middlewares/role.middler";
import { checkSWT } from "@/middlewares/swt.middler";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/sendOTP", AuthController.sendOTP);            // Done
AuthRouter.post("/login", AuthController.login);                // Done
AuthRouter.post("/signup", AuthController.signup);              // Done
AuthRouter.post("/logout", [checkJWT], AuthController.logout);  // Done
AuthRouter.post("/revoke", [checkJWT], AuthController.revoke);  // Done

AuthRouter.post("/reset", AuthController.reset);                    // Done
AuthRouter.get("/reset", AuthController.saveToken);                 // Done        
AuthRouter.put("reset", [checkSWT], AuthController.resetPassword);  // Done

AuthRouter.delete("/user/:id", [checkJWT, checkRole(["ADMIN"])], AuthController.deleteUser);    // Done
AuthRouter.post("/user", [checkJWT, checkRole(["ADMIN"])], AuthController.createUser);          // Done
AuthRouter.put("/user/:id", [checkJWT, checkRole(["ADMIN"])], AuthController.deleteUser);       // 
AuthRouter.post("/user/:id/rspass", [checkJWT, checkRole(["ADMIN"])], AuthController.deleteUser); // 

export default AuthRouter;