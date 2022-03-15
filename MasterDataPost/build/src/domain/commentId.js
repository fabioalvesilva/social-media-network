"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentId = void 0;
const Entity_1 = require("../core/domain/Entity");
class CommentId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
}
exports.CommentId = CommentId;
//# sourceMappingURL=commentId.js.map