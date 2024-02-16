import multer from "multer"
import { Request, Response, NextFunction } from "express"
export const fileMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const upload = multer({ dest: req.customFileDest } ).single(req.customFileType)

    upload(req, res, (err)=>{
        try {
            if (!req.file) throw new Error("Verify the file sent")
            if(err) throw new Error(err)
            const [type, extension] = (req.file?.mimetype as string).split("/")
            if (!['video','image'].includes(type)) throw new Error("File type isnt't supported")
            next()
        }catch(error){
            next(error)
        }

    })
}
