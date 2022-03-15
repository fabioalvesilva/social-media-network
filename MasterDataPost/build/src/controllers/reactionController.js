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
const config_1 = __importDefault(require("../../config"));
let ReactionController = class ReactionController {
    constructor(reactionServiceInstance) {
        this.reactionServiceInstance = reactionServiceInstance;
    }
    async createReaction(req, res, next) {
        try {
            const reactionOrError = await this.reactionServiceInstance.createReaction(req.body);
            if (reactionOrError.isFailure) {
                return res.status(402).send();
            }
            const reactionDTO = reactionOrError.getValue();
            return res.json(reactionDTO).status(201);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async updateReaction(req, res, next) {
        try {
            const reactionOrError = await this.reactionServiceInstance.updateReaction(req.body);
            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }
            const postDTO = reactionOrError.getValue();
            return res.status(201).json(postDTO);
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async getMe(req, res, next) {
        try {
            const reactionOrError = await this.reactionServiceInstance.getAll();
            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }
            return res.status(201).json(reactionOrError.getValue());
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async totalLikes(req, res, next) {
        try {
            const reactionOrError = await this.reactionServiceInstance.likes(req.query.oId.toString());
            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }
            return res.status(201).json(reactionOrError.getValue());
        }
        catch (e) {
            return next(e);
        }
    }
    ;
    async totalDislikes(req, res, next) {
        try {
            const reactionOrError = await this.reactionServiceInstance.dislikes(req.query.oId.toString());
            if (reactionOrError.isFailure) {
                return res.status(404).send();
            }
            return res.status(201).json(reactionOrError.getValue());
        }
        catch (e) {
            return next(e);
        }
    }
    ;
};
ReactionController = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.services.reaction.name)),
    __metadata("design:paramtypes", [Object])
], ReactionController);
exports.default = ReactionController;
//# sourceMappingURL=reactionController.js.map