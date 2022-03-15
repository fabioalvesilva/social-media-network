using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Domain.Introductions;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.repository;
using Moq;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Xunit;

namespace MasterDataRedeSocialTests.Domain.Introductions
{
    public class IntroductionServiceTests
    {

        private Mock<IUnitOfWork> _unitOfWorkMock = new Mock<IUnitOfWork>();
        private Mock<IIntroductionRepository> _introductionRepositoryMock = new Mock<IIntroductionRepository>();

        private Mock<IUserRepository> _userRepositoryMock = new Mock<IUserRepository>();

        private Mock<IIntroductionRequestRepository> _introductionReqRepositoryMock = new Mock<IIntroductionRequestRepository>();

        private IntroductionRequestId introductionRequestId = new IntroductionRequestId(Guid.NewGuid());
        private UserId userTo = new UserId(Guid.NewGuid());
        private UserId userFrom = new UserId(Guid.NewGuid());
        private UserId userMiddle = new UserId(Guid.NewGuid());

        private Message presentationMessage = new Message("Hello Sun! Here's Moon!");
        private Message introdutionMessage = new Message("Hello Moon! Here's Sun!");

        private IntroductionState introductionState = new IntroductionState();

        private List<Introduction> listIntroductions = new List<Introduction>();

        [Fact]
        public async Task ShouldGetAllAsync()
        {

            IntroductionRequestId introductionRequestId1 = new IntroductionRequestId(Guid.NewGuid());
            UserId userTo1 = new UserId(Guid.NewGuid());
            UserId userFrom1 = new UserId(Guid.NewGuid());
            UserId userMiddle1 = new UserId(Guid.NewGuid());

            Message presentationMessage1 = new Message("Hello World! Here's Moon!");
            Message introdutionMessage1 = new Message("Hi Moon! Here's World!");

            IntroductionState introductionState1 = new IntroductionState();


            Introduction introduction = new Introduction(introductionRequestId, userFrom,
            userMiddle, userTo, presentationMessage, introdutionMessage, introductionState);

            Introduction introduction1 = new Introduction(introductionRequestId1, userFrom1,
            userMiddle1, userTo1, presentationMessage1, introdutionMessage1, introductionState);


            listIntroductions.Add(introduction);
            listIntroductions.Add(introduction1);

            this._introductionRepositoryMock.Setup(repo => repo.GetAllAsync()).ReturnsAsync(listIntroductions);

            var _introductionService = new IntroductionService(_unitOfWorkMock.Object, _introductionRepositoryMock.Object,
             _userRepositoryMock.Object, _introductionReqRepositoryMock.Object);

            var list = await _introductionService.GetAllAsync();

            Assert.Equal(introductionRequestId.AsString(), list[0].IntroductionRequestId.AsString());
            Assert.Equal(userTo.AsString(), list[0].UserTo.AsString());
            Assert.Equal(userFrom.AsString(), list[0].UserFrom.AsString());
            Assert.Equal(userMiddle.AsString(), list[0].UserMiddle.AsString());
            Assert.Equal(presentationMessage.Text, list[0].PresentationMessage);
            Assert.Equal(introdutionMessage.Text, list[0].IntroductionMessage);

            Assert.Equal(introductionRequestId1.AsString(), list[1].IntroductionRequestId.AsString());
            Assert.Equal(userTo1.AsString(), list[1].UserTo.AsString());
            Assert.Equal(userFrom1.AsString(), list[1].UserFrom.AsString());
            Assert.Equal(userMiddle1.AsString(), list[1].UserMiddle.AsString());
            Assert.Equal(presentationMessage1.Text, list[1].PresentationMessage);
            Assert.Equal(introdutionMessage1.Text, list[1].IntroductionMessage);
        }

