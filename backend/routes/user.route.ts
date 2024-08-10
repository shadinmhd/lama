import { Router } from "express";
import { getCurrentUserDetalis } from "../controllers/user.controller";

const userRoute = Router()

userRoute.get("/", getCurrentUserDetalis)

export default userRoute