"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentMap = void 0;
const Mapper_1 = require("../core/infra/Mapper");
const comment_1 = require("../domain/comment");
const UniqueEntityID_1 = require("../core/domain/UniqueEntityID");
class CommentMap extends Mapper_1.Mapper {
    static toDTO(comment) {
        return {
            id: comment.id.toString(),
            text: comment.text,
            date: comment.date,
            postId: comment.postId,
            userId: comment.userId,
            author: comment.author
        };
    }
    static toDomain(comment) {
        const commentOrError = comment_1.Comment.create(comment, new UniqueEntityID_1.UniqueEntityID(comment.domainId));
        commentOrError.isFailure ? console.log(commentOrError.error) : '';
        return commentOrError.isSuccess ? commentOrError.getValue() : null;
    }
    static toPersistence(comment) {
        return {
            domainId: comment.id.toString(),
            text: comment.text,
            date: comment.date,
            postId: comment.postId,
            userId: comment.userId,
            author: comment.author
        };
    }
}
exports.CommentMap = CommentMap;
//# sourceMappingURL=CommentMap.js.map