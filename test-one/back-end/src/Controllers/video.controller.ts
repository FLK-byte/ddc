import {Request, Response, NextFunction} from "express"
import {deleteVideo, createVideo, deleteVideoThumbnail, updateVideoThumbnail, findVideoById} from "../Services"
import fs from "fs"
interface requestFile extends Express.Multer.File {
    description: string,
    path: string
}

export class videoController {
    async createVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const {filename, path, originalname, description} = req.file as requestFile
            await createVideo({description, videoPath: path, hash: filename, title: originalname})
            return res.send(req.file)
        } catch (err) {
            next(err)
        }
    }

    async deleteVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const {videoId} = req
            await deleteVideo(videoId)
            //logic to remove file
        } catch (err) {
            next(err)
        }
    }

    async getVideos(req: Request, res: Response, next: NextFunction) {
        try {
            //res.download("./src/uploads/videos/bec310b005e391bdfd4d2555e8e1e086", "teste")
/*            const uploadFolder = "./src/uploads/"
            fs.readdir(uploadFolder, (_, files)=>{
                files.forEach((dir)=>{
                   res.download(uploadFolder+"/"+dir)
                })
            })*/

        } catch (err) {
            next(err)
        }
    }
    async getVideoById(req: Request, res: Response, next: NextFunction) {
        try {
            const {videoId} = req
            const video = await findVideoById(videoId)
            console.log(video)
        } catch (err) {
            next(err)
        }
    }

    async updateVideoThumbnail(req: Request, res: Response, next: NextFunction) {
        try {
            const {videoId} = req
            const {path} = req.file as requestFile
            await updateVideoThumbnail({hash: videoId, thumbnailPath: path})
        } catch (err) {
            next(err)
        }
    }
}

