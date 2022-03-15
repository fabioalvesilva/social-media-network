using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Domain.Introductions;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using System;
using Xunit;

namespace MasterDataRedeSocialTests.Domain.Introductions
{
    public class IntroductionTests
    {


        private IntroductionRequestId introductionRequestId = new IntroductionRequestId(Guid.NewGuid());
        private UserId userTo = new UserId(Guid.NewGuid());
        private UserId userFrom = new UserId(Guid.NewGuid());
        private UserId userMiddle = new UserId(Guid.NewGuid());

        private Message presentationMessage = new Message("Olá Vanessa! Podes-me apresentar-me ao Valete?");
        private Message introdutionMessage = new Message("Olá Valete! Sou a Vanessa!");

        public IntroductionState introductionState = new IntroductionState();


        [Fact]
        public void IntroductionConstructor()
        {


            Introduction introduction = new Introduction(introductionRequestId, userFrom, userMiddle, userTo, presentationMessage, introdutionMessage, introductionState);

            Assert.Equal(this.introductionRequestId.AsString(), introduction.IntroductionRequestId.AsString());
            Assert.Equal(this.userTo.AsString(), introduction.UserTo.AsString());
            Assert.Equal(this.userMiddle.AsString(), introduction.UserMiddle.AsString());
            Assert.Equal(this.userFrom.AsString(), introduction.UserFrom.AsString());
            Assert.Equal(this.presentationMessage.ToString(), introduction.PresentationMessage.ToString());
            Assert.Equal(this.introdutionMessage.ToString(), introduction.IntrodutionMessage.ToString());
            Assert.Equal(this.introductionState.ToString(), introduction.IntroductionState.ToString());
        }
    }
}
