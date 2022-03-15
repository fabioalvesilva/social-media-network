import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import config from "../../../config";
import { celebrate, Joi } from 'celebrate';
import winston = require('winston');
import IReactionController from '../../controllers/IControllers/IReactionController';

const route = Router();

export default (app: Router) => {
    app.use('/reaction', route);

    const reaction_controller = Container.get(config.controllers.reaction.name) as IReactionController;

    //Add new reaction
    route.post('',
        celebrate({
            body: Joi.object({
                reaction: Joi.number().required(),
                date: Joi.string().required(),
                userId: Joi.string().required(),
                objectId: Joi.string().required(),
                objectType: Joi.number().required()
            })
        }),
        (req, res, next) => reaction_controller.createReaction(req, res, next));

    //Update reaction
    route.put('',
        celebrate({
            body: Joi.object({
                id: Joi.string().required(),
                reaction: Joi.number().required(),
                date: Joi.string().required(),
                userId: Joi.string().required(),
                objectId: Joi.string().required(),
                objectType: Joi.number().required()
            }),
        }),
        (req, res, next) => reaction_controller.updateReaction(req, res, next));

    //Get reaction
    route.get('', (req, res, next) => reaction_controller.getMe(req, res, next));

    //Get post total likes
    route.get('/likes', (req, res, next) => reaction_controller.totalLikes(req, res, next));

    //Get post total dislikes
    route.get('/dislikes', (req, res, next) => reaction_controller.totalDislikes(req, res, next));

};
