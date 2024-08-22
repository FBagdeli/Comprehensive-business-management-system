import express from 'express'
import cors from 'cors'
import personRouter from './routes/person.js'
import userRouter from './routes/user.js'
import loginRouter from './routes/auth.js'
import productRouter from './routes/produc.js'
import invoiceRouter from './routes/invoice.js'
const app = express()
app.use(cors())
app.use(express.json())

app.use('/users', userRouter)
app.use('/persons', personRouter)
app.use('/login', loginRouter)
app.use('/products', productRouter)
app.use('/invoices', invoiceRouter)


export default app