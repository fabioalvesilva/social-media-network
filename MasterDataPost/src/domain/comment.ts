import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import ICommentDTO from "../dto/ICommentDTO";
import { Entity } from "../core/domain/Entity";

interface CommentProps {
  text: string;
  date: string;
  postId: string;
  userId: string;
  author: string;
}

export class Comment extends Entity<CommentProps> {
  get id (): UniqueEntityID {
    return this._id;
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

  get postId (): string {
    return this.props.postId;
  }

  get userId (): string{
    return this.props.userId;
    }
    get author(): string {
        return this.props.author;
    }

  private constructor (props: CommentProps, id?: UniqueEntityID) {
    super(props, id);
  }

  public static create (dto: ICommentDTO, id?: UniqueEntityID): Result<Comment> {

    if (dto.author == null || dto.text == null || dto.postId == null) {
      return Result.fail<Comment>("Some information in the comment is missing")
    }     
    else {

      const comment = new Comment({
        text: dto.text,
        date: dto.date,
        postId: dto.postId,
        userId: dto.userId,
        author: dto.author
      }, id);

      return Result.ok<Comment>(comment);
    }
  }
}