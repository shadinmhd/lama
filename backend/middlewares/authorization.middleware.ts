import { NextFunction, Request, Response } from "express";

const authorizationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(403).send({
        success: true,
        message: "User is not logged in"
      })
    }

    next()
  } catch (error) {
    return res.status(500).send({
      success: false,
      message: "Server error"
    })
  }
}

export default authorizationMiddleware