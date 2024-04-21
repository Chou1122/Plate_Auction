import { Router } from 'express';
import AuthRouter from "./auth.route";
import SessionRouter from './session.route';

const router = Router();

router.use("/auth", AuthRouter);
router.use("/user", AuthRouter);
router.use("/session", SessionRouter);

export default router;