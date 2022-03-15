using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DDDSample1.Domain.Relationships
{
    public class RelationshipCardDto
    {
        public Guid Id { get; set; }

        public Guid UserFromId { get; set; }

        public string UserFromName { get; set; }

        public Guid UserToId { get; set; }

        public string UserToName { get; set; }

        public ISet<string> ListTag { get; set; }

        public int ConnectionStrength { get; set; }

        public int RelationshipStrength { get; set; }

        public Guid RelationshipRequestId { get; set; }

        public RelationshipCardDto(Guid id, User userFrom, User userTo,
                    ISet<Tag> listTag, ConnectionStrength connectionStrength,
                    RelationshipStrength relationshipStrength, RelationshipRequestId relationshipRequestId)
        {
            this.Id = id;
            this.UserFromId = userFrom.Id.AsGuid();
            this.UserFromName = userFrom.Name.name;
            this.UserToId = userTo.Id.AsGuid();
            this.UserToName = userTo.Name.name;
            this.RelationshipStrength = relationshipStrength.Value;
            this.RelationshipRequestId = relationshipRequestId.AsGuid();
            this.ConnectionStrength = connectionStrength.Value;

            this.ListTag = new HashSet<string>();
            foreach (Tag tag in listTag)
            {
                ListTag.Add(tag.Text);
            }
        }
    }
}
