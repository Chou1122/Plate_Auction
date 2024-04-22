import { Router } from 'express';
import AuthRouter from "./auth.route";
import SessionRouter from './session.route';
import UserRouter from './user.route';
import PlateRouter from './plate.route';

const router = Router();

router.use("/auth", AuthRouter);
router.use("/user", UserRouter);
router.use("/session", SessionRouter);
router.use("/plate", PlateRouter);

export default router;