import UserController from "@/controllers/user.controller";
import { checkJWT } from "@/middlewares/jwt.middler";
import { checkRole } from "@/middlewares/role.middler";
import { Router } from "express";

const UserRouter = Router();

// UserRouter.get("/:id", [checkJWT], UserController.getUser); //
UserRouter.get("/", [checkJWT, checkRole(["ADMIN"])], UserController.getAllUser);
UserRouter.post("/", [checkJWT, checkRole(["ADMIN"])], UserController.createUser);
UserRouter.delete("/:id", [checkJWT, checkRole(["ADMIN"])], UserController.deleteUser);
UserRouter.put("/:id/rspass", [checkJWT, checkRole(["ADMIN"])], UserController.rePasswordUser);
UserRouter.put("/:id/ban", [checkJWT, checkRole(["ADMIN"])], UserController.setBanForever);
UserRouter.put("/:id/unban", [checkJWT, checkRole(["ADMIN"])], UserController.unsetBanForever);
// UserRouter.put("/:id", [checkJWT, checkRole(["ADMIN"])], UserController.deleteUser);       

export default UserRouter;