import { Service, Inject } from 'typedi';

import IPostRepo from "../services/IRepos/IPostRepo";
import { Post } from "../domain/post";
import { PostId } from "../domain/postId";
import { PostMap } from "../mappers/PostMap";
import { Result } from '../core/logic/Result';
import { Document, FilterQuery, Model } from 'mongoose';
import { IPostPersistence } from '../dataschema/IPostPersistence';
import IPostDTO  from '../dto/IPostDTO';

@Service()
export default class PostRepo implements IPostRepo {
  private models: any;

  constructor(
    @Inject('postSchema') private postSchema : Model<IPostPersistence & Document>,
  ) {}

  private createBaseQuery (): any {
    return {
      where: {},
    }
  }

  public async exists(post: Post): Promise<boolean> {
    
    const idX = post.id instanceof PostId ? (<PostId>post).id.toValue() : post.id;

    const query = { domainId: idX}; 
    const postDocument = await this.postSchema.findOne( query as FilterQuery<IPostPersistence & Document>);

    return !!postDocument === true;
  }

  public async save (post: Post): Promise<Post> {
    const query = { domainId: post.id.toString()}; 

    const postDocument = await this.postSchema.findOne( query );

    try {
      if (postDocument === null ) {
        const rawPost: any = PostMap.toPersistence(post);

        const postCreated = await this.postSchema.create(rawPost);

        return PostMap.toDomain(postCreated);
      } else {
        postDocument.text = post.text;
        await postDocument.save();

        return post;
      }
    } catch (err) {
      throw err;
    }
    }

    public async findById(postId:string): Promise<Post> {
        const query = { _id: postId };
        const postRecord = await this.postSchema.findOne(query as FilterQuery<IPostPersistence & Document>);

        if (postRecord != null) {
            return PostMap.toDomain(postRecord);
        }
        else
            return null;
    }

  public async findByDomainId (postId: PostId | string): Promise<Post> {
    const query = { domainId: postId};
    const postRecord = await this.postSchema.findOne( query as FilterQuery<IPostPersistence & Document> );

    if( postRecord != null) {
      return PostMap.toDomain(postRecord);
    }
    else
      return null;
  }

  public async findAll(): Promise<Result<IPostDTO[]>> {

    let document = []
    document = await this.postSchema.find().sort({ date: 1 });
    var posts=[];

    for(var i=0;i<document.length;i++){
        posts.push(PostMap.toDTO(document[i]));
    }

    if(document === null) {
        return Result.fail<Array<IPostDTO>>('No Post found!');
    } else {
       return Result.ok<Array<IPostDTO>>(posts);
    }
    }

    public async findPostsByUser(userId: string): Promise<Result<IPostDTO[]>> {

        const query = { userId: userId };
        let document = []
        document = await this.postSchema.find(query as FilterQuery<IPostPersistence & Document>).sort({ date: 1 });

        var posts = [];

        for (var i = 0; i < document.length; i++) {
            posts.push(PostMap.toDTO(document[i]));
        }

        if (document === null) {
            return Result.fail<Array<IPostDTO>>('No posts found!');
        } else {
            return Result.ok<Array<IPostDTO>>(posts);
        }
    }
}