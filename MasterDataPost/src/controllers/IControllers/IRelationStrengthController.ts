import { Request, Response, NextFunction } from 'express';

export default interface IRelationStrengthController {
    getMe(req: Request, res: Response, next: NextFunction);
}