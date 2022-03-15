"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostId = void 0;
const Entity_1 = require("../core/domain/Entity");
const UniqueEntityID_1 = require("../core/domain/UniqueEntityID");
const Result_1 = require("../core/logic/Result");
class PostId extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    constructor(id) {
        super(null, id);
    }
    static create(id) {
        let uId = new UniqueEntityID_1.UniqueEntityID(id);
        if (uId == null) {
            return Result_1.Result.fail("PostId creation failed");
        }
        else {
            return Result_1.Result.ok(new PostId(uId));
        }
    }
}
exports.PostId = PostId;
//# sourceMappingURL=postId.js.map