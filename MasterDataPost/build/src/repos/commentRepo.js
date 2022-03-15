"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const commentId_1 = require("../domain/commentId");
const CommentMap_1 = require("../mappers/CommentMap");
const Result_1 = require("../core/logic/Result");
const mongoose_1 = require("mongoose");
let CommentRepo = class CommentRepo {
    constructor(commentSchema) {
        this.commentSchema = commentSchema;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async exists(comment) {
        const idX = comment.id instanceof commentId_1.CommentId ? comment.id.toValue() : comment.id;
        const query = { domainId: idX };
        const commentDocument = await this.commentSchema.findOne(query);
        return !!commentDocument === true;
    }
    async save(comment) {
        const query = { domainId: comment.id.toString() };
        const commentDocument = await this.commentSchema.findOne(query);
        try {
            if (commentDocument === null) {
                const rawComment = CommentMap_1.CommentMap.toPersistence(comment);
                const commentCreated = await this.commentSchema.create(rawComment);
                return CommentMap_1.CommentMap.toDomain(commentCreated);
            }
            else {
                commentDocument.text = comment.text;
                await commentDocument.save();
                return comment;
            }
        }
        catch (err) {
            throw err;
        }
    }
    async findByDomainId(commentId) {
        const query = { domainId: commentId };
        const commentRecord = await this.commentSchema.findOne(query);
        if (commentRecord != null) {
            return CommentMap_1.CommentMap.toDomain(commentRecord);
        }
        else
            return null;
    }
    async findAll() {
        let document = [];
        document = await this.commentSchema.find().sort({ date: -1 });
        var comments = [];
        for (var i = 0; i < document.length; i++) {
            comments.push(CommentMap_1.CommentMap.toDTO(document[i]));
        }
        if (document === null) {
            return Result_1.Result.fail('No comments found!');
        }
        else {
            return Result_1.Result.ok(comments);
        }
    }
    async findCommentsByPost(postId) {
        const query = { postId: postId };
        let document = [];
        document = await this.commentSchema.find(query).sort({ date: -1 });
        var comments = [];
        for (var i = 0; i < document.length; i++) {
            comments.push(CommentMap_1.CommentMap.toDTO(document[i]));
        }
        if (document === null) {
            return Result_1.Result.fail('No comments found!');
        }
        else {
            return Result_1.Result.ok(comments);
        }
    }
};
CommentRepo = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('commentSchema')),
    __metadata("design:paramtypes", [mongoose_1.Model])
], CommentRepo);
exports.default = CommentRepo;
//# sourceMappingURL=commentRepo.js.map