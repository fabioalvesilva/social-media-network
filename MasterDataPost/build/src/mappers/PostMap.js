"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostMap = void 0;
const Mapper_1 = require("../core/infra/Mapper");
const post_1 = require("../domain/post");
const UniqueEntityID_1 = require("../core/domain/UniqueEntityID");
class PostMap extends Mapper_1.Mapper {
    static toDTO(post) {
        return {
            id: post.id.toString(),
            text: post.text,
            date: post.date,
            userId: post.userId,
            author: post.author
        };
    }
    static toDomain(post) {
        const postOrError = post_1.Post.create(post, new UniqueEntityID_1.UniqueEntityID(post.domainId));
        postOrError.isFailure ? console.log(postOrError.error) : '';
        return postOrError.isSuccess ? postOrError.getValue() : null;
    }
    static toPersistence(post) {
        return {
            domainId: post.id.toString(),
            text: post.text,
            date: post.date,
            userId: post.userId,
            author: post.author
        };
    }
}
exports.PostMap = PostMap;
//# sourceMappingURL=PostMap.js.map