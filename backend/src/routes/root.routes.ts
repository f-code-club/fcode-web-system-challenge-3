import { Router } from "express";
import authRouter from "./auth.routes";
import userRouter from "./user.routes";

const rootRouter = Router();

rootRouter.use("/auth", authRouter);
rootRouter.use("/users", userRouter);
export default rootRouter;
