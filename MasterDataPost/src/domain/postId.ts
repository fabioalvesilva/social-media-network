
import { Entity } from "../core/domain/Entity";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";

export class PostId extends Entity<any> {

  get id (): UniqueEntityID {
    return this._id;
  }

  private constructor (id?: UniqueEntityID) {
    super(null, id)
  }

  public static create (id: string): Result<PostId> {
    
    let uId = new UniqueEntityID(id);

    if (uId == null) {
      return Result.fail<PostId>("PostId creation failed");
    } else {
      return Result.ok<PostId>(new PostId(uId))
    }
  }
}