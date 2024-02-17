"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbnailMiddleware = void 0;
const Services_1 = require("../Services");
const thumbnailsDestPath = './src/uploads/thumbnails';
const thumbnailMiddleware = async (req, res, next) => {
    try {
        const { hashIdentifier } = req.query;
        if (!hashIdentifier)
            throw new Error("A hashIdentifier was not provided with request");
        const thumb = await (0, Services_1.findThumbnailByHash)(hashIdentifier);
        if (thumb)
            throw new Error("This hash for thumb is already been used");
        req.customFileDest = thumbnailsDestPath;
        req.customFileType = 'thumbnail';
        req.hashIdentifier = hashIdentifier;
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.thumbnailMiddleware = thumbnailMiddleware;