        [Fact]
        public async Task ShouldCreateIntroductionAsync()
        {


            IntroductionRequestId introductionRequestId1 = new IntroductionRequestId(Guid.NewGuid());
            UserId userTo1 = new UserId(Guid.NewGuid());
            UserId userFrom1 = new UserId(Guid.NewGuid());
            UserId userMiddle1 = new UserId(Guid.NewGuid());

            Message presentationMessage1 = new Message("Hello World! Here's Moon!");
            Message introdutionMessage1 = new Message("Hi Moon! Here's World!");

            IntroductionState introductionState1 = new IntroductionState();


            Introduction introduction = new Introduction(introductionRequestId, userFrom,
            userMiddle, userTo, presentationMessage, introdutionMessage, introductionState);

            CreatingIntroductionDto introductionDto = new CreatingIntroductionDto(introductionRequestId.AsString(), userFrom.AsString(),
            userMiddle.AsString(), userTo.AsString(), presentationMessage.Text, introdutionMessage.Text, introductionState.State, true);

             var _introductionService = new IntroductionService(_unitOfWorkMock.Object, _introductionRepositoryMock.Object,
             _userRepositoryMock.Object, _introductionReqRepositoryMock.Object);

            this._introductionRepositoryMock.Setup(repo => repo.AddAsync(introduction));
            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            var result = await _introductionService.AddAsync(introductionDto);

            Assert.Equal(introduction.IntroductionRequestId.AsString(), result.IntroductionRequestId.AsString());
            Assert.Equal(introduction.IntrodutionMessage.Text, result.IntroductionMessage);
            Assert.Equal(introduction.UserFrom.AsString(), result.UserFrom.AsString());
            Assert.Equal(introduction.UserMiddle.AsString(), result.UserMiddle.AsString());
            Assert.Equal(introduction.UserTo.AsString(), result.UserTo.AsString());
        }

        [Fact]
        public async Task ShouldUpdateAsync()
        {

            IntroductionId introId = new IntroductionId(Guid.NewGuid());

            IntroductionRequestId introductionRequestId1 = new IntroductionRequestId(Guid.NewGuid());
            UserId userTo1 = new UserId(Guid.NewGuid());
            UserId userFrom1 = new UserId(Guid.NewGuid());
            UserId userMiddle1 = new UserId(Guid.NewGuid());

            Message presentationMessage1 = new Message("Hello World! Here's Moon!");
            Message introdutionMessage1 = new Message("Hi Moon! Here's World!");

            IntroductionState introductionState1 = new IntroductionState("PENDING");

            Introduction introduction = new Introduction(introductionRequestId, userFrom,
            userMiddle, userTo, presentationMessage, introdutionMessage, introductionState);

            IntroductionRequestState introState = new IntroductionRequestState("APPROVED");

            UpdatingIntroductionDto introductionDto = new UpdatingIntroductionDto(introId.AsString(), introductionRequestId.AsString(), userFrom.AsString(),
            userMiddle.AsString(), userTo.AsString(), presentationMessage.Text, introdutionMessage.Text, introState.State, true);

             var _introductionService = new IntroductionService(_unitOfWorkMock.Object, _introductionRepositoryMock.Object,
             _userRepositoryMock.Object, _introductionReqRepositoryMock.Object);
            
            this._introductionRepositoryMock.Setup(repo => repo.GetByIdAsync(introId)).ReturnsAsync(introduction);

            var result = await _introductionService.UpdateAsync(introductionDto);

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            Assert.Equal(introduction.Id.AsString(), result.Id.ToString());
            Assert.Equal(introduction.IntroductionRequestId.AsString(), result.IntroductionRequestId.AsString());
            Assert.Equal(introduction.IntrodutionMessage.Text, result.IntroductionMessage);
            Assert.Equal(introduction.UserFrom.AsString(), result.UserFrom.AsString());
            Assert.Equal(introduction.UserMiddle.AsString(), result.UserMiddle.AsString());
            Assert.Equal(introduction.UserTo.AsString(), result.UserTo.AsString());
        }

    }


}
