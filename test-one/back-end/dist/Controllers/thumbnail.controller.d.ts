import { Request, Response, NextFunction } from "express";
export declare class thumbnailController {
    createThumbnail(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteThumbnail(req: Request, res: Response, next: NextFunction): Promise<void>;
    getThumbnailByHash(req: Request, res: Response, next: NextFunction): Promise<void>;
    getThumbnails(req: Request, res: Response, next: NextFunction): Promise<void>;
}
