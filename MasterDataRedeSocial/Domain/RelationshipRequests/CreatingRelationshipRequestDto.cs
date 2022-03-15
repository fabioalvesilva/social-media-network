using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;

namespace DDDSample1.Domain.RelationshipRequests
{
    public class CreatingRelationshipRequestDto
    {
        public string UserFrom { get; set; }

        public string UserTo { get; set; }

        public CreatingRelationshipRequestDto(string userFrom, string userTo)
        {
            this.UserFrom = userFrom;
            this.UserTo = userTo;
        }
    }
}