import { Service, Inject } from 'typedi';
import { Result } from "../core/logic/Result";
import config from "../../config";
import IReactionService from './IServices/IReactionService';
import IReactionDTO from '../dto/IReactionDTO';
import { Reaction } from '../domain/reaction';
import { ReactionMap } from '../mappers/ReactionMap';
import IReactionRepo from './IRepos/IReactionRepo';
import IPostRepo from './IRepos/IPostRepo';

@Service()
export default class ReactionService implements IReactionService {



    constructor(
        @Inject(config.repos.reaction.name) private reactionRepo: IReactionRepo,
        @Inject(config.repos.post.name) private postRepo: IPostRepo
    ) { }

    public async createReaction(reactionDTO: IReactionDTO): Promise<Result<IReactionDTO>> {

        try {
            const reaction = await this.reactionRepo.findByCompoundId(reactionDTO.userId, reactionDTO.objectType, reactionDTO.objectId);

            if (reaction != null) {
                return this.updateReaction(reactionDTO);

            } else {
                const reactionOrError = await Reaction.create(reactionDTO);

                if (reactionOrError.isFailure) {
                    return Result.fail<IReactionDTO>(reactionOrError.errorValue());
                }

                //Update � Relationship Strength
                let post = await this.postRepo.findById(reactionDTO.objectId);

                this.updateRelationStrenght(reactionDTO.userId, post.userId, reactionDTO.reaction);

                const reactionResult = reactionOrError.getValue();

                await this.reactionRepo.save(reactionResult);

                const reactionDTOResult = ReactionMap.toDTO(reactionResult) as IReactionDTO;
                return Result.ok<IReactionDTO>(reactionDTOResult)
            }

        } catch (e) {
            throw e;
        }
    }

    public async updateReaction(reactionDTO: IReactionDTO): Promise<Result<IReactionDTO>> {

        try {
            const reaction = await this.reactionRepo.findByCompoundId(reactionDTO.userId, reactionDTO.objectType, reactionDTO.objectId);

            if (reaction === null) {
                return Result.fail<IReactionDTO>("Reaction not found");
            }
            else {

                reaction.reaction = reactionDTO.reaction;
                reaction.date = reactionDTO.date;

                await this.reactionRepo.save(reaction);

                const reactionDTOResult = ReactionMap.toDTO(reaction) as IReactionDTO;
                return Result.ok<IReactionDTO>(reactionDTOResult)
            }
        } catch (e) {
            throw e;
        }
    }

    public async getAll(): Promise<Result<IReactionDTO[]>> {

        try {
            const reactions = (await this.reactionRepo.findAll()).getValue();

            if (reactions === null) {
                return Result.fail<IReactionDTO[]>("There's no reactions available'");
            }
            else {
                return Result.ok<IReactionDTO[]>(reactions);
            }

        } catch (e) {
            throw e;
        }
    }

    public async likes(oId: string): Promise<Result<Number>> {

        try {
            const reactions = await this.reactionRepo.totalLikes(oId);
            if (reactions === null) {
                return Result.fail<Number>(reactions.getValue());
            }
            else {
                return Result.ok<Number>(reactions.getValue());
            }

        } catch (e) {
            throw e;
        }
    }

    public async dislikes(oId: string): Promise<Result<Number>> {

        try {

            let reactions = await this.reactionRepo.totalDislikes(oId);
            if (reactions === null) {
                return Result.fail<Number>(reactions.getValue());
            }
            else {
                return Result.ok<Number>(reactions.getValue());
            }

        } catch (e) {
            throw e;
        }
    }

    public async updateRelationStrenght(userFrom: string, userTo: string, reaction: number) {

        const https = require('https')

        const mdrs_url = 'localhost'

        let data = JSON.stringify({
            userFrom: userFrom,
            userTo: userTo,
            reaction: reaction
        })

        const options = {
            hostname: mdrs_url,
            path: '/mdrs/Relationships/relationStrength',
            port: 5001,
            rejectUnauthorized: false,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        }

        const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`)

            res.on('data', (d) => {
                process.stdout.write(d)
            })
        })

        req.on('error', error => {
            console.error(error)
        })

        req.write(data)
        req.end()

    }

}
