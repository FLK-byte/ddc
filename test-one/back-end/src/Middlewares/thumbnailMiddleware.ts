import { Request, Response, NextFunction } from "express"
const thumbnailsDestPath = './src/uploads/thumbnails'

export const thumbnailMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    req.customFileDest = thumbnailsDestPath
    req.customFileType = 'thumbnail'
    next()
}
