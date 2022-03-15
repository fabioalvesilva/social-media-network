using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Domain.Users.repository;

using Moq;

using Xunit;

namespace MasterDataRedeSocialTests.Domain.Relationships
{

    public class RelationshipRequestServiceTest
    {
        private Mock<IUnitOfWork> _unitOfWorkMock = new Mock<IUnitOfWork>();
        private Mock<IRelationshipRequestRepository> _relationshipRequestRepositoryMock = new Mock<IRelationshipRequestRepository>();

        private Mock<IUserRepository> userRepoMock = new Mock<IUserRepository>();
        public UserId UserFrom = new UserId("99999999-9999-9999-9999-999999999999");

        public UserId UserTo = new UserId("19999999-9999-9999-9999-999999999999");

        public RelationshipRequestState RelationshipRequestState = new RelationshipRequestState();

        [Fact]
        public async Task ShouldGetByIdAsync()
        {
            var relationshipRequest = new RelationshipRequest(RelationshipRequestState, UserFrom, UserTo);

            RelationshipRequestId relaId = relationshipRequest.Id;

            this._relationshipRequestRepositoryMock.Setup(repo => repo.GetByIdAsync(relaId)).ReturnsAsync(relationshipRequest);

            var _relationshipService = new RelationshipRequestService(_unitOfWorkMock.Object, _relationshipRequestRepositoryMock.Object, userRepoMock.Object);

            var result = await _relationshipService.GetByIdAsync(relaId);

            Assert.Equal(relaId.AsString(), result.Id.ToString());
            Assert.Equal("PENDING", result.RelationshipRequestState.ToString());
            Assert.Equal(UserFrom, result.UserFrom);
            Assert.Equal(UserTo, result.UserTo);
        }

        /*[Fact]
        public async Task ShouldCreateRelationshipAsync()
        {
            var relationshipRequest = new RelationshipRequest(RelationshipRequestState, UserFrom, UserTo);

            CreatingRelationshipRequestDto creatingDto = new CreatingRelationshipRequestDto(
                "99999999-9999-9999-9999-999999999999", "19999999-9999-9999-9999-999999999999");
            
            List<RelationshipRequest> list = new List<RelationshipRequest>();
            this._relationshipRequestRepositoryMock.Setup(repo => repo.CheckIfRelationshipRequest(new UserId(creatingDto.UserFrom), new UserId(creatingDto.UserTo))).ReturnsAsync(list);
            this._relationshipRequestRepositoryMock.Setup(repo => repo.AddAsync(relationshipRequest));

            var _relationshipRequestService = new RelationshipRequestService(_unitOfWorkMock.Object, _relationshipRequestRepositoryMock.Object);

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            var result = await _relationshipRequestService.AddAsync(creatingDto);

            Assert.Equal(relationshipRequest.UserFrom, result.UserFrom);
            Assert.Equal(relationshipRequest.UserTo, result.UserTo);
        }

        [Fact]
        public async Task ShouldUpdateAsync()
        {
            var relationshipRequest = new RelationshipRequest(new RelationshipRequestState(), UserFrom, UserTo);

            var relationshipRequestUpdated = new RelationshipRequest(new RelationshipRequestState(), UserFrom, UserTo);
            relationshipRequestUpdated.ChangeState(new RelationshipRequestState("APPROVED"));

            UpdatingRelationshipRequestDto creatingDto = new UpdatingRelationshipRequestDto(relationshipRequest.Id.Value,
                            "APPROVED", UserFrom.Value, UserFrom.Value);

            this._relationshipRequestRepositoryMock.Setup(repo => repo.GetByIdAsync(relationshipRequest.Id)).ReturnsAsync(relationshipRequestUpdated);

            var _relationshipService = new RelationshipRequestService(_unitOfWorkMock.Object, _relationshipRequestRepositoryMock.Object);

            var updatedResult = await _relationshipService.UpdateAsync(creatingDto);

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            Assert.Equal(creatingDto.Id.ToString(), updatedResult.Id.ToString());
            Assert.Equal(creatingDto.RelationshipRequestState, updatedResult.RelationshipRequestState);
        }*/
    }
}