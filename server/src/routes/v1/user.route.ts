import AuthController from "@/controllers/auth.controller";
import UserController from "@/controllers/user.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { checkRole } from "@/middlewares/role.middler";
import { Router } from "express";

const UserRouter = Router();

UserRouter.get("/user/:id", [checkJWT], UserController.getUser); // 
UserRouter.delete("/user/:id", [checkJWT, checkRole(["ADMIN"])], UserController.deleteUser);    // Done
UserRouter.post("/user", [checkJWT, checkRole(["ADMIN"])], UserController.createUser);          // Done
UserRouter.put("/user/:id", [checkJWT, checkRole(["ADMIN"])], UserController.deleteUser);       // 
UserRouter.post("/user/:id/rspass", [checkJWT, checkRole(["ADMIN"])], UserController.deleteUser); // 

export default UserRouter;