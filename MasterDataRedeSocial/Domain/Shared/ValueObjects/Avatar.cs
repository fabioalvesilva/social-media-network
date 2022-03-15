using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Shared.ValueObjects
{

    public enum AvatarEnum
    {
        Male, Female, Duck, Droid, Cat, Statue
    }

    [ComplexType]
    public class Avatar : IValueObject
    {

        public string activeAvatar { get; private set; }

        public Avatar()
        {
            activeAvatar = AvatarEnum.Duck.ToString();
        }

        public Avatar(string avatar)
        {
            //Business rule
            if (!Enum.IsDefined(typeof(AvatarEnum), avatar))
            {
                string errmsg = "Avatar should be one of: ";
                //get all moods available
                foreach (AvatarEnum m in Enum.GetValues(typeof(AvatarEnum)))
                {
                    errmsg = String.Concat(errmsg, m, ",");
                }

                throw new BusinessRuleValidationException(errmsg);
            }

            this.activeAvatar = avatar;
        }

        public String toString()
        {
            return this.activeAvatar;
        }

    }
}
