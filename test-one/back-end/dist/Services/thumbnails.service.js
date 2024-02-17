"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteThumbnail = exports.findThumbnailByHash = exports.createThumbnail = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createThumbnail = async ({ hash, thumbnailPath }) => {
    return prisma.thumbnail.create({
        data: {
            hash,
            thumbnailPath
        }
    });
};
exports.createThumbnail = createThumbnail;
const findThumbnailByHash = (hash) => {
    return prisma.thumbnail.findFirst({
        where: {
            hash
        }
    });
};
exports.findThumbnailByHash = findThumbnailByHash;
const deleteThumbnail = (hash) => {
    return prisma.thumbnail.delete({
        where: {
            hash
        }
    });
};
exports.deleteThumbnail = deleteThumbnail;
