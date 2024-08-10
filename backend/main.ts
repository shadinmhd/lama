import express from "express"
import morgan from "morgan"
import cors from "cors"
import { loadEnvFile } from "process"
import cookieParser from "cookie-parser"
import errorMiddleware from "./middlewares/error.middleware"
import authRoute from "./routes/auth.route"
import userRoute from "./routes/user.route"
import connectDb from "./config/database"
import authorizationMiddleware from "./middlewares/authorization.middleware"
import projectRoute from "./routes/project.route"

loadEnvFile(".env")

connectDb()

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(express.json())
app.use(morgan("dev"))
app.use(cors({
	origin: "http://localhost:5173",
	credentials: true
}))

app.use("/user", authorizationMiddleware, userRoute)
app.use("/auth", authRoute)
app.use("/project", projectRoute)

app.use(errorMiddleware)

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`server listening http://localhost:${PORT}`)
})
