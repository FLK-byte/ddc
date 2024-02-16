"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoMiddleware = void 0;
const videosDestPath = './src/uploads/videos';
const videoMiddleware = (req, res, next) => {
    req.customFileDest = videosDestPath;
    req.customFileType = 'video';
    next();
};
exports.videoMiddleware = videoMiddleware;
