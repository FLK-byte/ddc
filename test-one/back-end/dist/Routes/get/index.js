"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
const Controllers_1 = require("../../Controllers");
const index_1 = require("../../Middlewares/index");
function getRoutes(app) {
    const VideoController = new Controllers_1.videoController();
    const ThumbnailController = new Controllers_1.thumbnailController();
    app.get("/", (req, res) => res.send("Hello World "));
    app.get("/videos", VideoController.getVideos);
    app.get("/thumbs", ThumbnailController.getThumbnails);
    app.get("/thumb/:hashIdentifier", index_1.fileHashMiddleware, ThumbnailController.getThumbnailByHash);
    app.get("/download/video/:hashIdentifier", index_1.fileHashMiddleware, VideoController.downloadVideoByHash);
}
exports.getRoutes = getRoutes;
