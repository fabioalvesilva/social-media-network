using DDDSample1.Domain.Users.domain;
namespace DDDSample1.Domain.IntroductionRequests
{
    public class CreatingIntroductionRequestDto
    {

        public string UserFrom { get; set; }

        public string UserMiddle { get; private set; }

        public string UserTo { get; set; }

        public string RequestMessage { get; private set; } // A_B

        public string PresentationMessage { get; private set; } // A_C

        public string IntroductionRequestState { get; private set; }

        public bool Active { get; private set; }

        public CreatingIntroductionRequestDto(
                string userFrom, string userMiddle, string userTo,
                 string requestMessage, string presentationMessage, string introductionRequestState, bool active)
        {

            this.UserFrom = userFrom;
            this.UserMiddle = userMiddle;
            this.UserTo = userTo;

            this.RequestMessage = requestMessage;
            this.PresentationMessage = presentationMessage;

            this.IntroductionRequestState = introductionRequestState;
            this.Active = active;
        }
    }
}