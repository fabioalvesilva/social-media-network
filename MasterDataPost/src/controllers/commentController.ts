import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from '../../config';
import ICommentController from './IControllers/ICommentController';
import ICommentService from '../services/IServices/ICommentService';
import ICommentDTO from "../dto/ICommentDTO";
import { Result } from '../core/logic/Result';

@Service()
export default class CommentController implements ICommentController{
  constructor(
      @Inject(config.services.comment.name) private commentServiceInstance : ICommentService
  ) {}

  public async createComment(req: Request, res: Response, next: NextFunction) {

    try {
      const commentOrError = await this.commentServiceInstance.createComment(req.body as ICommentDTO) as Result<ICommentDTO>;
        
      if (commentOrError.isFailure) {
        return res.status(402).send();
      }

      const commentDTO = commentOrError.getValue();
      return res.json( commentDTO ).status(201);
    }
    catch (e) {
      return next(e);
    }

  };

  public async updateComment(req: Request, res: Response, next: NextFunction) {

    try {
      const commentOrError = await this.commentServiceInstance.updateComment(req.body as ICommentDTO) as Result<ICommentDTO>;

      if (commentOrError.isFailure) {
        return res.status(404).send();
      }

      const commentDTO = commentOrError.getValue();
      return res.status(201).json( commentDTO );
    }
    catch (e) {
      return next(e);
    }
  };

  public async getMe(req: Request, res: Response, next: NextFunction) {
    
    try {
      const postOrError = await this.commentServiceInstance.getAll();

      if (postOrError.isFailure) {
        return res.status(404).send();
      }

      return res.status(201).json(postOrError.getValue());
    }
    catch (e) {
      return next(e);
    }
  };

  public async getComment(req: Request, res: Response, next: NextFunction) {
    
    try {
      const postOrError = await this.commentServiceInstance.getComment(req.body.id);

      if (postOrError.isFailure) {
        return res.status(404).send();
      }

      return res.status(201).json(postOrError.getValue());
    }
    catch (e) {
      return next(e);
    }
  };


  public async commentsByPost(req: Request, res: Response, next: NextFunction) {
    
      try {
          const postOrError = await this.commentServiceInstance.getCommentsByPost(req.query.postId.toString());

      if (postOrError.isFailure) {
        return res.status(404).send();
      }

      return res.status(201).json(postOrError.getValue());
    }
    catch (e) {
      return next(e);
    }
  };



}