import {Application} from "express";
import {videoController, thumbnailController} from "../../Controllers"
import {fileHashMiddleware} from "../../Middlewares/index";

export function getRoutes(app: Application) {
    const VideoController = new videoController()
    const ThumbnailController = new thumbnailController()

    app.get("/", (req, res) => res.send("Hello World "))

    app.get("/videos", VideoController.getVideos)

    app.get("/thumbs", ThumbnailController.getThumbnails)
    app.get("/thumb/:hashIdentifier", fileHashMiddleware, ThumbnailController.getThumbnailByHash)

    app.get("/download/video/:hashIdentifier", fileHashMiddleware, VideoController.downloadVideoByHash)
}
