"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
const mongoose_1 = __importDefault(require("./mongoose"));
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("../../config"));
exports.default = async ({ expressApp }) => {
    const mongoConnection = await (0, mongoose_1.default)();
    logger_1.default.info('✌️ DB loaded and connected!');
    const userSchema = {
        // compare with the approach followed in repos and services
        name: 'userSchema',
        schema: '../persistence/schemas/userSchema',
    };
    const roleSchema = {
        // compare with the approach followed in repos and services
        name: 'roleSchema',
        schema: '../persistence/schemas/roleSchema',
    };
    const postSchema = {
        // compare with the approach followed in repos and services
        name: 'postSchema',
        schema: '../persistence/schemas/postSchema',
    };
    const commentSchema = {
        // compare with the approach followed in repos and services
        name: 'commentSchema',
        schema: '../persistence/schemas/commentSchema',
    };
    const reactionSchema = {
        // compare with the approach followed in repos and services
        name: 'reactionSchema',
        schema: '../persistence/schemas/reactionSchema',
    };
    const roleController = {
        name: config_1.default.controllers.role.name,
        path: config_1.default.controllers.role.path
    };
    const postController = {
        name: config_1.default.controllers.post.name,
        path: config_1.default.controllers.post.path
    };
    const commentController = {
        name: config_1.default.controllers.comment.name,
        path: config_1.default.controllers.comment.path
    };
    const reactionController = {
        name: config_1.default.controllers.reaction.name,
        path: config_1.default.controllers.reaction.path
    };
    const relationStrengthController = {
        name: config_1.default.controllers.relationStrength.name,
        path: config_1.default.controllers.relationStrength.path
    };
    const roleRepo = {
        name: config_1.default.repos.role.name,
        path: config_1.default.repos.role.path
    };
    const reactionRepo = {
        name: config_1.default.repos.reaction.name,
        path: config_1.default.repos.reaction.path
    };
    const postRepo = {
        name: config_1.default.repos.post.name,
        path: config_1.default.repos.post.path
    };
    const commentRepo = {
        name: config_1.default.repos.comment.name,
        path: config_1.default.repos.comment.path
    };
    const userRepo = {
        name: config_1.default.repos.user.name,
        path: config_1.default.repos.user.path
    };
    const roleService = {
        name: config_1.default.services.role.name,
        path: config_1.default.services.role.path
    };
    const relationStrengthService = {
        name: config_1.default.services.relationStrength.name,
        path: config_1.default.services.relationStrength.path
    };
    const postService = {
        name: config_1.default.services.post.name,
        path: config_1.default.services.post.path
    };
    const commentService = {
        name: config_1.default.services.comment.name,
        path: config_1.default.services.comment.path
    };
    const reactionService = {
        name: config_1.default.services.reaction.name,
        path: config_1.default.services.reaction.path
    };
    await (0, dependencyInjector_1.default)({
        mongoConnection,
        schemas: [
            userSchema,
            roleSchema,
            postSchema,
            commentSchema,
            reactionSchema
        ],
        controllers: [
            roleController,
            postController,
            commentController,
            reactionController,
            relationStrengthController
        ],
        repos: [
            roleRepo,
            userRepo,
            postRepo,
            commentRepo,
            reactionRepo
        ],
        services: [
            roleService,
            postService,
            commentService,
            reactionService,
            relationStrengthService
        ]
    });
    logger_1.default.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');
    await (0, express_1.default)({ app: expressApp });
    logger_1.default.info('✌️ Express loaded');
};
//# sourceMappingURL=index.js.map