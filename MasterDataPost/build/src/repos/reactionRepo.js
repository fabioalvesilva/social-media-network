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
const Result_1 = require("../core/logic/Result");
const mongoose_1 = require("mongoose");
const reactionId_1 = require("../domain/reactionId");
const ReactionMap_1 = require("../mappers/ReactionMap");
const PostMap_1 = require("../mappers/PostMap");
let ReactionRepo = class ReactionRepo {
    constructor(reactionSchema, postSchema) {
        this.reactionSchema = reactionSchema;
        this.postSchema = postSchema;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async exists(reaction) {
        const idX = reaction.id instanceof reactionId_1.ReactionId ? reaction.id.toValue() : reaction.id;
        const query = { domainId: idX };
        const commentDocument = await this.reactionSchema.findOne(query);
        return !!commentDocument === true;
    }
    async save(reaction) {
        const query = { domainId: reaction.id.toString() };
        const reactionDocument = await this.reactionSchema.findOne(query);
        try {
            if (reactionDocument === null) {
                const rawComment = ReactionMap_1.ReactionMap.toPersistence(reaction);
                const reactionCreated = await this.reactionSchema.create(rawComment);
                return ReactionMap_1.ReactionMap.toDomain(reactionCreated);
            }
            else {
                reactionDocument.date = reaction.date;
                reactionDocument.reaction = reaction.reaction;
                await reactionDocument.save();
                return reaction;
            }
        }
        catch (err) {
            throw err;
        }
    }
    async findAll() {
        let document = [];
        document = await this.reactionSchema.find().sort({ date: 1 });
        var posts = [];
        for (var i = 0; i < document.length; i++) {
            posts.push(ReactionMap_1.ReactionMap.toDTO(document[i]));
        }
        if (document === null) {
            return Result_1.Result.fail('No Posts found!');
        }
        else {
            return Result_1.Result.ok(posts);
        }
    }
    async findByDomainId(reactionId) {
        const query = { domainId: reactionId };
        const reactionRecord = await this.reactionSchema.findOne(query);
        if (reactionRecord != null) {
            return ReactionMap_1.ReactionMap.toDomain(reactionRecord);
        }
        else
            return null;
    }
    async findByCompoundId(uId, oType, oId) {
        const query = { userId: uId, objectType: oType, objectId: oId };
        const reactionRecord = await this.reactionSchema.findOne(query);
        if (reactionRecord != null) {
            return ReactionMap_1.ReactionMap.toDomain(reactionRecord);
        }
        else
            return null;
    }
    async findCommentsByPost(postId) {
        const query = { postId: postId };
        let document = [];
        document = await this.reactionSchema.find(query).sort({ date: -1 });
        var reactions = [];
        for (var i = 0; i < document.length; i++) {
            reactions.push(ReactionMap_1.ReactionMap.toDTO(document[i]));
        }
        if (document === null) {
            return Result_1.Result.fail('No comments found!');
        }
        else {
            return Result_1.Result.ok(reactions);
        }
    }
    async totalLikes(oId) {
        let count = await this.reactionSchema.countDocuments({ reaction: 1, objectId: oId });
        if (count === null) {
            return Result_1.Result.fail('No reactions found!');
        }
        else {
            return Result_1.Result.ok(count);
        }
    }
    async totalDislikes(oId) {
        let count = await this.reactionSchema.countDocuments({ reaction: -1, objectId: oId });
        if (count === null) {
            return Result_1.Result.fail('No reactions found!');
        }
        else {
            return Result_1.Result.ok(count);
        }
    }
    async calcRelationStrength(userFrom, userTo) {
        let relationStrength = 0;
        let postsDocs = [];
        postsDocs = await this.postSchema.find({ userId: userFrom });
        let reactionsDocs = [];
        reactionsDocs = await this.reactionSchema.find({ userId: userTo });
        var postsDTO = [];
        var reactionsDTO = [];
        postsDocs.forEach(p => {
            postsDTO.push(PostMap_1.PostMap.toDTO(p));
        });
        reactionsDocs.forEach(r => {
            reactionsDTO.push(ReactionMap_1.ReactionMap.toDTO(r));
        });
        postsDTO.forEach(p => {
            reactionsDTO.forEach(r => {
                if (p.id == r.objectId) {
                    relationStrength = relationStrength + r.reaction;
                }
            });
        });
        return Result_1.Result.ok(relationStrength);
    }
};
ReactionRepo = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)('reactionSchema')),
    __param(1, (0, typedi_1.Inject)('postSchema')),
    __metadata("design:paramtypes", [mongoose_1.Model,
        mongoose_1.Model])
], ReactionRepo);
exports.default = ReactionRepo;
//# sourceMappingURL=reactionRepo.js.map