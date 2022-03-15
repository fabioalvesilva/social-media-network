import { Mapper } from "../core/infra/Mapper";

import { Document, Model } from 'mongoose';
import { ICommentPersistence } from '../dataschema/ICommentPersistence';

import ICommentDTO from "../dto/ICommentDTO";
import { Comment } from "../domain/comment";

import { UniqueEntityID } from "../core/domain/UniqueEntityID";

export class CommentMap extends Mapper<Comment> {
  
  public static toDTO( comment: Comment): ICommentDTO {
    return {
      id: comment.id.toString(),
      text: comment.text,
      date: comment.date,
      postId: comment.postId,
        userId: comment.userId,
        author: comment.author
    } as ICommentDTO;
  }

  public static toDomain (comment: any | Model<ICommentPersistence & Document> ): Comment {
    const commentOrError = Comment.create(
      comment,
      new UniqueEntityID(comment.domainId)
    );

    commentOrError.isFailure ? console.log(commentOrError.error) : '';

    return commentOrError.isSuccess ? commentOrError.getValue() : null;
  }

  public static toPersistence (comment: Comment): any {
    return {
      domainId: comment.id.toString(),
      text: comment.text,
      date: comment.date,
      postId: comment.postId,
        userId: comment.userId,
        author: comment.author
    }
  }
}