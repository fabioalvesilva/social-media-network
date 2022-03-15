import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Result } from "../core/logic/Result";
import { Entity } from "../core/domain/Entity";
import { ReactionId } from "./reactionId";
import IReactionDTO from "../dto/IReactionDTO";

interface ReactionProps {
    reaction: number;
    date: string;
    userId: string;
    objectId: string;
    objectType: number;
}

export class Reaction extends Entity<ReactionProps> {
    get id(): UniqueEntityID {
        return this._id;
    }

    get reactionId(): ReactionId {
        return ReactionId.caller(this.id)
    }

    get reaction(): number {
        return this.props.reaction
    }

    set reaction(value: number) {
        this.props.reaction = value;
    }

    get date(): string {
        return this.props.date
    }

    set date(value: string) {
        this.props.date = value;
    }

    get userId(): string {
        return this.props.userId
    }

    get objectId(): string {
        return this.props.objectId
    }

    get objectType(): number {
        return this.props.objectType
    }


    private constructor(props: ReactionProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(dto: IReactionDTO, id?: UniqueEntityID): Result<Reaction> {

        if (!!dto.objectId === null || dto.objectType === null || dto.userId === null) {
            return Result.fail<Reaction>('Missing reaction information')
        } else {

            const reaction = new Reaction({
                reaction: dto.reaction,
                date: dto.date,
                userId: dto.userId,
                objectId: dto.objectId,
                objectType: dto.objectType
            }, id);
            return Result.ok<Reaction>(reaction)
        }

    }
}