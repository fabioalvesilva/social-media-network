"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Comment = new mongoose_1.default.Schema({
    domainId: {
        type: String,
        unique: true
    },
    text: {
        type: String,
        required: [true, 'Please enter text to your post'],
        index: true,
    },
    date: {
        type: String,
        required: [true, 'Date is missing'],
        index: true,
    },
    postId: {
        type: String,
        required: [true, 'PostId is missing'],
        index: true,
    },
    userId: {
        type: String,
        required: [true, 'UserId is missing'],
        index: true,
    },
    author: {
        type: String,
        required: [true, 'Author is missing'],
        index: true,
    },
}, { timestamps: true });
exports.default = mongoose_1.default.model('Comment', Comment);
//# sourceMappingURL=commentSchema.js.map