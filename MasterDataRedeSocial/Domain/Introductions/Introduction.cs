using System;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using System.ComponentModel.DataAnnotations.Schema;
using DDDSample1.Domain.IntroductionRequests;

namespace DDDSample1.Domain.Introductions
{
    public class Introduction : Entity<IntroductionId>
    {

        [ForeignKey("IntroductionRequest")]
        public IntroductionRequestId IntroductionRequestId { get; private set; }

        [ForeignKey("User")]
        public UserId UserFrom { get; private set; }

        [ForeignKey("User")]
        public UserId UserMiddle { get; private set; }

        [ForeignKey("User")]
        public UserId UserTo { get; private set; }

        public Message PresentationMessage { get; private set; } // A_C

        public Message IntrodutionMessage { get; private set; } // B_C

        public DateTime TimeStamp { get; private set; }

        public IntroductionState IntroductionState { get; private set; }

        public bool Active { get; private set; }

        private Introduction()
        {
            this.TimeStamp = DateTime.Now;
            this.Active = true;
        }

        public Introduction(IntroductionRequestId IntroductionRequest,
                             UserId userFrom, UserId userMiddle, UserId userTo,
                            Message presentationMessage, Message introdutionMessage, IntroductionState introductionState)
        {
            ValidateUsers(userFrom, userMiddle, userTo);

            this.Id = new IntroductionId(Guid.NewGuid());
            this.IntroductionRequestId = IntroductionRequest;

            this.UserFrom = userFrom;
            this.UserMiddle = userMiddle;
            this.UserTo = userTo;

            this.PresentationMessage = presentationMessage;
            this.IntrodutionMessage = introdutionMessage;

            this.IntroductionState = introductionState;
            this.TimeStamp = DateTime.Now;
            this.Active = true;
        }

        public void ChangeState(IntroductionState newState)
        {
            if (!this.Active)
            {
                throw new BusinessRuleValidationException("It is not possible to change the state to an inactive introduction.");
            }

            if (!this.IntroductionState.State.ToString().Equals("PENDING"))
            {
                throw new BusinessRuleValidationException("It is not possible to change the state of a "
                + this.IntroductionState.State.ToString().ToLower() + " introduction.");
            }

            if (newState.State.ToString().Equals("PENDING"))
            {
                throw new BusinessRuleValidationException("It is not possible to change the state from pending to pending state of a introduction.");
            }
            this.IntroductionState = newState;
        }
        public void MarkAsInative()
        {
            this.Active = false;
        }

        private Boolean ValidateUsers(UserId userFrom, UserId userMiddle, UserId userTo)
        {
            if (userFrom == userMiddle || userMiddle == userTo || userTo == userFrom)
            {
                throw new BusinessRuleValidationException(
                "It is not possible to have a introduction with yourself. :(");
            }

            return true;
        }
    }
}