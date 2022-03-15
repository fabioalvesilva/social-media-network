"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionMap = void 0;
const Mapper_1 = require("../core/infra/Mapper");
const UniqueEntityID_1 = require("../core/domain/UniqueEntityID");
const reaction_1 = require("../domain/reaction");
class ReactionMap extends Mapper_1.Mapper {
    static toDTO(reaction) {
        return {
            id: reaction.id.toString(),
            reaction: reaction.reaction,
            date: reaction.date,
            userId: reaction.userId,
            objectId: reaction.objectId,
            objectType: reaction.objectType
        };
    }
    static toDomain(reaction) {
        const reactionOrError = reaction_1.Reaction.create(reaction, new UniqueEntityID_1.UniqueEntityID(reaction.domainId));
        reactionOrError.isFailure ? console.log(reactionOrError.error) : '';
        return reactionOrError.isSuccess ? reactionOrError.getValue() : null;
    }
    static toPersistence(reaction) {
        return {
            domainId: reaction.id.toString(),
            reaction: reaction.reaction,
            date: reaction.date,
            userId: reaction.userId,
            objectId: reaction.objectId,
            objectType: reaction.objectType
        };
    }
}
exports.ReactionMap = ReactionMap;
//# sourceMappingURL=ReactionMap.js.map