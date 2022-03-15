using System.Collections.Generic;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.RelationshipRequests;

namespace DDDSample1.Domain.Relationships
{
    public class CreatingRelationshipDto
    {
        public string UserFrom { get; set; }

        public string UserTo { get; set; }

        public ISet<string> ListTag { get; set; }

        public int ConnectionStrength { get; set; }

        public int RelationshipStrength { get; set; }

        public string RelationshipRequestId { get; set; }

        public bool Active { get; set; }

        public CreatingRelationshipDto(string userFrom, string userTo,
                ISet<string> listTag, int connectionStrength, int relationshipStrength, 
                string relationshipRequestId )
        {
            this.UserFrom = userFrom;
            this.UserTo = userTo;

            ListTag = new HashSet<string>();

            this.ConnectionStrength = connectionStrength;
            this.RelationshipStrength = relationshipStrength;

            this.RelationshipRequestId = relationshipRequestId;
            
            this.Active = true;
        }

        
    }
}