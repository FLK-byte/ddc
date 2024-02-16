import { Application } from "express";

export function getRoutes (app: Application) {
    app.get("/", (req, res)=>{
        res.send("Hello World ")
    })

    app.get("/videos", (req, res)=>{
        res.send("Hello World ")
    })

    app.get("/download/video/:id", (req, res)=>{
        res.send("Hello World ")
    })
}
