import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import config from "../../../config";
import { celebrate, Joi } from 'celebrate';
import winston = require('winston');
import IPostController from '../../controllers/IControllers/IPostController'; 

const route = Router();

export default (app: Router) => {
  app.use('/post', route);

  const post_controller = Container.get(config.controllers.post.name) as IPostController;

  //Add new post
  route.post('',
    celebrate({
      body: Joi.object({
        text: Joi.string().required(),
        date: Joi.string().required(),
        userId: Joi.string().required(),
        author: Joi.string().required()
      })
    }),
    (req, res, next) => post_controller.createPost(req, res, next) );

  //Update post
  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        text: Joi.string().required(),
        date: Joi.string().required(),
        userId: Joi.string().required(),
        author: Joi.string().required()
      }),
    }),
    (req, res, next) => post_controller.updatePost(req, res, next) );
  
  //Get post
    route.get('', (req, res, next) => post_controller.getMe(req, res, next));

  //Get posts by user
    route.get('/userPosts', (req, res, next) => post_controller.getPostsByUser(req, res, next));
};
