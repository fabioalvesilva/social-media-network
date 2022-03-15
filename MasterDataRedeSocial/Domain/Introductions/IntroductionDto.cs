using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.IntroductionRequests;
using System;
using DDDSample1.Domain.Shared.ValueObjects;

namespace DDDSample1.Domain.Introductions
{
    public class IntroductionDTO
    {
        public Guid Id { get; set; }

        public IntroductionRequestId IntroductionRequestId { get; set; }

        public UserId UserFrom { get; set; }

        public UserId UserMiddle { get; private set; }

        public UserId UserTo { get; set; }

        public string PresentationMessage { get; private set; } // A_C

        public string IntroductionMessage { get; private set; } // B_C

        public string IntroductionState { get; private set; }

        public bool Active { get; private set; }

        public IntroductionDTO(Guid id, IntroductionRequestId introductionRequestId,
        UserId userFrom, UserId userMiddle, UserId userTo,
        Message presentationMessage, Message introductionMessage,
        IntroductionState introductionState, bool active)
        {
            this.Id = id;
            this.IntroductionRequestId = introductionRequestId;

            this.UserFrom = userFrom;
            this.UserMiddle = userMiddle;
            this.UserTo = userTo;

            this.PresentationMessage = presentationMessage.Text;
            this.IntroductionMessage = introductionMessage.Text;

            this.IntroductionState = introductionState.State;

            this.Active = active;
        }
    }
}