import { Service, Inject } from 'typedi';
import ICommentService from '../services/IServices/ICommentService';
import { CommentMap } from "../mappers/CommentMap";
import ICommentDTO from '../dto/ICommentDTO';
import ICommentRepo from './IRepos/ICommentRepo';
import { Comment } from '../domain/comment';
import { Result } from "../core/logic/Result";
import config from "../../config";

@Service()
export default class CommentService implements ICommentService{

  constructor(
      @Inject(config.repos.comment.name) private commentRepo : ICommentRepo
  ) {}

  public async createComment(commentDTO: ICommentDTO): Promise<Result<ICommentDTO>> {

      try {

          const commentOrError = await Comment.create( commentDTO );

          if (commentOrError.isFailure) {
            return Result.fail<ICommentDTO>(commentOrError.errorValue());
          }

          const commentResult = commentOrError.getValue();

          await this.commentRepo.save(commentResult);

          const commentDTOResult = CommentMap.toDTO( commentResult ) as ICommentDTO;
          return Result.ok<ICommentDTO>( commentDTOResult )
        } catch (e) {
          throw e;
        }
  }

  public async updateComment(commentDTO: ICommentDTO): Promise<Result<ICommentDTO>> {

    try {
      const comment = await this.commentRepo.findByDomainId(commentDTO.id);

      if (comment === null) {
        return Result.fail<ICommentDTO>("Comment not found");
      }
      else {
        comment.text = commentDTO.text;
        await this.commentRepo.save(comment);

        const commentDTOResult =CommentMap.toDTO( comment ) as ICommentDTO;
        return Result.ok<ICommentDTO>( commentDTOResult )
        }
    } catch (e) {
      throw e;
    }

  }

  public async getAll(): Promise<Result<ICommentDTO[]>> {


     try{
        const comments = (await this.commentRepo.findAll()).getValue();

          if (comments === null) {
            return Result.fail<ICommentDTO[]>("There's no comments available'");
          }
          else {
            return Result.ok<Array<ICommentDTO>>(comments);
          }
    } catch (e) {
        throw e;
    }
  }

    public async getComment(commentId: string): Promise<Result<ICommentDTO>> {
    try {
      const comment = await this.commentRepo.findByDomainId(commentId);

      if (comment === null) {
        return Result.fail<ICommentDTO>("Comment not found");
      }
      else {
        const commentDTOResult = CommentMap.toDTO( comment ) as ICommentDTO;
        return Result.ok<ICommentDTO>( commentDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }

  public async getCommentsByPost(postId: string): Promise<Result<ICommentDTO[]>> {


     try{
        const comments = await (await this.commentRepo.findCommentsByPost(postId)).getValue();

          if (comments === null) {
            return Result.fail<ICommentDTO[]>("There's no comments available'");
          }
          else {
            return Result.ok<Array<ICommentDTO>>(comments);
          }
    } catch (e) {
        throw e;
    }
  }


}
