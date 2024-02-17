import {Application} from "express";
import {videoController} from "../../Controllers"
import {fileHashMiddleware} from "../../Middlewares";

export function deleteRoutes(app: Application) {
    const controller = new videoController()
    app.delete("/delete/:id", fileHashMiddleware, controller.deleteVideo)
}
