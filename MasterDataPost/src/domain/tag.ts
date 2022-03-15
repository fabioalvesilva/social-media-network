import { ValueObject } from "../core/domain/ValueObject";
import { Result } from "../core/logic/Result";
import { Guard } from "../core/logic/Guard";

interface TagProps {
    value: string;
}

export class Tag extends ValueObject<TagProps> {
    get value(): string {
        return this.props.value;
    }

    private constructor(props: TagProps) {
        super(props);
    }

    public static create(tag: string): Result<Tag> {
        const guardResult = Guard.againstNullOrUndefined(tag, 'tag');
        if (!guardResult.succeeded) {
            return Result.fail<Tag>(guardResult.message);
        } else {
            return Result.ok<Tag>(new Tag({ value: tag }))
        }
    }
}