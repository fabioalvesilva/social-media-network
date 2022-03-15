"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../../config"));
const route = (0, express_1.Router)();
exports.default = (app) => {
    app.use('/relationStrength', route);
    const controller = typedi_1.Container.get(config_1.default.controllers.relationStrength.name);
    route.get('', (req, res, next) => controller.getMe(req, res, next));
};
//# sourceMappingURL=relationStrengthRoute.js.map