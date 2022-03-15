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
    app.use('/comments', route);
    const comment_controller = typedi_1.Container.get(config_1.default.controllers.comment.name);
    //Add new comment
    route.post('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            text: celebrate_1.Joi.string().required(),
            date: celebrate_1.Joi.string().required(),
            postId: celebrate_1.Joi.string().required(),
            userId: celebrate_1.Joi.string().required(),
            author: celebrate_1.Joi.string().required()
        })
    }), (req, res, next) => comment_controller.createComment(req, res, next));
    //Update comment
    route.put('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            id: celebrate_1.Joi.string().required(),
            text: celebrate_1.Joi.string().required(),
            date: celebrate_1.Joi.string().required(),
            postId: celebrate_1.Joi.string().required(),
            userId: celebrate_1.Joi.string().required(),
            author: celebrate_1.Joi.string().required()
        }),
    }), (req, res, next) => comment_controller.updateComment(req, res, next));
    //Get All comments
    route.get('', (req, res, next) => comment_controller.getMe(req, res, next));
    //Get comment
    route.get('/comment', (req, res, next) => comment_controller.getMe(req, res, next));
    //Get comment by post
    route.get('/byPost', (req, res, next) => comment_controller.commentsByPost(req, res, next));
};
//# sourceMappingURL=commentRoute.js.map