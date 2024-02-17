"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.videoController = void 0;
const Services_1 = require("../Services");
const fs_1 = __importDefault(require("fs"));
class videoController {
    async createVideo(req, res, next) {
        try {
            const { hashIdentifier } = req;
            const { path, originalname, description, } = req.file;
            await (0, Services_1.createVideo)({ description, videoPath: path, hash: hashIdentifier, title: originalname });
            return res.send(req.file);
        }
        catch (err) {
            next(err);
        }
    }
    async deleteVideo(req, res, next) {
        try {
            const { hashIdentifier } = req;
            const video = await (0, Services_1.deleteVideo)(hashIdentifier);
            fs_1.default.unlink(video.videoPath, () => { });
            res.status(200).json({ message: "files Removed" });
            next();
        }
        catch (err) {
            next(err);
        }
    }
    async downloadVideoByHash(req, res, next) {
        try {
            const { hashIdentifier } = req;
            const video = await (0, Services_1.findVideoByHash)(hashIdentifier);
            const uploadFolder = "./src/uploads/videos";
            fs_1.default.readdir(uploadFolder, (_, files) => {
                files.map(file => {
                    const [name, extension] = file.split(".");
                    if (name == hashIdentifier)
                        res.download(video?.videoPath, (err) => {
                            if (err)
                                throw new Error("Error sending video");
                        });
                });
            });
        }
        catch (err) {
            next(err);
        }
    }
    async getVideos(req, res, next) {
        try {
            const uploadFolder = "./src/uploads/videos";
            fs_1.default.readdir(uploadFolder, (_, files) => {
                return res.send(files);
            });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.videoController = videoController;
