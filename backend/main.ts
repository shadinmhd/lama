import express from "express"
import morgan from "morgan"
import cors from "cors"
import { loadEnvFile } from "process"
import cookieParser from "cookie-parser"

loadEnvFile(".env")

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())
app.use(morgan("dev"))
app.use(cors({
	origin: "*"
}))

const PORT = process.env.PORT
app.listen(PORT, () => {
	console.log(`server listening http://localhost:${PORT}`)
})
