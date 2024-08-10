import mongoose from "mongoose";
import ProjectFile from "../types/projectFile.type";

const projectFileSchema = new mongoose.Schema<ProjectFile>({

}, { timestamps: true })

const projectFileModel = mongoose.model("ProjectFile", projectFileSchema)
export default projectFileModel
