import express from 'express'
import config from './config'
import booksRoute from './routes/books.routes'
const app = express()

//Configuración
app.set('port', config.port)

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use(booksRoute)

export default app