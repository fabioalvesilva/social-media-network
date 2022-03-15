using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.RelationshipRequests;

using Xunit;

namespace MasterDataRedeSocialTests.Domain.RelationshipsRequests
{
    public class RelationshipsRequestTests
    {

        public UserId UserFrom = new UserId("99999999-9999-9999-9999-999999999999");

        public UserId UserTo = new UserId("19999999-9999-9999-9999-999999999999");

        public RelationshipRequestState RelationshipRequestState = new RelationshipRequestState();

        [Fact]
        public void RelationsipsRequestConstructor()
        {
            RelationshipRequest relationship = new RelationshipRequest(RelationshipRequestState, UserFrom, UserTo);

            Assert.Equal(relationship.UserFrom.Value, this.UserFrom.Value);
            Assert.Equal(relationship.UserTo.Value, this.UserTo.Value);
            Assert.Equal(relationship.RelationshipRequestState.activeState, this.RelationshipRequestState.activeState);
        }
    }
}