import mongoose from "mongoose"
import User from "../types/user.type"

const userSchema = new mongoose.Schema<User>({
  username: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true })

const userModel = mongoose.model("User", userSchema)
export default userModel