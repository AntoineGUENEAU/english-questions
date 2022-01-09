import express from 'express'
import bodyParser from "body-parser"
import {router} from "./http/routes/routes";
const cors = require('cors')

const app: express.Express = express() //Express application
app.use(cors())
app.use(bodyParser.json()) //Allow to use req.body into route handlers
app.use(router); //Load routes

app.listen(3000)//Start app



