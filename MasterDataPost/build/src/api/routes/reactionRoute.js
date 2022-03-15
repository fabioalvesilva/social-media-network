"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../../config"));
const celebrate_1 = require("celebrate");
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/reaction', route);
    const reaction_controller = typedi_1.Container.get(config_1.default.controllers.reaction.name);
    //Add new reaction
    route.post('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            reaction: celebrate_1.Joi.number().required(),
            date: celebrate_1.Joi.string().required(),
            userId: celebrate_1.Joi.string().required(),
            objectId: celebrate_1.Joi.string().required(),
            objectType: celebrate_1.Joi.number().required()
        })
    }), (req, res, next) => reaction_controller.createReaction(req, res, next));
    //Update reaction
    route.put('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            id: celebrate_1.Joi.string().required(),
            reaction: celebrate_1.Joi.number().required(),
            date: celebrate_1.Joi.string().required(),
            userId: celebrate_1.Joi.string().required(),
            objectId: celebrate_1.Joi.string().required(),
            objectType: celebrate_1.Joi.number().required()
        }),
    }), (req, res, next) => reaction_controller.updateReaction(req, res, next));
    //Get reaction
    route.get('', (req, res, next) => reaction_controller.getMe(req, res, next));
    //Get post total likes
    route.get('/likes', (req, res, next) => reaction_controller.totalLikes(req, res, next));
    //Get post total dislikes
    route.get('/dislikes', (req, res, next) => reaction_controller.totalDislikes(req, res, next));
};
//# sourceMappingURL=reactionRoute.js.map