import { Repo } from "../../core/infra/Repo";
import { Result } from "../../core/logic/Result";
import { Post } from "../../domain/post";
import { PostId } from "../../domain/postId";
import IPostDTO from "../../dto/IPostDTO";

export default interface IPostRepo extends Repo<Post> {
  save(post: Post): Promise<Post>;
  findByDomainId (postId: PostId | string): Promise<Post>;
    findAll(): Promise<Result<IPostDTO[]>>;
    exists(post: Post): Promise<boolean>;
    findPostsByUser(userId: string): Promise<Result<IPostDTO[]>>;
    findById(postId: string): Promise<Post>;
}