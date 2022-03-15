"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comment = void 0;
const Result_1 = require("../core/logic/Result");
const Entity_1 = require("../core/domain/Entity");
class Comment extends Entity_1.Entity {
    get id() {
        return this._id;
    }
    get text() {
        return this.props.text;
    }
    set text(value) {
        this.props.text = value;
    }
    get date() {
        return this.props.date;
    }
    get postId() {
        return this.props.postId;
    }
    get userId() {
        return this.props.userId;
    }
    get author() {
        return this.props.author;
    }
    constructor(props, id) {
        super(props, id);
    }
    static create(dto, id) {
        if (dto.author == null || dto.text == null || dto.postId == null) {
            return Result_1.Result.fail("Some information in the comment is missing");
        }
        else {
            const comment = new Comment({
                text: dto.text,
                date: dto.date,
                postId: dto.postId,
                userId: dto.userId,
                author: dto.author
            }, id);
            return Result_1.Result.ok(comment);
        }
    }
}
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map