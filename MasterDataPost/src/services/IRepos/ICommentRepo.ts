import { Repo } from "../../core/infra/Repo";
import { Result } from "../../core/logic/Result";
import { Comment } from "../../domain/comment";
import { CommentId } from "../../domain/commentId";
import  ICommentDTO  from "../../dto/ICommentDTO";

export default interface ICommentRepo extends Repo<Comment> {
  save(comment: Comment): Promise<Comment>;
  findByDomainId (commentId: CommentId | string): Promise<Comment>;
  findCommentsByPost (postId: string): Promise<Result<Array<ICommentDTO>>>;
  findAll (): Promise<Result<Array<ICommentDTO>>>;
  exists(comment: Comment): Promise<boolean>;
  //findByIds (rolesIds: RoleId[]): Promise<Role[]>;
  //saveCollection (roles: Role[]): Promise<Role[]>;
  //removeByRoleIds (roles: RoleId[]): Promise<any>
}