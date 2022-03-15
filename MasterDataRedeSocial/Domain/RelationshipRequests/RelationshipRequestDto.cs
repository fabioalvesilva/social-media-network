using System;
using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Users.domain;
namespace DDDSample1.Domain.RelationshipRequests
{
    public class RelationshipRequestDTO
    {
        public Guid Id { get; set; }

        public string RelationshipRequestState { get; set; }

        public UserId UserFrom { get; set; }

        public UserId UserTo { get; set; }
        
        public bool Active { get; set; }

        public RelationshipRequestDTO(Guid id, RelationshipRequestState relationshipRequestState,
                                    UserId userFrom, UserId userTo, bool active)
        {
            this.Id = id;
            this.RelationshipRequestState = relationshipRequestState.activeState;

            this.UserFrom = userFrom;
            this.UserTo = userTo;

            this.Active = active;
        }
    }
}