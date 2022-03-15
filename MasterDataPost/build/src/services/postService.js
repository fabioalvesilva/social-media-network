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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const PostMap_1 = require("../mappers/PostMap");
const post_1 = require("../domain/post");
const Result_1 = require("../core/logic/Result");
const config_1 = __importDefault(require("../../config"));
let PostService = class PostService {
    constructor(postRepo) {
        this.postRepo = postRepo;
    }
    async createPost(postDTO) {
        try {
            const postOrError = await post_1.Post.create(postDTO);
            if (postOrError.isFailure) {
                return Result_1.Result.fail(postOrError.errorValue());
            }
            const postResult = postOrError.getValue();
            await this.postRepo.save(postResult);
            const postDTOResult = PostMap_1.PostMap.toDTO(postResult);
            return Result_1.Result.ok(postDTOResult);
        }
        catch (e) {
            throw e;
        }
    }
    async updatePost(postDTO) {
        try {
            const post = await this.postRepo.findByDomainId(postDTO.id);
            if (post === null) {
                return Result_1.Result.fail("Post not found");
            }
            else {
                post.text = postDTO.text;
                await this.postRepo.save(post);
                const postDTOResult = PostMap_1.PostMap.toDTO(post);
                return Result_1.Result.ok(postDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getPost(postId) {
        try {
            const post = await this.postRepo.findByDomainId(postId);
            if (post === null) {
                return Result_1.Result.fail("Post not found");
            }
            else {
                const postDTOResult = PostMap_1.PostMap.toDTO(post);
                return Result_1.Result.ok(postDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getAll() {
        try {
            const posts = (await this.postRepo.findAll()).getValue();
            if (posts === null) {
                return Result_1.Result.fail("There's no posts available'");
            }
            else {
                return Result_1.Result.ok(posts);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getPostsByUser(userId) {
        try {
            const posts = await (await this.postRepo.findPostsByUser(userId)).getValue();
            if (posts === null) {
                return Result_1.Result.fail("There's no comments available'");
            }
            else {
                return Result_1.Result.ok(posts);
            }
        }
        catch (e) {
            throw e;
        }
    }
};
PostService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.repos.post.name)),
    __metadata("design:paramtypes", [Object])
], PostService);
exports.default = PostService;
//# sourceMappingURL=postService.js.map