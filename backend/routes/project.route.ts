import { Router } from "express";
import { createProject, getAllProjects, getProjectDetails } from "../controllers/project.controller";

const projectRoute = Router()

projectRoute.route("/")
  .post(createProject)
  .get(getAllProjects)

projectRoute.get("/:id", getProjectDetails)

export default projectRoute