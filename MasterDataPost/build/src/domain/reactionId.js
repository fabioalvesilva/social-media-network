"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReactionId = void 0;
const Entity_1 = require("../core/domain/Entity");
class ReactionId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
}
exports.ReactionId = ReactionId;
//# sourceMappingURL=reactionId.js.map