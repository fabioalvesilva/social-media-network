"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = void 0;
const AggregateRoot_1 = require("../core/domain/AggregateRoot");
const Result_1 = require("../core/logic/Result");
const userId_1 = require("./userId");
const postId_1 = require("./postId");
class Post extends AggregateRoot_1.AggregateRoot {
    get id() {
        return this._id;
    }
    get postId() {
        return postId_1.PostId.caller(this.id);
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
        if (!!dto.author === null || dto.text === null) {
            return Result_1.Result.fail('Must insert some information in the post');
        }
        else {
            let uId = userId_1.UserId.create(dto.userId).getValue();
            const post = new Post({
                text: dto.text,
                date: dto.date,
                userId: dto.userId,
                author: dto.author
            }, id);
            return Result_1.Result.ok(post);
        }
    }
}
exports.Post = Post;
//# sourceMappingURL=post.js.map