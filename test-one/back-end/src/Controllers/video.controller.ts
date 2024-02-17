import {Request, Response, NextFunction} from "express"
import {deleteVideo, createVideo, findVideoByHash, deleteThumbnail} from "../Services"

import fs from "fs"

interface requestFile extends Express.Multer.File {
    description: string,
    path: string
}

export class videoController {

    async createVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const {hashIdentifier} = req
            const {path, originalname, description,} = req.file as requestFile

            await createVideo({description, videoPath: path, hash: hashIdentifier, title: originalname})
            return res.send(req.file)
        } catch (err) {
            next(err)
        }
    }

    async deleteVideo(req: Request, res: Response, next: NextFunction) {
        try {
            const {hashIdentifier} = req

            const video = await deleteVideo(hashIdentifier)
            fs.unlink((video.videoPath as string), () => {})
            res.status(200).json({message: "files Removed"})
            next()
        } catch (err) {
            next(err)
        }
    }

    async downloadVideoByHash(req: Request, res: Response, next: NextFunction) {
        try {
            const {hashIdentifier} = req
            const video = await findVideoByHash(hashIdentifier)

            const uploadFolder = "./src/uploads/videos"
            fs.readdir(uploadFolder, (_, files) => {
                files.map(file => {
                    const [name, extension] = file.split(".")
                    if (name == hashIdentifier) res.download((video?.videoPath as string), (err) => {
                        if (err) throw new Error("Error sending video")
                    })
                })
            })

        } catch (err) {
            next(err)
        }
    }

    async getVideos(req: Request, res: Response, next: NextFunction) {
        try {
            const uploadFolder = "./src/uploads/videos"
            fs.readdir(uploadFolder, (_, files) => {
                return res.send(files)
            })

        } catch (err) {
            next(err)
        }
    }
}

