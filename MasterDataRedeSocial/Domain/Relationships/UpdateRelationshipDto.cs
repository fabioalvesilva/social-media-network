using System.Collections.Generic;

namespace DDDSample1.Domain.Relationships
{
    public class UpdateRelationshipDto
    {
        public string Id { get; set; }

        public string UserFrom { get; set; }

        public string UserTo { get; set; }

        public ISet<string> ListTag { get; set; }

        public int ConnectionStrength { get; set; }

        public int RelationshipStrength { get; set; }

        public string RelationshipRequest { get; set; }

        public bool Active { get; set; }

        public UpdateRelationshipDto(string id, string userFrom, string userTo,
                ISet<string> listTag, int connectionStrength, int relationshipStrength,
                string relationshipRequest)
        {
            this.Id = id;

            this.UserFrom = userFrom;
            this.UserTo = userTo;

            ListTag = new HashSet<string>();
            foreach (string text in listTag)
            {
                ListTag.Add(text);
            }

            this.ConnectionStrength = connectionStrength;
            this.RelationshipStrength = relationshipStrength;

            this.RelationshipRequest = relationshipRequest;

            this.Active = true;
        }


    }
}