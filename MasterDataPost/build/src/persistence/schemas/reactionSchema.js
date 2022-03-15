"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Reaction = new mongoose_1.default.Schema({
    domainId: {
        type: String,
        unique: true
    },
    reaction: {
        type: Number,
        required: [true, 'Please enter a reaction']
    },
    date: {
        type: String,
        required: [true, 'Date is missing']
    },
    userId: {
        type: String,
        required: [true, 'UserId is missing']
    },
    objectId: {
        type: String,
        required: [true, 'Post or Comment Id is missing']
    },
    objectType: {
        type: Number,
        required: [true, 'Type of object is missing']
    },
}, { timestamps: true });
Reaction.index({ userId: 1, objectId: 1, objectType: 1 }, { unique: true });
exports.default = mongoose_1.default.model('Reaction', Reaction);
//# sourceMappingURL=reactionSchema.js.map