using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Shared.ValueObjects
{
    public enum MoodEnum
    {
        JOYFUL, DISTRESSED,
        HOPEFUL, FEARFUL,
        RELIEVE, DISAPPOINTED,
        PROUD, REMORSEFUL,
        GRATEFUL, ANGRY,
        MEDIUM, HIGH,
        TOBEDEFINED
    }

    [ComplexType]
    public class Mood : IValueObject
    {

        public string activeMood { get; private set; }
        public DateTime timestamp { get; private set; }

        public Mood()
        {
            activeMood = MoodEnum.TOBEDEFINED.ToString();
            this.timestamp = DateTime.Now;
        }

        public Mood(string mood)
        {
            //Business rule
            if (!Enum.IsDefined(typeof(MoodEnum), mood.ToUpper()))
            {
                string errmsg = "Mood should be one of: ";
                //get all moods available
                foreach (MoodEnum m in Enum.GetValues(typeof(MoodEnum)))
                {
                    errmsg = String.Concat(errmsg, m, ",");
                }

                throw new BusinessRuleValidationException(errmsg);
            }

            this.activeMood = mood.ToUpper();
            this.timestamp = DateTime.Now;
        }

        public String toString()
        {
            return this.activeMood;
        }

    }
}
