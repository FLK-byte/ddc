"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileMiddleware = void 0;
const multer_1 = __importDefault(require("multer"));
const fileMiddleware = (req, res, next) => {
    const upload = (0, multer_1.default)({ dest: req.customFileDest }).single(req.customFileType);
    upload(req, res, (err) => {
        console.log(req);
        if (err)
            console.log(err);
        next();
    });
};
exports.fileMiddleware = fileMiddleware;
