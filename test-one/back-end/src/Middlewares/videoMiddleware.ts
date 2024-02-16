import { Request, Response, NextFunction } from "express"
const videosDestPath = './src/uploads/videos'
export const videoMiddleware = (req: Request, res: Response, next: NextFunction)=>{
    req.customFileDest = videosDestPath
    req.customFileType = 'video'
    next()
}
