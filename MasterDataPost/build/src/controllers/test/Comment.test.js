"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sinon = __importStar(require("sinon"));
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../../config"));
const Result_1 = require("../../core/logic/Result");
const commentController_1 = __importDefault(require("../commentController"));
const UniqueEntityID_1 = require("../../core/domain/UniqueEntityID");
require("reflect-metadata");
describe('Comment Controller', function () {
    beforeEach(function () {
        const comments = [];
        let comment1 = ({
            id: new UniqueEntityID_1.UniqueEntityID(1234).toString(),
            text: "Comment One",
            date: "1950-01-01",
            postId: "0000-0000-0000-0000",
            userId: "0000-0000-0000-0000",
            author: "Author test"
        });
        let comment2 = ({
            id: new UniqueEntityID_1.UniqueEntityID(4321).toString(),
            text: "Comment One",
            date: "1950-01-01",
            postId: "0000-0000-0000-0000",
            userId: "0000-0000-0000-0000",
            author: "Author test"
        });
        comments.push(comment1, comment2);
    });
    afterEach(function () {
        sinon.restore();
    });
    it('getComments: returns json with all comments', async function () {
        let req = {};
        let res = {
            json: sinon.stub()
        };
        let next = () => { };
        let commentServiceClass = require("../" + config_1.default.services.comment.path).default;
        let commentServiceInstance = typedi_1.Container.get(commentServiceClass);
        typedi_1.Container.set(config_1.default.services.comment.name, commentServiceInstance);
        commentServiceInstance = typedi_1.Container.get(config_1.default.services.comment.name);
        sinon.stub(commentServiceInstance, "getAll").resolves(Result_1.Result.ok(this.comments));
        const ctrl = new commentController_1.default(commentServiceInstance);
        await ctrl.getMe(req, res, next);
        sinon.assert.calledOnce(res.json);
        sinon.assert.calledWith(res.json, sinon.match(this.comments));
    });
});
//# sourceMappingURL=Comment.test.js.map