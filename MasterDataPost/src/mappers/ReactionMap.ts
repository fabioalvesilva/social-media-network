import { Mapper } from "../core/infra/Mapper";
import { Document, Model } from 'mongoose';
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Reaction } from "../domain/reaction";
import   IReactionDTO  from "../dto/IReactionDTO";
import { IReactionPersistence } from "../dataschema/IReactionPersistence";

export class ReactionMap extends Mapper<Reaction> {

    public static toDTO(reaction: Reaction): IReactionDTO {
        return {
            id: reaction.id.toString(),
            reaction: reaction.reaction,
            date: reaction.date,
            userId: reaction.userId,
            objectId: reaction.objectId,
            objectType: reaction.objectType
        } as IReactionDTO;
    }

    public static toDomain(reaction: any | Model<IReactionPersistence & Document>): Reaction {
        const reactionOrError = Reaction.create(
            reaction,
            new UniqueEntityID(reaction.domainId)
        );

        reactionOrError.isFailure ? console.log(reactionOrError.error) : '';

        return reactionOrError.isSuccess ? reactionOrError.getValue() : null;
    }

    public static toPersistence(reaction: Reaction): any {
        return {
            domainId: reaction.id.toString(),
            reaction: reaction.reaction,
            date: reaction.date,
            userId: reaction.userId,
            objectId: reaction.objectId,
            objectType: reaction.objectType
        }
    }
}