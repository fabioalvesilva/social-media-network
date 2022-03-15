import { Result } from "../../core/logic/Result";

export default interface IReactionService {
    calcRelationStrength(userFrom: string, userTo: string): Promise<Result<Number>>
}
