import { NextFunction, Request, Response } from "express";
import userModel from "../models/user.model";
import { signToken } from "../utils/auth";

export const login = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email } = req.body

    if (!email) {
      return res.status(400).send({
        success: false,
        mesage: "Email not provided"
      })
    }

    const user = await userModel.findOne({ email })

    if (user) {

      const token = signToken(user.id)

      res.cookie("token", token, {
        httpOnly: true,
        maxAge: 7 * 24 * 60 * 60 * 1000
      })

      return res.status(200).send({
        success: true,
        message: "Logged in successfully",
        user
      })
    }

    const newUsesr = new userModel({
      email
    })

    await newUsesr.save()

    const token = signToken(String(newUsesr._id))

    res.cookie("token", token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000
    })

    res.status(200).send({
      success: true,
      message: "Logged in successfully",
      user: newUsesr
    })
  } catch (error: any) {
    console.log(error)

    if (error.code == 11000) {
      return res.status(400).send({
        success: false,
        message: `${Object.keys(error.keyPattern)[0]} is allready used`
      })
    }

    next(error)
  }
}

export const check = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token

    if (!token) {
      return res.status(200).send({
        success: false,
        message: "User is not logged in"
      })
    }

    res.status(200).send({
      success: true,
      message: "User is logged in"
    })
  } catch (error) {
    next(error)
  }
}