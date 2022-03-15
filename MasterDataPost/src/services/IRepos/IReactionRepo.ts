import { Repo } from "../../core/infra/Repo";
import { Result } from "../../core/logic/Result";
import { Reaction } from "../../domain/reaction";
import { ReactionId } from "../../domain/reactionId";
import  IReactionDTO  from "../../dto/IReactionDTO";

export default interface IReactionRepo extends Repo<Reaction> {
    save(reaction: Reaction): Promise<Reaction>;
    findByDomainId(reactionId: ReactionId | string): Promise<Reaction>;
    exists(reaction: Reaction): Promise<boolean>;
    findAll(): Promise<Result<IReactionDTO[]>>;
    findByCompoundId(uId: string, oType: number, oId: string): Promise<Reaction>;
    totalLikes(oId: string): Promise<Result<Number>>;
    totalDislikes(oId: string): Promise<Result<Number>>;
    calcRelationStrength(userFrom: string, userTo: string): Promise<Result<Number>>;
}