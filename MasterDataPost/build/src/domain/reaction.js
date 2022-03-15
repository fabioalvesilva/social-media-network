"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reaction = void 0;
const Result_1 = require("../core/logic/Result");
const Entity_1 = require("../core/domain/Entity");
const reactionId_1 = require("./reactionId");
class Reaction extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get reactionId() {
        return reactionId_1.ReactionId.caller(this.id);
    }
    get reaction() {
        return this.props.reaction;
    }
    set reaction(value) {
        this.props.reaction = value;
    }
    get date() {
        return this.props.date;
    }
    set date(value) {
        this.props.date = value;
    }
    get userId() {
        return this.props.userId;
    }
    get objectId() {
        return this.props.objectId;
    }
    get objectType() {
        return this.props.objectType;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(dto, id) {
        if (!!dto.objectId === null || dto.objectType === null || dto.userId === null) {
            return Result_1.Result.fail('Missing reaction information');
        }
        else {
            const reaction = new Reaction({
                reaction: dto.reaction,
                date: dto.date,
                userId: dto.userId,
                objectId: dto.objectId,
                objectType: dto.objectType
            }, id);
            return Result_1.Result.ok(reaction);
        }
    }
}
exports.Reaction = Reaction;
//# sourceMappingURL=reaction.js.map