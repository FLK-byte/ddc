import {Application} from "express";
import {fileMiddleware, videoMiddleware, thumbnailMiddleware} from "../../Middlewares"
import {thumbnailController, videoController} from "../../Controllers"

export function postRoutes(app: Application) {
    const VideoController = new videoController()
    const ThumbnailController = new thumbnailController()

    app.post("/upload/video", videoMiddleware, fileMiddleware, VideoController.createVideo)

    app.post("/upload/thumbnail", thumbnailMiddleware, fileMiddleware, ThumbnailController.createThumbnail)
}
