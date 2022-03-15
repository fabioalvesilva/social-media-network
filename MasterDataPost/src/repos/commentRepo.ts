import { Service, Inject } from 'typedi';
import ICommentRepo from "../services/IRepos/ICommentRepo";
import { Comment } from "../domain/comment";
import { CommentId } from "../domain/commentId";
import { CommentMap } from "../mappers/CommentMap";
import { Result } from '../core/logic/Result';
import { Document, FilterQuery, Model } from 'mongoose';
import { ICommentPersistence } from '../dataschema/ICommentPersistence';
import ICommentDTO from '../dto/ICommentDTO';

@Service()
export default class CommentRepo implements ICommentRepo {
  private models: any;

  constructor(
    @Inject('commentSchema') private commentSchema : Model<ICommentPersistence & Document>,
  ) {}

  private createBaseQuery (): any {
    return {
      where: {},
    }
  }

  public async exists(comment: Comment): Promise<boolean> {
    
    const idX = comment.id instanceof CommentId ? (<CommentId>comment).id.toValue() : comment.id;

    const query = { domainId: idX}; 
    const commentDocument = await this.commentSchema.findOne( query as FilterQuery<ICommentPersistence & Document>);

    return !!commentDocument === true;
  }

  public async save (comment: Comment): Promise<Comment> {
    const query = { domainId: comment.id.toString()}; 

    const commentDocument = await this.commentSchema.findOne( query );

    try {
      if (commentDocument === null ) {
        const rawComment: any = CommentMap.toPersistence(comment);

        const commentCreated = await this.commentSchema.create(rawComment);

        return CommentMap.toDomain(commentCreated);
      } else {
        commentDocument.text = comment.text;
        await commentDocument.save();

        return comment;
      }
    } catch (err) {
      throw err;
    }
  }

  public async findByDomainId (commentId: CommentId | string): Promise<Comment> {
    const query = { domainId: commentId};
    const commentRecord = await this.commentSchema.findOne( query as FilterQuery<ICommentPersistence & Document> );

    if( commentRecord != null) {
      return CommentMap.toDomain(commentRecord);
    }
    else
      return null;
  }

  public async findAll (): Promise<Result<ICommentDTO[]>> {

    let document = []
    document = await this.commentSchema.find().sort({ date: -1 });
    var comments=[];

    for(var i=0;i<document.length;i++){
        comments.push(CommentMap.toDTO(document[i]));
    }

    if(document === null) {
        return Result.fail<Array<ICommentDTO>>('No comments found!');
    } else {
       return Result.ok<Array<ICommentDTO>>(comments);
    }
  }

  public async findCommentsByPost (postId: string): Promise<Result<ICommentDTO[]>> {

      const query = { postId: postId };
      let document = []
      document = await this.commentSchema.find(query as FilterQuery<ICommentPersistence & Document>).sort({ date: -1 });

        var comments=[];

      for (var i = 0; i < document.length; i++){
            comments.push(CommentMap.toDTO(document[i]));
        }

        if(document === null) {
            return Result.fail<Array<ICommentDTO>>('No comments found!');
        } else {
           return Result.ok<Array<ICommentDTO>>(comments);
        } 
  }
}