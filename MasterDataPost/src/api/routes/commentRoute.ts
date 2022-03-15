import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import config from "../../../config";
import { celebrate, Joi } from 'celebrate';
import winston = require('winston');
import ICommentController from '../../controllers/IControllers/ICommentController'; 

const route = Router();

export default (app: Router) => {
  app.use('/comments', route);

  const comment_controller = Container.get(config.controllers.comment.name) as ICommentController;

  //Add new comment
  route.post('',
    celebrate({
      body: Joi.object({
        text: Joi.string().required(),
        date: Joi.string().required(),
        postId: Joi.string().required(),
        userId: Joi.string().required(),
        author: Joi.string().required()
      })
    }),
    (req, res, next) => comment_controller.createComment(req, res, next) );

  //Update comment
  route.put('',
    celebrate({
      body: Joi.object({
        id: Joi.string().required(),
        text: Joi.string().required(),
        date: Joi.string().required(),
        postId: Joi.string().required(),
        userId: Joi.string().required(),
        author: Joi.string().required()
      }),
    }),
    (req, res, next) => comment_controller.updateComment(req, res, next) );
  
  //Get All comments
  route.get('',(req, res, next) => comment_controller.getMe(req,res,next));

  //Get comment
  route.get('/comment',(req, res, next) => comment_controller.getMe(req,res,next));

  //Get comment by post
  route.get('/byPost',(req, res, next) => comment_controller.commentsByPost(req,res,next));
};
