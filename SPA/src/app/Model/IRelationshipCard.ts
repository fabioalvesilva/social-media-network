export interface IRelationshipCard {

  id: string;
  userFromId: string;
  userFromName: string;
  userToId: string;
  userToName: string;
  listTag: Array<string>;
  connectionStrength: number;
  relationshipStrength: number;
  relationshipRequestId: string;
}
