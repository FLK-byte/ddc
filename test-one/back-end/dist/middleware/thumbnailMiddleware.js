"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbnailMiddleware = void 0;
const thumbnailsDestPath = './src/uploads/thumbnails';
const thumbnailMiddleware = (req, res, next) => {
    req.customFileDest = thumbnailsDestPath;
    req.customFileType = 'thumbnail';
    next();
};
exports.thumbnailMiddleware = thumbnailMiddleware;
