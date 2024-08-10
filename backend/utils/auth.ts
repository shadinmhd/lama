import jwt from "jsonwebtoken"

export const signToken = (id: string) => {

  const jwtSecret = process.env.JWT_SECRET

  if (!jwtSecret) {
    throw new Error("JWT_SECRET environment variable not set")
  }

  return jwt.sign({ id }, jwtSecret)
}

export const verifyToken = (token: string) => {
  const jwtSecret = process.env.JWT_SECRET

  if (!jwtSecret) {
    throw new Error("JWT_SECRET environment variable not set")
  }

  return jwt.verify(token, jwtSecret) as { id: string }
}