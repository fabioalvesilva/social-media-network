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
const Result_1 = require("../core/logic/Result");
const config_1 = __importDefault(require("../../config"));
const reaction_1 = require("../domain/reaction");
const ReactionMap_1 = require("../mappers/ReactionMap");
let ReactionService = class ReactionService {
    constructor(reactionRepo, postRepo) {
        this.reactionRepo = reactionRepo;
        this.postRepo = postRepo;
    }
    async createReaction(reactionDTO) {
        try {
            const reaction = await this.reactionRepo.findByCompoundId(reactionDTO.userId, reactionDTO.objectType, reactionDTO.objectId);
            if (reaction != null) {
                return this.updateReaction(reactionDTO);
            }
            else {
                const reactionOrError = await reaction_1.Reaction.create(reactionDTO);
                if (reactionOrError.isFailure) {
                    return Result_1.Result.fail(reactionOrError.errorValue());
                }
                //Update � Relationship Strength
                let post = await this.postRepo.findById(reactionDTO.objectId);
                this.updateRelationStrenght(reactionDTO.userId, post.userId, reactionDTO.reaction);
                const reactionResult = reactionOrError.getValue();
                await this.reactionRepo.save(reactionResult);
                const reactionDTOResult = ReactionMap_1.ReactionMap.toDTO(reactionResult);
                return Result_1.Result.ok(reactionDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async updateReaction(reactionDTO) {
        try {
            const reaction = await this.reactionRepo.findByCompoundId(reactionDTO.userId, reactionDTO.objectType, reactionDTO.objectId);
            if (reaction === null) {
                return Result_1.Result.fail("Reaction not found");
            }
            else {
                reaction.reaction = reactionDTO.reaction;
                reaction.date = reactionDTO.date;
                await this.reactionRepo.save(reaction);
                const reactionDTOResult = ReactionMap_1.ReactionMap.toDTO(reaction);
                return Result_1.Result.ok(reactionDTOResult);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async getAll() {
        try {
            const reactions = (await this.reactionRepo.findAll()).getValue();
            if (reactions === null) {
                return Result_1.Result.fail("There's no reactions available'");
            }
            else {
                return Result_1.Result.ok(reactions);
            }
        }
        catch (e) {
            throw e;
        }
    }
    async likes(oId) {
        try {
            const reactions = await this.reactionRepo.totalLikes(oId);
            if (reactions === null) {
                return Result_1.Result.fail(reactions.getValue());
            }
            else {
                return Result_1.Result.ok(reactions.getValue());
            }
        }
        catch (e) {
            throw e;
        }
    }
    async dislikes(oId) {
        try {
            let reactions = await this.reactionRepo.totalDislikes(oId);
            if (reactions === null) {
                return Result_1.Result.fail(reactions.getValue());
            }
            else {
                return Result_1.Result.ok(reactions.getValue());
            }
        }
        catch (e) {
            throw e;
        }
    }
    async updateRelationStrenght(userFrom, userTo, reaction) {
        const https = require('https');
        const mdrs_url = 'localhost';
        let data = JSON.stringify({
            userFrom: userFrom,
            userTo: userTo,
            reaction: reaction
        });
        const options = {
            hostname: mdrs_url,
            path: '/mdrs/Relationships/relationStrength',
            port: 5001,
            rejectUnauthorized: false,
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Content-Length': data.length
            }
        };
        const req = https.request(options, res => {
            console.log(`statusCode: ${res.statusCode}`);
            res.on('data', (d) => {
                process.stdout.write(d);
            });
        });
        req.on('error', error => {
            console.error(error);
        });
        req.write(data);
        req.end();
    }
};
ReactionService = __decorate([
    (0, typedi_1.Service)(),
    __param(0, (0, typedi_1.Inject)(config_1.default.repos.reaction.name)),
    __param(1, (0, typedi_1.Inject)(config_1.default.repos.post.name)),
    __metadata("design:paramtypes", [Object, Object])
], ReactionService);
exports.default = ReactionService;
//# sourceMappingURL=reactionService.js.map