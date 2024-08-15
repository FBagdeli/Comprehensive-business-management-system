import express from 'express'
import cors from 'cors'
import personRouter from './routes/person.js'
const app = express()
app.use(cors())
app.use(express.json())

app.use('/persons', personRouter)
export default app