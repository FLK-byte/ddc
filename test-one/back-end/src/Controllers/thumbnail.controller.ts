import {Request, Response, NextFunction} from "express"
import {createThumbnail, deleteThumbnail, findThumbnailByHash} from "../Services"
import fs from "fs"

interface requestFile extends Express.Multer.File {
    path: string
}

export class thumbnailController {
    async createThumbnail(req: Request, res: Response, next: NextFunction) {
        try {
            const {hashIdentifier} = req
            const {path} = req.file as requestFile

            await createThumbnail({hash: hashIdentifier, thumbnailPath: path})
            return res.send(req.file)
        } catch (err) {
            next(err)
        }
    }

    async deleteThumbnail(req: Request, res: Response, next: NextFunction) {
        try {
            const {hashIdentifier} = req
            const thumb = await deleteThumbnail(hashIdentifier)

            fs.unlink((thumb?.thumbnailPath as string), () => {})
            next()
        } catch (err) {
            next(err)
        }
    }

    async getThumbnailByHash(req: Request, res: Response, next: NextFunction) {
        try {
            const {hashIdentifier} = req

            const thumb = await findThumbnailByHash(hashIdentifier)
            if (!thumb) throw new Error("Thumbnail not found")

            const uploadFolder = "./src/uploads/thumbnails"
            fs.readdir(uploadFolder, (_, files) => {
                files.map(file => {
                    const [name, extension] = file.split(".")
                    if (name == hashIdentifier) fs.readFile((thumb?.thumbnailPath as string), (_, data) => {
                        res.send(data)
                    })
                })
            })


        } catch (err) {
            next(err)
        }
    }

    async getThumbnails(req: Request, res: Response, next: NextFunction) {
        try {
            const uploadFolder = "./src/uploads/thumbnails"
            fs.readdir(uploadFolder, (_, files) => {
                return res.send(files)
            })

        } catch (err) {
            next(err)
        }
    }
}

