using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Domain.Users.domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MasterDataRedeSocial.Domain.RelationshipRequests
{
    public class RelationshipRequestCardDto
    {
        public Guid Id { get; set; }

        public string RelationshipRequestState { get; set; }

        public string UserFrom { get; set; }

        public string UserFromEmail { get; set; }

        public string UserFromId { get; set; }

        public RelationshipRequestCardDto(Guid id, RelationshipRequestState relationshipRequestState,
                                    string userFrom, string userFromEmail, string userFromId)
        {
            this.Id = id;
            this.RelationshipRequestState = relationshipRequestState.activeState;
            this.UserFrom = userFrom;
            this.UserFromEmail = userFromEmail;
            this.UserFromId = userFromId;
        }
    }
}
