using System;
using System.ComponentModel.DataAnnotations.Schema;
using DDDSample1.Domain.Shared;

namespace DDDSample1.Domain.IntroductionRequests
{
    public enum IntroductionStateEnum { PENDING, APPROVED, REJECTED }
    
        [ComplexType]
    public class IntroductionState : IValueObject
    {



        public string State { get; private set; }
        public DateTime timestamp { get; private set; }


        public IntroductionState()
        {
            State = IntroductionStateEnum.PENDING.ToString();
            this.timestamp = DateTime.Now;
        }

        public IntroductionState(string state)
        {
            //Business rule
            if (!Enum.IsDefined(typeof(IntroductionStateEnum), state.ToUpper()))
            {
                string errmsg = "Introduction State should be one of: ";
                //get all moods available
                foreach (IntroductionStateEnum m in Enum.GetValues(typeof(IntroductionStateEnum)))
                {
                    errmsg = String.Concat(errmsg, m, ",");
                }

                throw new BusinessRuleValidationException(errmsg);
            }

            this.State = state.ToUpper();
            this.timestamp = DateTime.Now;
        }

        public String toString()
        {
            return this.State;
        }


    }

}