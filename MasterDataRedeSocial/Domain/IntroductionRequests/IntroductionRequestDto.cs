using System;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Shared.ValueObjects;

namespace DDDSample1.Domain.IntroductionRequests
{
    public class IntroductionRequestDTO
    {
        public Guid Id { get; set; }

        public UserId UserFrom { get; set; }

        public UserId UserMiddle { get; private set; }

        public UserId UserTo { get; set; }

        public string RequestMessage { get; private set; } // A_B

        public string PresentationMessage { get; private set; } // A_C

        public string IntroductionRequestState { get; private set; }

        public bool Active { get; private set; }

        public IntroductionRequestDTO(Guid id, UserId userFrom, UserId userMiddle, UserId userTo,
        Message requestMessage, Message presentationMessage,
        IntroductionRequestState introductionRequestState, bool active)
        {
            this.Id = id;
            
            this.UserFrom = userFrom;
            this.UserMiddle = userMiddle;
            this.UserTo = userTo;

            this.RequestMessage = requestMessage.Text;
            this.PresentationMessage = presentationMessage.Text;

            this.IntroductionRequestState = introductionRequestState.State;

            this.Active = active;
        }
    }
}