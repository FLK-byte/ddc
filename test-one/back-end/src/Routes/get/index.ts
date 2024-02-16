import { Application } from "express";
import {videoController} from "../../Controllers"
export function getRoutes (app: Application) {
    const controller = new videoController()
    app.get("/", (req, res)=>{
        res.send("Hello World ")
    })
    app.get("/videos", controller.getVideos)

    app.get("/download/video/:id", controller.getVideoById)
}
