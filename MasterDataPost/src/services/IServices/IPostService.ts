import { Result } from "../../core/logic/Result";
import  IPostDTO  from "../../dto/IPostDTO";

export default interface IPostService  {
  createPost(postDTO: IPostDTO): Promise<Result<IPostDTO>>;
  updatePost(postDTO: IPostDTO): Promise<Result<IPostDTO>>;
    getAll(): Promise<Result<Array<IPostDTO>>>;
    getPostsByUser(userId: string): Promise<Result<IPostDTO[]>>;
    getPost(postId: string): Promise<Result<IPostDTO>>;
}
