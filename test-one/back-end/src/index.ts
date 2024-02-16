import { getRoutes, postRoutes, deleteRoutes } from './Routes/index'

const express = require('express')

const app = express()
const port = 3000

getRoutes(app)
postRoutes(app)
deleteRoutes(app)

app.listen(port, ()=> console.log("Server is running at: ", port))
