export interface IRelationship {
    id: number;
    userFrom: number;
    userTo: number;
    listTag: Array<string>;
    connectionStrength: number;
    relationshipStrength: number;
    relationshipRequestId: number;
    active: boolean;
}
