import { Router } from 'express';
import AuthRouter from "./auth.route";

const router = Router();

router.use("/auth", AuthRouter);
router.use("/user", AuthRouter);
router.use("/session", AuthRouter);

export default router;