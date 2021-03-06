import { Request, Response, NextFunction } from 'express';

export default interface IPostController  {
  createPost(req: Request, res: Response, next: NextFunction);
  updatePost(req: Request, res: Response, next: NextFunction);
    getMe(req: Request, res: Response, next: NextFunction);
    getPostsByUser(req: Request, res: Response, next: NextFunction);
}