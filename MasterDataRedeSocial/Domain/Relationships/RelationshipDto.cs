using DDDSample1.Domain.Shared;
using System;
using System.Collections.Generic;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.RelationshipRequests;

namespace DDDSample1.Domain.Relationships
{
    public class RelationshipDto
    {
        public Guid Id { get; set; }

        public UserId UserFrom { get; set; }

        public UserId UserTo {get; set; }

        public ISet<string> ListTag { get; set; }

        public int ConnectionStrength { get; set; }

        public int RelationshipStrength { get; set; }

        public RelationshipRequestId  RelationshipRequest {get; set; }

        public bool Active { get; set; }

        public RelationshipDto(Guid Id, UserId userFrom, UserId userTo,
                    ISet<Tag> listTag, ConnectionStrength connectionStrength,
                    RelationshipStrength relationshipStrength, RelationshipRequestId relationshipRequestId,
                    bool active)
        {
            this.Id = Id;
            this.UserFrom = userFrom;
            this.UserTo = userTo;

            this.ListTag = new HashSet<string>();
            foreach (Tag tag in listTag)
            {
                ListTag.Add(tag.Text);
            }

            this.ConnectionStrength = connectionStrength.Value;
            this.RelationshipStrength = relationshipStrength.Value;
            this.RelationshipRequest = relationshipRequestId;

            this.Active = active;
        }
    }
}