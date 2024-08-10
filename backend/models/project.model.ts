import mongoose from "mongoose";
import Project from "../types/project.type";

const projectSchema = new mongoose.Schema<Project>({
  name: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  }
}, { timestamps: true })

const projectModel = mongoose.model("Project", projectSchema)
export default projectModel
