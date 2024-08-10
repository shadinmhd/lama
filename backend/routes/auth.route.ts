import { Router } from "express";
import { check, login } from "../controllers/auth.controller";

const authRoute = Router()

authRoute.post("/login", login)
authRoute.get("/check", check)

export default authRoute
