"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userRoute_1 = __importDefault(require("./routes/userRoute"));
const userRoute_2 = __importDefault(require("./routes/userRoute"));
const roleRoute_1 = __importDefault(require("./routes/roleRoute"));
const postRoute_1 = __importDefault(require("./routes/postRoute"));
const commentRoute_1 = __importDefault(require("./routes/commentRoute"));
const reactionRoute_1 = __importDefault(require("./routes/reactionRoute"));
const relationStrengthRoute_1 = __importDefault(require("./routes/relationStrengthRoute"));
exports.default = () => {
    const app = (0, express_1.Router)();
    (0, userRoute_1.default)(app);
    (0, userRoute_2.default)(app);
    (0, roleRoute_1.default)(app);
    (0, postRoute_1.default)(app);
    (0, commentRoute_1.default)(app);
    (0, reactionRoute_1.default)(app);
    (0, relationStrengthRoute_1.default)(app);
    return app;
};
//# sourceMappingURL=index.js.map