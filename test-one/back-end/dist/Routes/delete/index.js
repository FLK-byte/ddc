"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRoutes = void 0;
const index_1 = require("../../Controllers/index");
const Middlewares_1 = require("../../Middlewares");
function deleteRoutes(app) {
    const VideoController = new index_1.videoController();
    const ThumbnailController = new index_1.thumbnailController();
    app.delete("/delete/:hashIdentifier", Middlewares_1.fileHashMiddleware, ThumbnailController.deleteThumbnail, VideoController.deleteVideo);
}
exports.deleteRoutes = deleteRoutes;
