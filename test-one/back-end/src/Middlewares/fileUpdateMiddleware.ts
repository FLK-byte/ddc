import multer from "multer"
import { Request, Response, NextFunction } from "express"
import {stringWithoutQuotes} from "../Utils";
export const fileMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const {hashIdentifier} = req

    const storage = multer.diskStorage(
        {
            destination: req.customFileDest,
            filename: function ( req, file, cb ) {
                const [type, extension] = (file?.mimetype as string).split("/")
                cb(null, stringWithoutQuotes(hashIdentifier)+"."+extension)
            }
        }
    );
    const upload = multer({ storage: storage } ).single(req.customFileType)

    upload(req, res, (err)=>{
        try {
            if(err) throw new Error(err)
            if (!req.file) throw new Error("Verify the file sent")
            const [type, extension] = (req.file?.mimetype as string).split("/")
            if (!['video','image'].includes(type)) throw new Error("File type isnt't supported")
            next()
        }catch(error){
            next(error)
        }

    })
}
