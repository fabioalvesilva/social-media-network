"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tag = void 0;
const ValueObject_1 = require("../core/domain/ValueObject");
const Result_1 = require("../core/logic/Result");
const Guard_1 = require("../core/logic/Guard");
class Tag extends ValueObject_1.ValueObject {
    get value() {
        return this.props.value;
    }
    constructor(props) {
        super(props);
    }
    static create(tag) {
        const guardResult = Guard_1.Guard.againstNullOrUndefined(tag, 'tag');
        if (!guardResult.succeeded) {
            return Result_1.Result.fail(guardResult.message);
        }
        else {
            return Result_1.Result.ok(new Tag({ value: tag }));
        }
    }
}
exports.Tag = Tag;
//# sourceMappingURL=tag.js.map