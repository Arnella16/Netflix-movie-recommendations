import express from "express";
import { Register } from "../controllers/user.js";

const userRouter=express.Router();

userRouter.route("/register"). post(Register);

export default userRouter;
