import { Mapper } from "../core/infra/Mapper";
import { Document, Model } from 'mongoose';
import { IPostPersistence } from '../dataschema/IPostPersistence';
import IPostDTO from "../dto/IPostDTO";
import { Post } from "../domain/post";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";

export class PostMap extends Mapper<Post> {
  
  public static toDTO( post: Post): IPostDTO {
    return {
      id: post.id.toString(),
      text: post.text,
      date: post.date,
        userId: post.userId,
        author: post.author
    } as IPostDTO;
  }

  public static toDomain (post: any | Model<IPostPersistence & Document> ): Post {
    const postOrError = Post.create(
      post,
      new UniqueEntityID(post.domainId)
    );

    postOrError.isFailure ? console.log(postOrError.error) : '';

    return postOrError.isSuccess ? postOrError.getValue() : null;
  }

  public static toPersistence (post: Post): any {
    return {
      domainId: post.id.toString(),
      text: post.text,
      date: post.date,
      userId: post.userId,
      author: post.author
    }
  }
}