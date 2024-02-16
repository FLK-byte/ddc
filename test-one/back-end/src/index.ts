import { getRoutes, postRoutes, deleteRoutes } from './Routes/index'
import {Response, Request, NextFunction } from "express"
const express = require('express')

const app = express()
const port = 3000

getRoutes(app)
postRoutes(app)
deleteRoutes(app)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    return res.status(400).json({error: err.message})
})
app.listen(port, ()=> console.log("Server is running at: ", port))
