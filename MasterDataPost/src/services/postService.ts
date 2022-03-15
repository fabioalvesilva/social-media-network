import { Service, Inject } from 'typedi';
import { PostMap } from "../mappers/PostMap";
import IPostDTO from '../dto/IPostDTO';
import IPostRepo from './IRepos/IPostRepo';
import { Post } from '../domain/post';
import { Result } from "../core/logic/Result";
import config from "../../config";
import IPostService from '../services/IServices/IPostService';

@Service()
export default class PostService implements IPostService{

  constructor(
      @Inject(config.repos.post.name) private postRepo : IPostRepo
  ) {}

  public async createPost(postDTO: IPostDTO): Promise<Result<IPostDTO>> {

      try {
          const postOrError = await Post.create( postDTO );

          if (postOrError.isFailure) {
            return Result.fail<IPostDTO>(postOrError.errorValue());
          }

          const postResult = postOrError.getValue();

          await this.postRepo.save(postResult);

          const postDTOResult = PostMap.toDTO( postResult ) as IPostDTO;
          return Result.ok<IPostDTO>( postDTOResult )
        } catch (e) {
          throw e;
        }
  }

  public async updatePost(postDTO: IPostDTO): Promise<Result<IPostDTO>> {

    try {
      const post = await this.postRepo.findByDomainId(postDTO.id);

      if (post === null) {
        return Result.fail<IPostDTO>("Post not found");
      }
      else {
        post.text = postDTO.text;
        await this.postRepo.save(post);

        const postDTOResult =PostMap.toDTO( post ) as IPostDTO;
        return Result.ok<IPostDTO>( postDTOResult )
        }
    } catch (e) {
      throw e;
    }

  }

  public async getPost( postId: string): Promise<Result<IPostDTO>> {
    try {
      const post = await this.postRepo.findByDomainId(postId);

      if (post === null) {
        return Result.fail<IPostDTO>("Post not found");
      }
      else {
        const postDTOResult = PostMap.toDTO( post ) as IPostDTO;
        return Result.ok<IPostDTO>( postDTOResult )
        }
    } catch (e) {
      throw e;
    }
  }

  public async getAll(): Promise<Result<IPostDTO[]>> {

   try{
        const posts = (await this.postRepo.findAll()).getValue();

        if(posts === null){
            return Result.fail<IPostDTO[]>("There's no posts available'");
        }
        else{
            return Result.ok<IPostDTO[]>(posts);
        }
        
    } catch (e) {
        throw e;
    }
    }

    public async getPostsByUser(userId: string): Promise<Result<IPostDTO[]>> {

        try {
            const posts = await (await this.postRepo.findPostsByUser(userId)).getValue();

            if (posts === null) {
                return Result.fail<IPostDTO[]>("There's no comments available'");
            }
            else {
                return Result.ok<Array<IPostDTO>>(posts);
            }
        } catch (e) {
            throw e;
        }
    }


}
