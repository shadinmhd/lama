import { connect } from "mongoose"

const connectDb = () => {
  try {
    const dburl = process.env.DATABASE_URL

    if (!dburl) {
      throw new Error("DATABASE_URL is not set in environment")
    }

    connect(dburl)
      .then(() => {
        console.log("Database connected successfully")
      })
  } catch (error) {
    console.log(error)
  }
}

export default connectDb