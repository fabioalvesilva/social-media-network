using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using Xunit;

namespace MasterDataRedeSocialTests.Domain.IntroductionRequests
{
    public class IntroductionRequestsTests
    {
        public UserId UserFrom = new UserId("99999999-9999-9999-9999-999999999999");

        public UserId UserTo = new UserId("19999999-9999-9999-9999-999999999999");

        public UserId UserMiddle = new UserId("29999999-9999-9999-9999-999999999999");

        public Message RequestMesssage = new Message("Mensagem de Introduction Request"); // A_B

        public Message PresentationMessage = new Message("Mensagem de Apresentação de teste"); // A_C

        public IntroductionRequestState IntroductionRequestState = new IntroductionRequestState("PENDING");


        [Fact]
        public void IntroductionRequestsConstructor()
        {

            IntroductionRequest introRequest = new IntroductionRequest(UserFrom, UserMiddle, UserTo, RequestMesssage, PresentationMessage, IntroductionRequestState);

            Assert.Equal(introRequest.UserFrom.Value, this.UserFrom.Value);
            Assert.Equal(introRequest.UserTo.Value, this.UserTo.Value);
            Assert.Equal(introRequest.UserMiddle.Value, this.UserMiddle.Value);
            Assert.Equal(introRequest.RequestMesssage.ToString(), this.RequestMesssage.ToString());
            Assert.Equal(introRequest.PresentationMessage.ToString(), this.PresentationMessage.ToString());
            Assert.Equal(introRequest.IntroductionRequestState.ToString(), this.IntroductionRequestState.ToString());
        }

    }
}