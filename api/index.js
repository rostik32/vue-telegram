import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import router from './router/index.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import errorMiddleware from './middleware/errorMiddleware.js'

const myEnv = dotenv.config()
dotenvExpand(myEnv)

const PORT = process.env.PORT || 5000
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use('/api', router)
app.use(errorMiddleware)

const start = async () => {
  try {
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    app.listen(PORT, () =>
      console.log(`server has been started on port ${PORT}`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
