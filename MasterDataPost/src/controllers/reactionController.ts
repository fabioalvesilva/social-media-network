import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from '../../config';
import { Result } from '../core/logic/Result';
import IReactionController from './IControllers/IReactionController';
import IReactionService from '../services/IServices/IReactionService';
import  IReactionDTO  from '../dto/IReactionDTO';

@Service()
export default class ReactionController implements IReactionController {
    constructor(
        @Inject(config.services.reaction.name) private reactionServiceInstance: IReactionService
    ) { }

    public async createReaction(req: Request, res: Response, next: NextFunction) {
        
        try {
            const reactionOrError = await this.reactionServiceInstance.createReaction(req.body as IReactionDTO) as Result<IReactionDTO>;    

            if (reactionOrError.isFailure) {
                return res.status(402).send();
            }

            const reactionDTO = reactionOrError.getValue();

            return res.json(reactionDTO).status(201);
        }
        catch (e) {
            return next(e);
        }

    };

    public async updateReaction(req: Request, res: Response, next: NextFunction) {
        try {
            const reactionOrError = await this.reactionServiceInstance.updateReaction(req.body as IReactionDTO) as Result<IReactionDTO>;

            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }

            const postDTO = reactionOrError.getValue();
            return res.status(201).json(postDTO);
        }
        catch (e) {
            return next(e);
        }
    };

    public async getMe(req: Request, res: Response, next: NextFunction) {
      
        try {
            const reactionOrError = await this.reactionServiceInstance.getAll();

            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }

            return res.status(201).json(reactionOrError.getValue());
        }
        catch (e) {
            return next(e);
        }
    };

    public async totalLikes(req: Request, res: Response, next: NextFunction) {

        try {
            
            const reactionOrError = await this.reactionServiceInstance.likes(req.query.oId.toString());
            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }

            return res.status(201).json(reactionOrError.getValue());
        }
        catch (e) {
            return next(e);
        }
    };

    public async totalDislikes(req: Request, res: Response, next: NextFunction) {

        try {
            const reactionOrError = await this.reactionServiceInstance.dislikes(req.query.oId.toString());
            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }

            return res.status(201).json(reactionOrError.getValue());
        }
        catch (e) {
            return next(e);
        }
    };

}