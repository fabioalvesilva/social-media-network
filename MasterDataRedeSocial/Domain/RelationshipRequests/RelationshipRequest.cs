using System;
using System.ComponentModel.DataAnnotations.Schema;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;

namespace DDDSample1.Domain.RelationshipRequests
{
    public class RelationshipRequest : Entity<RelationshipRequestId>, IAggregateRoot
    {

        [ForeignKey("User")]
        public UserId UserFrom { get; private set; }

        [ForeignKey("User")]
        public UserId UserTo { get; private set; }

        public RelationshipRequestState RelationshipRequestState { get; private set; }

        public DateTime TimeStamp { get; private set; }

        public bool Active { get; private set; }

        private RelationshipRequest()
        {
            this.TimeStamp = DateTime.Now;
            this.Active = true;
        }

        public RelationshipRequest(RelationshipRequestState relationshipRequestState, UserId userFrom, UserId userTo)
        {
            if (userFrom.Equals(userTo))
            {
                throw new BusinessRuleValidationException(
                    "It is not possible to have a relationshipo with yourself. :(");
            }

            this.Id = new RelationshipRequestId(Guid.NewGuid());
            this.RelationshipRequestState = relationshipRequestState;
            this.UserFrom = userFrom;
            this.UserTo = userTo;
            this.Active = true;
        }

        public void ChangeState(RelationshipRequestState newState)
        {
            if (!this.Active)
            {
                throw new BusinessRuleValidationException("It is not possible to change the state to an inactive request.");
            }

            if (!this.RelationshipRequestState.activeState.ToString().Equals("PENDING"))
            {
                throw new BusinessRuleValidationException("It is not possible to change the state of a "
                + this.RelationshipRequestState.activeState.ToString().ToLower() + " request.");
            }

            if (newState.activeState.ToString().Equals("PENDING"))
            {
                throw new BusinessRuleValidationException("It is not possible to change the state from pending to pending state of a request.");
            }

            this.RelationshipRequestState = newState;
        }

        public void MarkAsInative()
        {
            this.Active = false;
        }
    }
}