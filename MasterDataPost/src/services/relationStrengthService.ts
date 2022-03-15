import { Service, Inject } from 'typedi';
import { Result } from "../core/logic/Result";
import config from "../../config";
import IReactionRepo from './IRepos/IReactionRepo';
import IRelationStrengthService from './IServices/IRelationStrengthService';

@Service()
export default class RelationStrengthService implements IRelationStrengthService {

    constructor(
        @Inject(config.repos.reaction.name) private reactionRepo: IReactionRepo
    ) { }

    public async calcRelationStrength(userFrom: string, userTo: string): Promise<Result<Number>> {

        try {
            let value = await this.reactionRepo.calcRelationStrength(userFrom, userTo);

            if (value == null) {
                return Result.fail<Number>(value.getValue());
            }
            return Result.ok<Number>(value.getValue());
        } catch (e) {
            throw e;
        }
    }
}
