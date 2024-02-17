"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.thumbnailController = void 0;
const Services_1 = require("../Services");
const fs_1 = __importDefault(require("fs"));
class thumbnailController {
    async createThumbnail(req, res, next) {
        try {
            const { hashIdentifier } = req;
            const { path } = req.file;
            await (0, Services_1.createThumbnail)({ hash: hashIdentifier, thumbnailPath: path });
            return res.send(req.file);
        }
        catch (err) {
            next(err);
        }
    }
    async deleteThumbnail(req, res, next) {
        try {
            const { hashIdentifier } = req;
            const thumb = await (0, Services_1.deleteThumbnail)(hashIdentifier);
            fs_1.default.unlink(thumb?.thumbnailPath, () => { });
            next();
        }
        catch (err) {
            next(err);
        }
    }
    async getThumbnailByHash(req, res, next) {
        try {
            const { hashIdentifier } = req;
            const thumb = await (0, Services_1.findThumbnailByHash)(hashIdentifier);
            if (!thumb)
                throw new Error("Thumbnail not found");
            const uploadFolder = "./src/uploads/thumbnails";
            fs_1.default.readdir(uploadFolder, (_, files) => {
                files.map(file => {
                    const [name, extension] = file.split(".");
                    if (name == hashIdentifier)
                        fs_1.default.readFile(thumb?.thumbnailPath, (_, data) => {
                            res.send(data);
                        });
                });
            });
        }
        catch (err) {
            next(err);
        }
    }
    async getThumbnails(req, res, next) {
        try {
            const uploadFolder = "./src/uploads/thumbnails";
            fs_1.default.readdir(uploadFolder, (_, files) => {
                return res.send(files);
            });
        }
        catch (err) {
            next(err);
        }
    }
}
exports.thumbnailController = thumbnailController;
