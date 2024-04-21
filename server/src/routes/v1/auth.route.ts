import AuthController from "@/controllers/auth.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { checkSWT } from "@/middlewares/swt.middler";
import { Router } from "express";

const AuthRouter = Router();

AuthRouter.post("/sendOTP", AuthController.sendOTP);            // Done
AuthRouter.post("/login", AuthController.login);                // Done
AuthRouter.post("/signup", AuthController.signup);              // Done
AuthRouter.post("/logout", [checkJWT], AuthController.logout);  // Done

/**
 * ============
 * Handle me
 * ============
 */

AuthRouter.get("/", [checkJWT], AuthController.checkLogin);     // Done
AuthRouter.get("/me", [checkJWT], AuthController.getMe);        // Done
AuthRouter.put("/me", [checkJWT], AuthController.updateMe);     // Done
AuthRouter.put("/me/password", [checkJWT], AuthController.updatePasswordMe);     // Done

/**
 * ============
 * Forget password flow
 * ============
 */
AuthRouter.post("/reset", AuthController.reset);                    // Done
AuthRouter.get("/reset", AuthController.saveToken);                 // Done        
AuthRouter.put("/reset", [checkSWT], AuthController.resetPassword);  // Done

export default AuthRouter;