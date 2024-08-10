import { NextFunction, Request, Response } from "express-serve-static-core"
import { verifyToken } from "../utils/auth"
import userModel from "../models/user.model"

export const getCurrentUserDetalis = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token
    const payload = verifyToken(token)

    const user = await userModel.findById(payload.id)

    if (!user) {
      return res.status(400).send({
        success: false,
        message: "User not found",
      })
    }

    res.status(200).send({
      success: true,
      message: "User details fetched successfully",
      user
    })

  } catch (error) {
    next(error)
  }
}