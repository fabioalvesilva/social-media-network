import mongoose from 'mongoose';
import { IReactionPersistence } from '../../dataschema/IReactionPersistence';

const Reaction = new mongoose.Schema(
    {
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
    },
    { timestamps: true },
);

Reaction.index({ userId: 1, objectId: 1, objectType: 1 }, { unique: true });

export default mongoose.model<IReactionPersistence & mongoose.Document>('Reaction', Reaction);
