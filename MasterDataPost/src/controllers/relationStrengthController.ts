import { Request, Response, NextFunction } from 'express';
import { Inject, Service } from 'typedi';
import config from '../../config';
import IRelationStrengthService from '../services/IServices/IRelationStrengthService';
import IRelationStrengthController from './IControllers/IRelationStrengthController';

@Service()
export default class RelationStrengthController implements IRelationStrengthController {
    constructor(
        @Inject(config.services.relationStrength.name) private relationStrengthService: IRelationStrengthService
    ) { }

    public async getMe(req: Request, res: Response, next: NextFunction) {

        try {

            const postOrError = await this.relationStrengthService.calcRelationStrength(req.query.userFrom.toString(), req.query.userTo.toString());

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