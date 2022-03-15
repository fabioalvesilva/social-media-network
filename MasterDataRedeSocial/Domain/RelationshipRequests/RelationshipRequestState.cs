using System;
using System.ComponentModel.DataAnnotations.Schema;

using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.RelationshipRequests
{

    public enum RelationshipRequestStateNum
    {
        PENDING, APPROVED, REJECTED
    }

    [ComplexType]
    public class RelationshipRequestState : IValueObject
    {
        public string activeState { get; private set; }
        public DateTime timestamp { get; private set; }

        public RelationshipRequestState()
        {
            activeState = RelationshipRequestStateNum.PENDING.ToString();
            this.timestamp = DateTime.Now;
        }

        public RelationshipRequestState(string state)
        {
            //Business rule
            if (!Enum.IsDefined(typeof(RelationshipRequestStateNum), state.ToUpper()))
            {
                string errmsg = "State should be one of: ";

                //get all State available
                foreach (RelationshipRequestStateNum m in Enum.GetValues(typeof(RelationshipRequestStateNum)))
                {
                    errmsg = String.Concat(errmsg, m, ",");
                }

                throw new BusinessRuleValidationException(errmsg);
            }

            this.activeState = state.ToUpper();
            this.timestamp = DateTime.Now;
        }

        public String toString()
        {
            return this.activeState;
        }
    }

}