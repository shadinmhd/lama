import { NextFunction, Request, Response } from "express"
import projectModel from "../models/project.model"
import { verifyToken } from "../utils/auth"

export const getAllProjects = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies.token
    const payload = verifyToken(token)

    const projects = await projectModel.find({ user: payload.id })

    res.status(200).send({
      success: true,
      message: "Projects fetched successfully",
      projects
    })
  } catch (error) {
    next(error)
  }
}

export const getProjectDetails = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    if (!id) {
      return res.status(400).send({
        success: false,
        message: "Project id not provded"
      })
    }

    const project = await projectModel.findById(id)

    if (!project) {
      return res.status(400).send({
        success: false,
        message: "Project not found"
      })
    }

    res.status(200).send({
      success: true,
      message: "Project details fetched successfully",
      project
    })

  } catch (error) {
    next(error)
  }
}

export const createProject = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body
    const token = req.cookies.token
    const payload = verifyToken(token)

    if (!name) {
      return res.status(400).send({
        success: true,
        message: "Project name not provided"
      })
    }

    const project = new projectModel({ name, user: payload.id })
    await project.save()

    res.status(200).send({
      success: true,
      message: "Project created successfully",
      project
    })

  } catch (error: any) {
    next(error)
  }
}

export const editProject = () => {

}

export const deleteProject = () => {

}
