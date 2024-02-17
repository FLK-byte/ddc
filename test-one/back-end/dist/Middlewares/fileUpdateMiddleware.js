"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const Utils_1 = require("../Utils");
const fileMiddleware = (req, res, next) => {
    const { hashIdentifier } = req;
    const storage = multer_1.default.diskStorage({
        destination: req.customFileDest,
        filename: function (req, file, cb) {
            const [type, extension] = (file?.mimetype).split("/");
            cb(null, (0, Utils_1.stringWithoutQuotes)(hashIdentifier) + "." + extension);
        }
    });
    const upload = (0, multer_1.default)({ storage: storage }).single(req.customFileType);
    upload(req, res, (err) => {
        try {
            if (err)
                throw new Error(err);
            if (!req.file)
                throw new Error("Verify the file sent");
            const [type, extension] = (req.file?.mimetype).split("/");
            if (!['video', 'image'].includes(type))
                throw new Error("File type isnt't supported");
            next();
        }
        catch (error) {
            next(error);
        }
    });
};
exports.fileMiddleware = fileMiddleware;
