import { Application } from "express";
import {videoController} from "../../Controllers"
export function deleteRoutes (app: Application) {
    const controller = new videoController()
    app.delete("/delete/:id", controller.deleteVideo)
}
