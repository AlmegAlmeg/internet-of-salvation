import express, { Application, json } from 'express'
import cors from 'cors'
import { router as contentRouter } from './routes/content'

const app: Application = express()

app.use(cors())
app.use(json())

const PORT: number = 8080

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})

app.use('/content', contentRouter)
