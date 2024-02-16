"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRoutes = void 0;
const middleware_1 = require("../../middleware");
function postRoutes(app) {
    app.post("/upload/video", middleware_1.videoMiddleware, middleware_1.fileMiddleware, (req, res) => {
        res.send("A");
    });
    app.post("/upload/thumbnail", (req, res) => {
    });
}
exports.postRoutes = postRoutes;
