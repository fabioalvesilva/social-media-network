using System;
using System.ComponentModel.DataAnnotations.Schema;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Shared.ValueObjects;

namespace DDDSample1.Domain.IntroductionRequests
{
    public class IntroductionRequest : Entity<IntroductionRequestId>, IAggregateRoot
    {

        [ForeignKey("User")]
        public UserId UserFrom { get; private set; }

        [ForeignKey("User")]
        public UserId UserMiddle { get; private set; }

        [ForeignKey("User")]
        public UserId UserTo { get; private set; }

        public Message RequestMesssage { get; private set; } // A_B

        public Message PresentationMessage { get; private set; } // A_C

        public IntroductionRequestState IntroductionRequestState { get; private set; }

        public bool Active { get; private set; }

        private IntroductionRequest()
        {
            this.Active = true;
        }

        public IntroductionRequest(UserId userFrom, UserId userMiddle, UserId userTo, Message requestMesssage, Message presentationMessage, IntroductionRequestState introductionRequestState)
        {
            ValidateUsers(userFrom, userMiddle, userTo);
            this.Id = new IntroductionRequestId(Guid.NewGuid());
            this.UserFrom = userFrom;
            this.UserMiddle = userMiddle;
            this.UserTo = userTo;
            this.RequestMesssage = requestMesssage;
            this.PresentationMessage = presentationMessage;
            this.IntroductionRequestState = introductionRequestState;
            this.Active = true;
        }

        public void ChangeState(IntroductionRequestState newState)
        {
            if (!this.Active)
            {
                throw new BusinessRuleValidationException("It is not possible to change the state to an inactive request.");

            }
            if (!this.IntroductionRequestState.State.ToString().Equals("PENDING"))
            {
                throw new BusinessRuleValidationException("It is not possible to change the state of a "
                + this.IntroductionRequestState.State.ToString().ToLower() + " introduction request.");
            }

            if (newState.State.ToString().Equals("PENDING"))
            {
                throw new BusinessRuleValidationException("It is not possible to change the state from pending to pending state of a introduction request.");
            }

            this.IntroductionRequestState = newState;
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
                "It is not possible to have a introductionRequest with yourself. :(");
            }

            return true;
        }


    }
}