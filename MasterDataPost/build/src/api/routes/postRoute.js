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
    app.use('/post', route);
    const post_controller = typedi_1.Container.get(config_1.default.controllers.post.name);
    //Add new post
    route.post('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            text: celebrate_1.Joi.string().required(),
            date: celebrate_1.Joi.string().required(),
            userId: celebrate_1.Joi.string().required(),
            author: celebrate_1.Joi.string().required()
        })
    }), (req, res, next) => post_controller.createPost(req, res, next));
    //Update post
    route.put('', (0, celebrate_1.celebrate)({
        body: celebrate_1.Joi.object({
            id: celebrate_1.Joi.string().required(),
            text: celebrate_1.Joi.string().required(),
            date: celebrate_1.Joi.string().required(),
            userId: celebrate_1.Joi.string().required(),
            author: celebrate_1.Joi.string().required()
        }),
    }), (req, res, next) => post_controller.updatePost(req, res, next));
    //Get post
    route.get('', (req, res, next) => post_controller.getMe(req, res, next));
    //Get posts by user
    route.get('/userPosts', (req, res, next) => post_controller.getPostsByUser(req, res, next));
};
//# sourceMappingURL=postRoute.js.map