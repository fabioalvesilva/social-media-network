import { Router, Request, Response, NextFunction } from 'express';
import { Container } from 'typedi';
import config from "../../../config";
import winston = require('winston');
import IRelationStrengthController from '../../controllers/IControllers/IRelationStrengthController';

const route = Router();

export default (app: Router) => {
    app.use('/relationStrength', route);

    const controller = Container.get(config.controllers.relationStrength.name) as IRelationStrengthController;

    route.get('', (req, res, next) => controller.getMe(req, res, next));

};
