import {Request, Response, NextFunction} from "express"
import {findThumbnailByHash} from "../Services";

const thumbnailsDestPath = './src/uploads/thumbnails'

export const thumbnailMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {hashIdentifier} = req.query
        if (!hashIdentifier) throw new Error("A hashIdentifier was not provided with request")

        const thumb = await findThumbnailByHash(hashIdentifier as string)
        if (thumb) throw new Error("This hash for thumb is already been used")

        req.customFileDest = thumbnailsDestPath
        req.customFileType = 'thumbnail'
        req.hashIdentifier = hashIdentifier as string
        next()
    } catch (err) {
        next(err)
    }

}
