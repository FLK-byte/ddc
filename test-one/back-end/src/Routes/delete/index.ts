import {Application} from "express";
import {videoController, thumbnailController} from "../../Controllers/index"
import {fileHashMiddleware} from "../../Middlewares";

export function deleteRoutes(app: Application) {
    const VideoController = new videoController()
    const ThumbnailController = new thumbnailController()
    app.delete("/delete/:hashIdentifier", fileHashMiddleware, ThumbnailController.deleteThumbnail, VideoController.deleteVideo)
}
