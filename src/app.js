import express from 'express'
import config from './config'

const app = express()

//Configuración
app.set('port', config.port)

export default app