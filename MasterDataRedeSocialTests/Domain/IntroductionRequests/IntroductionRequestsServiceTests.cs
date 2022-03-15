using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.repository;
using Moq;
using Xunit;

namespace MasterDataRedeSocialTests.Domain.IntroductionRequests
{
    public class IntroductionRequestsServiceTests
    {

        private Mock<IUnitOfWork> _unitOfWorkMock = new Mock<IUnitOfWork>();
        private Mock<IIntroductionRequestRepository> _introductionRequestRepositoryMock = new Mock<IIntroductionRequestRepository>();

        private Mock<IUserRepository> _userRepositoryMock = new Mock<IUserRepository>();

        IntroductionRequestId introductionRequestId = new IntroductionRequestId(Guid.NewGuid());

        private UserId userTo = new UserId(Guid.NewGuid());
        private UserId userFrom = new UserId(Guid.NewGuid());
        private UserId userMiddle = new UserId(Guid.NewGuid());

        private Message requestMessage = new Message("Hello Sun! Here's Moon!");
        private Message presentationMessage = new Message("Hello Moon! Here's Sun!");

        private IntroductionRequestState introductionState = new IntroductionRequestState("PENDING");

        private List<IntroductionRequest> listRequests = new List<IntroductionRequest>();

        [Fact]
        public async Task ShouldGetAllAsync()
        {

            IntroductionRequestId introductionRequestId1 = new IntroductionRequestId(Guid.NewGuid());
            UserId userTo1 = new UserId(Guid.NewGuid());
            UserId userFrom1 = new UserId(Guid.NewGuid());
            UserId userMiddle1 = new UserId(Guid.NewGuid());

            Message presentationMessage1 = new Message("Hello World! Here's Moon!");
            Message requestMessage1 = new Message("Hi Moon! Here's World!");

            IntroductionRequestState introductionState1 = new IntroductionRequestState("PENDING");

            IntroductionRequest request = new IntroductionRequest(this.userFrom, this.userMiddle,
            this.userTo, this.requestMessage, this.presentationMessage, introductionState);

            IntroductionRequest request1 = new IntroductionRequest(userFrom1,
            userMiddle1, userTo1, requestMessage1, presentationMessage1, introductionState1);

            listRequests.Add(request);
            listRequests.Add(request1);

            this._introductionRequestRepositoryMock.Setup(repo => repo.GetAllAsync()).ReturnsAsync(listRequests);

            var _introductionRequestService = new IntroductionRequestService(_unitOfWorkMock.Object, _introductionRequestRepositoryMock.Object,
             _userRepositoryMock.Object);

            var list = await _introductionRequestService.GetAllAsync();

            Assert.Equal(userTo.AsString(), list[0].UserTo.AsString());
            Assert.Equal(userFrom.AsString(), list[0].UserFrom.AsString());
            Assert.Equal(userMiddle.AsString(), list[0].UserMiddle.AsString());
            Assert.Equal(presentationMessage.Text, list[0].PresentationMessage);
            Assert.Equal(requestMessage.Text, list[0].RequestMessage);

            Assert.Equal(userTo1.AsString(), list[1].UserTo.AsString());
            Assert.Equal(userFrom1.AsString(), list[1].UserFrom.AsString());
            Assert.Equal(userMiddle1.AsString(), list[1].UserMiddle.AsString());
            Assert.Equal(presentationMessage1.Text, list[1].PresentationMessage);
            Assert.Equal(requestMessage1.Text, list[1].RequestMessage);
        }

        [Fact]
        public async Task ShouldCreateIntroductionRequestAsync()
        {

            IntroductionRequest request = new IntroductionRequest(userFrom,
            userMiddle, userTo, requestMessage, presentationMessage, introductionState);

            CreatingIntroductionRequestDto introductionRequestDto = new CreatingIntroductionRequestDto(userFrom.AsString(),
            userMiddle.AsString(), userTo.AsString(), requestMessage.Text, presentationMessage.Text, introductionState.State, true);

            var _introductionRequestService = new IntroductionRequestService(_unitOfWorkMock.Object, _introductionRequestRepositoryMock.Object,
             _userRepositoryMock.Object);

            this._introductionRequestRepositoryMock.Setup(repo => repo.AddAsync(request));

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            var result = await _introductionRequestService.AddAsync(introductionRequestDto);

            Assert.Equal(request.RequestMesssage.Text, result.RequestMessage);
            Assert.Equal(request.PresentationMessage.Text, result.PresentationMessage);
            Assert.Equal(request.UserFrom.AsString(), result.UserFrom.AsString());
            Assert.Equal(request.UserMiddle.AsString(), result.UserMiddle.AsString());
            Assert.Equal(request.UserTo.AsString(), result.UserTo.AsString());
        }

