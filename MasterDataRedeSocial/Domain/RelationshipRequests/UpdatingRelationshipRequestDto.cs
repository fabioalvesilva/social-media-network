using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;

namespace DDDSample1.Domain.RelationshipRequests
{
    public class UpdatingRelationshipRequestDto
    {
        public string Id { get; set; }

        public string RelationshipRequestState { get; set; }

        public string UserFrom { get; set; }

        public string UserTo { get; set; }

        public UpdatingRelationshipRequestDto(string id, string relationshipRequestState, string userFrom, string userTo)
        {
            this.Id = id;
            this.RelationshipRequestState = relationshipRequestState;

            this.UserFrom = userFrom;
            this.UserTo = userTo;
        }
    }
}