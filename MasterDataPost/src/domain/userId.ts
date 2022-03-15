
import { Entity } from "../core/domain/Entity";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";

export class UserId extends Entity<any> {

  get id (): UniqueEntityID {
    return this._id;
  }

  private constructor (id?: UniqueEntityID) {
    super(null, id)
  }

  public static create (id: string): Result<UserId> {
    
    let uId = new UniqueEntityID(id);

    if (uId == null) {
      return Result.fail<UserId>("UserId creation failed");
    } else {
      return Result.ok<UserId>(new UserId(uId))
    }
  }
}