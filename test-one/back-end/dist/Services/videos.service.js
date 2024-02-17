"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteVideo = exports.findVideoByHash = exports.createVideo = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createVideo = async ({ hash, videoPath, title, description }) => {
    return prisma.videos.create({
        data: {
            hash,
            videoPath,
            title,
            description: description || ''
        }
    });
};
exports.createVideo = createVideo;
const findVideoByHash = (hash) => {
    return prisma.videos.findFirst({
        where: {
            hash
        }
    });
};
exports.findVideoByHash = findVideoByHash;
const deleteVideo = (hash) => {
    return prisma.videos.delete({
        where: {
            hash
        }
    });
};
exports.deleteVideo = deleteVideo;
