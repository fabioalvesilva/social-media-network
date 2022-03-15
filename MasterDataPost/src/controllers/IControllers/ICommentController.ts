import { Request, Response, NextFunction } from 'express';

export default interface ICommentController  {
  createComment(req: Request, res: Response, next: NextFunction);
  updateComment(req: Request, res: Response, next: NextFunction);
  getMe(req: Request, res: Response, next: NextFunction);
  commentsByPost(req: Request, res: Response, next: NextFunction);
}