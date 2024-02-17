import { Request, Response, NextFunction } from "express";
export declare class videoController {
    createVideo(req: Request, res: Response, next: NextFunction): Promise<Response<any, Record<string, any>> | undefined>;
    deleteVideo(req: Request, res: Response, next: NextFunction): Promise<void>;
    downloadVideoByHash(req: Request, res: Response, next: NextFunction): Promise<void>;
    getVideos(req: Request, res: Response, next: NextFunction): Promise<void>;
}
