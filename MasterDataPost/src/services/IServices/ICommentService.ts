import { Result } from "../../core/logic/Result";
import ICommentDTO from "../../dto/ICommentDTO";

export default interface ICommentService  {
  createComment(commentDTO: ICommentDTO): Promise<Result<ICommentDTO>>;
  updateComment(commentDTO: ICommentDTO): Promise<Result<ICommentDTO>>;
  getAll(): Promise<Result<Array<ICommentDTO>>>;
  getCommentsByPost(postId: string): Promise<Result<ICommentDTO[]>>
  getComment(commentId: string): Promise<Result<ICommentDTO>>
}

