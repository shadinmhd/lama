import { NextFunction, Request, Response } from "express"

const errorMiddleware = (error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.log(error)
  res.status(500).send({
    success: false,
    message: "Server error"
  })
}

export default errorMiddleware
