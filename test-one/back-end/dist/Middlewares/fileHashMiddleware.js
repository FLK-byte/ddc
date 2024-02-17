"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileHashMiddleware = void 0;
const fileHashMiddleware = async (req, res, next) => {
    try {
        const { hashIdentifier } = req.params || req.query;
        if (!hashIdentifier)
            throw new Error("A hashIdentifier was not provided with request");
        req.hashIdentifier = hashIdentifier;
        next();
    }
    catch (err) {
        next(err);
    }
};
exports.fileHashMiddleware = fileHashMiddleware;
