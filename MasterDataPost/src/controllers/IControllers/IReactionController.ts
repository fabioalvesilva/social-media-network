import { Request, Response, NextFunction } from 'express';

export default interface IReactionController {
    createReaction(req: Request, res: Response, next: NextFunction);
    updateReaction(req: Request, res: Response, next: NextFunction);
    getMe(req: Request, res: Response, next: NextFunction);
    totalLikes(req: Request, res: Response, next: NextFunction);
    totalDislikes(req: Request, res: Response, next: NextFunction);
}