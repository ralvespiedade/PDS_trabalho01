import express from 'express'
import { json } from 'body-parser'

import router from './routes/routes'

const app = express()

//Middleware - Allowing json analysis from requests body
app.use(json())

//Rotas
app.use('/locadora', router)


const port = process.env.PORT || 3333
app.listen('3333', () => {
  console.log(`Server listening on port ${port}.`)
  
})