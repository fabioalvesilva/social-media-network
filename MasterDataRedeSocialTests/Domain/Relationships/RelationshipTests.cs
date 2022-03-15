using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.RelationshipRequests;

using Xunit;
using System.Collections.Generic;

namespace MasterDataRedeSocialTests.Domain.Relationships
{
    public class RelationshipTests
    {

        public UserId UserFrom = new UserId("99999999-9999-9999-9999-999999999999");

        public UserId UserTo = new UserId("19999999-9999-9999-9999-999999999999");

        public ConnectionStrength ConnectionStrength = new ConnectionStrength(10);

        public RelationshipStrength RelationshipStrength = new RelationshipStrength(0);

        public RelationshipRequestId RelationshipRequestId = new RelationshipRequestId("99999999-9999-9999-9999-999999999999");

        [Fact]
        public void RelationsipsConstructor()
        {
            ISet<Tag> tagLists = new HashSet<Tag>();

            tagLists.Add(new Tag("Tag one"));
            tagLists.Add(new Tag("Tag dois"));

            Relationship relationship = new Relationship(UserFrom, UserTo, tagLists, ConnectionStrength, RelationshipStrength, RelationshipRequestId);

            Assert.Equal(relationship.UserFrom.Value, this.UserFrom.Value);
            Assert.Equal(relationship.UserTo.Value, this.UserTo.Value);
            Assert.Equal(relationship.ConnectionStrength.Value, this.ConnectionStrength.Value);
            Assert.Equal(relationship.RelationshipStrength.Value, this.RelationshipStrength.Value);
            Assert.Equal(relationship.RelationshipRequestId.Value, this.RelationshipRequestId.Value);
        }
    }
}