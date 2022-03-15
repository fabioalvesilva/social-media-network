import { Result } from "../../core/logic/Result";
import  IReactionDTO  from "../../dto/IReactionDTO";

export default interface IReactionService {
    createReaction(reactionDTO: IReactionDTO): Promise<Result<IReactionDTO>>;
    updateReaction(reactionDTO: IReactionDTO): Promise<Result<IReactionDTO>>;
    getAll(): Promise<Result<IReactionDTO[]>>;
    likes(oId: string): Promise<Result<Number>>;
    dislikes(oId: string): Promise<Result<Number>>
}
