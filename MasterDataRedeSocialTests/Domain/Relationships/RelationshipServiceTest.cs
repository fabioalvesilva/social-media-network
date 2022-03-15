using System.Threading.Tasks;
using System.Collections.Generic;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Users.repository;
using DDDSample1.Domain.RelationshipRequests;

using Moq;

using Xunit;

namespace MasterDataRedeSocialTests.Domain.Relationships
{

    public class RelationshipServiceTest
    {
        private Mock<IUserRepository> _userRepositoryMock = new Mock<IUserRepository>();

        private Mock<IUnitOfWork> _unitOfWorkMock = new Mock<IUnitOfWork>();

        private Mock<IRelationshipRepository> _relationshipRepositoryMock = new Mock<IRelationshipRepository>();

        public UserId UserFrom = new UserId("99999999-9999-9999-9999-999999999999");

        public UserId UserTo = new UserId("19999999-9999-9999-9999-999999999999");

        public ConnectionStrength ConnectionStrength = new ConnectionStrength(10);

        public RelationshipStrength RelationshipStrength = new RelationshipStrength(0);

        public RelationshipRequestId RelationshipRequestId = new RelationshipRequestId("99999999-9999-9999-9999-999999999999");

        [Fact]
        public async Task ShouldGetByIdAsync()
        {
            ISet<Tag> tagLists = new HashSet<Tag>();

            tagLists.Add(new Tag("Tag one"));
            tagLists.Add(new Tag("Tag dois"));

            var relationship = new Relationship(UserFrom, UserTo, tagLists, ConnectionStrength, RelationshipStrength, RelationshipRequestId);

            RelationshipId relaId = relationship.Id;

            this._relationshipRepositoryMock.Setup(repo => repo.GetByIdAsync(relaId)).ReturnsAsync(relationship);
            this._relationshipRepositoryMock.Setup(repo => repo.GetByIdAsync(relaId)).ReturnsAsync(relationship);

            var _relationshipService = new RelationshipService(_userRepositoryMock.Object, _unitOfWorkMock.Object, _relationshipRepositoryMock.Object);

            var result = await _relationshipService.GetByIdAsync(relaId);

            Assert.Equal(relaId.AsString(), result.Id.ToString());
        }

        [Fact]
        public async Task ShouldCreateRelationshipAsync()
        {
            ISet<Tag> tagLists = new HashSet<Tag>();

            var relationship = new Relationship(UserFrom, UserTo, tagLists, ConnectionStrength, RelationshipStrength, RelationshipRequestId);

            CreatingRelationshipDto creatingDto = new CreatingRelationshipDto(
                "99999999-9999-9999-9999-999999999999", "19999999-9999-9999-9999-999999999999",
                new HashSet<string>(), 10, 0, "99999999-9999-9999-9999-999999999999");

            var _relationshipService = new RelationshipService(_userRepositoryMock.Object, _unitOfWorkMock.Object, _relationshipRepositoryMock.Object);
    
            this._relationshipRepositoryMock.Setup(repo => repo.AddAsync(relationship));
            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            var result = await _relationshipService.AddAsync(creatingDto);

            Assert.Equal(relationship.UserFrom, result.UserFrom);
            Assert.Equal(relationship.UserTo, result.UserTo);
        }

        [Fact]
        public async Task ShouldUpdateAsync()
        {
            var relationship = new Relationship(UserFrom, UserTo, new HashSet<Tag>(), ConnectionStrength, RelationshipStrength, RelationshipRequestId);

            var relationshipUpdated = relationship;
            relationshipUpdated.ChangeConnectionStrength(new ConnectionStrength(30));

            UpdateRelationshipDto creatingDto = new UpdateRelationshipDto(relationship.Id.Value,
                           "99999999-9999-9999-9999-999999999999", "19999999-9999-9999-9999-999999999999",
                           new HashSet<string>(), 30, 0, "99999999-9999-9999-9999-999999999999");

            this._relationshipRepositoryMock.Setup(repo => repo.GetByIdAsync(relationship.Id)).ReturnsAsync(relationshipUpdated);

            var _relationshipService = new RelationshipService(_userRepositoryMock.Object, _unitOfWorkMock.Object, _relationshipRepositoryMock.Object);

            var updatedResult = await _relationshipService.UpdateAsync(creatingDto);

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            Assert.Equal(creatingDto.Id.ToString(), updatedResult.Id.ToString());
            Assert.Equal(creatingDto.ConnectionStrength, updatedResult.ConnectionStrength);
        }
    }
}