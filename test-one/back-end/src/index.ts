import { getRoutes, postRoutes, deleteRoutes } from './Routes/index'
import {Response, Request, NextFunction } from "express"
const express = require('express')
const cors = require('cors');
const app = express()
const port = 1337
app.use(cors())

getRoutes(app)
postRoutes(app)
deleteRoutes(app)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.log(err)
    return res.status(400).json({error: err.message})
})
app.listen(port, ()=> console.log("Server is running at: ", port))
