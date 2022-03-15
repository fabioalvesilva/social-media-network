import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import { UserId } from "./userId";
import { PostId } from "./postId";
import { Guard } from "../core/logic/Guard";
import IPostDTO from "../dto/IPostDTO";

interface PostProps {
  text: string;
  date: string;
  userId: string;
  author: string;
}

export class Post extends AggregateRoot<PostProps> {
  get id (): UniqueEntityID {
    return this._id;
  }

  get postId (): PostId {
    return PostId.caller(this.id)
  }

  get text (): string {
    return this.props.text
  }

  set text (value: string) {
    this.props.text = value;
  }

  get date (): string {
    return this.props.date;
  }

  get userId (): string{
    return this.props.userId;
  }

    get author(): string {
        return this.props.author;
    }


  private constructor (props: PostProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create (dto: IPostDTO, id?: UniqueEntityID): Result<Post> {
    
    if (!!dto.author === null || dto.text === null) {
      return Result.fail<Post>('Must insert some information in the post')
    } else {

      let uId =  UserId.create(dto.userId).getValue()
      const post = new Post({
        text: dto.text,
        date: dto.date,
        userId: dto.userId,
        author: dto.author
      }, id);
      return Result.ok<Post>( post )
    }

    }
  }