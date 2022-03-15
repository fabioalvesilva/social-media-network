import { IPostPersistence } from '../../dataschema/IPostPersistence';
import mongoose from 'mongoose';

const Post = new mongoose.Schema(
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

export default mongoose.model<IPostPersistence & mongoose.Document>('Post', Post);
