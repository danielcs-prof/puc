import express from 'express'
import dotenv from 'dotenv'
import authRouters from './routers/router'

dotenv.config()

const app = express()
const PORTA = process.env.PORT
app.use(express.json())
app.use('/api',authRouters)

app.listen(PORTA, ()=>{
    console.log(`Servidor em execução na porta: ${PORTA}`)
})
