import { ICommentPersistence } from '../../dataschema/ICommentPersistence';
import mongoose from 'mongoose';

const Comment = new mongoose.Schema(
  {
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
  },
  { timestamps: true },
);

export default mongoose.model<ICommentPersistence & mongoose.Document>('Comment', Comment);
