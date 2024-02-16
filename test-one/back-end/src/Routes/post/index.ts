import {Application} from "express";
import {fileMiddleware, videoMiddleware, thumbnailMiddleware} from "../../Middlewares"
import {videoController} from "../../Controllers"

export function postRoutes(app: Application) {
    const controller = new videoController

    app.post("/upload/video", videoMiddleware, fileMiddleware, controller.createVideo)

    app.post("/upload/thumbnail", thumbnailMiddleware, fileMiddleware, controller.updateVideoThumbnail)
}
