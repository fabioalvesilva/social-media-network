using System;
using System.ComponentModel.DataAnnotations.Schema;

using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.IntroductionRequests
{

    public enum IntroductionRequestStateEnum { PENDING, APPROVED, REJECTED }
    
    [ComplexType]
    public class IntroductionRequestState : IValueObject
    {
        public string State { get; private set; }

        public DateTime timestamp { get; private set; }

        public IntroductionRequestState()
        {
            State = IntroductionRequestStateEnum.PENDING.ToString();
            this.timestamp = DateTime.Now;
        }

        public IntroductionRequestState(string mood)
        {
            //Business rule
            if (!Enum.IsDefined(typeof(IntroductionRequestStateEnum), mood.ToUpper()))
            {
                string errmsg = "State should be one of: ";
                //get all moods available
                foreach (IntroductionRequestStateEnum m in Enum.GetValues(typeof(IntroductionRequestStateEnum)))
                {
                    errmsg = String.Concat(errmsg, m, ",");
                }

                throw new BusinessRuleValidationException(errmsg);
            }

            this.State = mood.ToUpper();
            this.timestamp = DateTime.Now;
        }

        public String toString()
        {
            return this.State;
        }


    }

}