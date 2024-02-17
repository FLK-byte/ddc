"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoMiddleware = void 0;
const Services_1 = require("../Services");
const videosDestPath = './src/uploads/videos';
const videoMiddleware = async (req, res, next) => {
    try {
        const { hashIdentifier } = req.query;
        if (!hashIdentifier)
            throw new Error("A hashIdentifier was not provided with request");
        const video = await (0, Services_1.findVideoByHash)(hashIdentifier);
        if (video)
            throw new Error("This hash for video is already been used");
        req.customFileDest = videosDestPath;
        req.customFileType = 'video';
        req.hashIdentifier = hashIdentifier;
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.videoMiddleware = videoMiddleware;
