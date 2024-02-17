import {Request, Response, NextFunction} from "express"
export const fileHashMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {hashIdentifier} = req.params || req.query
        if (!hashIdentifier) throw new Error("A hashIdentifier was not provided with request")

        req.hashIdentifier = hashIdentifier as string
        next()
    } catch (err) {
        next(err)
    }

}
