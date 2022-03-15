using System.Collections.Generic;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.RelationshipRequests;

namespace DDDSample1.Domain.Relationships
{
    public class UpdatingRelationshipDto
    {
        public string IdValue { get; set; }

        public string UserFrom { get; set; }

        public string UserTo { get; set; }

        public ISet<string> ListTag { get; set; }

        public int ConnectionStrength { get; set; }

        public int RelationshipStrength { get; set; }

        public string RelationshipRequest { get; set; }

        public bool Active { get; set; }

        public UpdatingRelationshipDto(string idvalue, string userFrom, string userTo,
                ISet<string> listTag, int connectionStrength, int relationshipStrength, 
                string relationshipRequest )
        {
            this.IdValue = idvalue;
            this.UserFrom = userFrom;
            this.UserTo = userTo;

            ListTag = new HashSet<string>(listTag);

            this.ConnectionStrength = connectionStrength;
            this.RelationshipStrength = RelationshipStrength;

            this.RelationshipRequest = relationshipRequest;
            
            this.Active = true;
        }

        
    }
}