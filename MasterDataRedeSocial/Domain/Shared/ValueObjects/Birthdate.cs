using System.ComponentModel.DataAnnotations.Schema;
using System;

namespace DDDSample1.Domain.Shared.ValueObjects
{
    [ComplexType]
    public class Birthdate : IValueObject
    {
        public string date;

        public Birthdate()
        {

        }

        public Birthdate(string date)
        {
            DateTime dt;
            DateTime.TryParseExact(date, "yyyy-MM-dd", null, System.Globalization.DateTimeStyles.None, out dt);

            if (dt == DateTime.MinValue)
            {
                string errmsg = "Invallid date format, should be yyyy-mm-dd!";
                throw new BusinessRuleValidationException(errmsg);
            }

            this.date = date;
        }
    }
}