        [Fact]
        public async Task ShouldUpdateAsync()
        {

            IntroductionRequestId introductionRequestId1 = new IntroductionRequestId(Guid.NewGuid());

            UserId userTo1 = new UserId(Guid.NewGuid());
            UserId userFrom1 = new UserId(Guid.NewGuid());
            UserId userMiddle1 = new UserId(Guid.NewGuid());

            Message presentationMessage1 = new Message("Hello World! Here's Moon!");
            Message introdutionMessage1 = new Message("Hi Moon! Here's World!");


            IntroductionRequest request = new IntroductionRequest(userFrom,
            userMiddle, userTo, requestMessage, presentationMessage, introductionState);

            IntroductionRequestState introState = new IntroductionRequestState("APPROVED");

            UpdatingIntroductionRequestDto updateDto = new UpdatingIntroductionRequestDto(introductionRequestId.AsString(), userFrom.AsString(),
            userMiddle.AsString(), userTo.AsString(), requestMessage.Text, presentationMessage.Text, introState.State, true);

            var _introductionRequestService = new IntroductionRequestService(_unitOfWorkMock.Object, _introductionRequestRepositoryMock.Object,
             _userRepositoryMock.Object);

            this._introductionRequestRepositoryMock.Setup(repo => repo.GetByIdAsync(introductionRequestId)).ReturnsAsync(request);

            var result = await _introductionRequestService.UpdateAsync(updateDto);

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            Assert.Equal(request.RequestMesssage.Text, result.RequestMessage);
            Assert.Equal(request.PresentationMessage.Text, result.PresentationMessage);
            Assert.Equal(request.Id.AsString(), result.Id.ToString());
            Assert.Equal(request.UserFrom.AsString(), result.UserFrom.AsString());
            Assert.Equal(request.UserMiddle.AsString(), result.UserMiddle.AsString());
            Assert.Equal(request.UserTo.AsString(), result.UserTo.AsString());
            Assert.Equal(request.IntroductionRequestState.State, result.IntroductionRequestState.ToString());
        }

        [Fact]
        public async Task ShouldInactivateAsync()
        {
            IntroductionRequest request = new IntroductionRequest(userFrom,
            userMiddle, userTo, requestMessage, presentationMessage, introductionState);

            IntroductionRequestDTO requestDTO = new IntroductionRequestDTO(introductionRequestId.AsGuid(), userFrom,
            userMiddle, userTo, requestMessage, presentationMessage, introductionState, true);

            var _introductionRequestService = new IntroductionRequestService(_unitOfWorkMock.Object, _introductionRequestRepositoryMock.Object,
             _userRepositoryMock.Object);

            this._introductionRequestRepositoryMock.Setup(repo => repo.GetByIdAsync(introductionRequestId)).ReturnsAsync(request);

            var result = await _introductionRequestService.InactivateAsync(introductionRequestId);

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            Assert.Equal(request.Id.AsString(), result.Id.ToString());
            Assert.Equal(request.IntroductionRequestState.State, result.IntroductionRequestState.ToString());
        }

        [Fact]
        public async Task ShouldGetByIdAsync()
        {
            IntroductionRequest request = new IntroductionRequest(userFrom,
            userMiddle, userTo, requestMessage, presentationMessage, introductionState);

            var _introductionRequestService = new IntroductionRequestService(_unitOfWorkMock.Object, _introductionRequestRepositoryMock.Object,
             _userRepositoryMock.Object);

            this._introductionRequestRepositoryMock.Setup(repo => repo.GetByIdAsync(introductionRequestId)).ReturnsAsync(request);

            var result = await _introductionRequestService.GetByIdAsync(introductionRequestId);

            Assert.Equal(request.RequestMesssage.Text, result.RequestMessage);
            Assert.Equal(request.PresentationMessage.Text, result.PresentationMessage);
            Assert.Equal(request.Id.AsString(), result.Id.ToString());
            Assert.Equal(request.UserFrom.AsString(), result.UserFrom.AsString());
            Assert.Equal(request.UserMiddle.AsString(), result.UserMiddle.AsString());
            Assert.Equal(request.UserTo.AsString(), result.UserTo.AsString());
            Assert.Equal(request.IntroductionRequestState.State, result.IntroductionRequestState.ToString());
        }
    }
}
