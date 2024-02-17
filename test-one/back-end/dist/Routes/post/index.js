"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const Middlewares_1 = require("../../Middlewares");
const Controllers_1 = require("../../Controllers");
function postRoutes(app) {
    const VideoController = new Controllers_1.videoController();
    const ThumbnailController = new Controllers_1.thumbnailController();
    app.post("/upload/video", Middlewares_1.videoMiddleware, Middlewares_1.fileMiddleware, VideoController.createVideo);
    app.post("/upload/thumbnail", Middlewares_1.thumbnailMiddleware, Middlewares_1.fileMiddleware, ThumbnailController.createThumbnail);
}
exports.postRoutes = postRoutes;
