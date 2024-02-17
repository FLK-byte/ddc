import {Request, Response, NextFunction} from "express"
import {findVideoByHash} from "../Services";

const videosDestPath = './src/uploads/videos'
export const videoMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {hashIdentifier} = req.query
        if (!hashIdentifier) throw new Error("A hashIdentifier was not provided with request")

        const video = await findVideoByHash(hashIdentifier as string)
        if (video) throw new Error("This hash for video is already been used")

        req.customFileDest = videosDestPath
        req.customFileType = 'video'
        req.hashIdentifier = hashIdentifier as string
        next()
    } catch (err) {
        next(err)
    }
}
