using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.IntroductionRequests;

namespace DDDSample1.Domain.Introductions
{
    public class UpdatingIntroductionDto
    {
        public string Id { get; set; }

        public string IntroductionRequestId { get; private set; }

        public string UserFrom { get; set; }

        public string UserMiddle { get; private set; }

        public string UserTo { get; set; }

        public string PresentationMessage { get; private set; } // A_C

        public string IntroductionMessage { get; private set; } // B_C

        public string IntroductionState { get; private set; }

        public bool Active { get; private set; }

        public UpdatingIntroductionDto(string id, string introductionRequestId, 
                string userFrom, string userMiddle, string userTo,
                 string presentationMessage, string introdutionMessage, string introductionState, bool active)
        {

            this.Id = id;
            this.IntroductionRequestId = introductionRequestId;

            this.UserFrom = userFrom;
            this.UserMiddle = userMiddle;
            this.UserTo = userTo;

            this.PresentationMessage = presentationMessage;
            this.IntroductionMessage = introdutionMessage;

            this.IntroductionState = introductionState;
            this.Active = active;
        }
    }
}