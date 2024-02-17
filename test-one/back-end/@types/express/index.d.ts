import * as express from "express"
declare global {
    namespace Express {
        interface Request {
            customFileDest: string,
            customFileType: string
            hashIdentifier: string
        }
    }
}
