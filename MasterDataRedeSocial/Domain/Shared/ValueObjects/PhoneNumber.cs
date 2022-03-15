using DDDSample1.Domain.Shared;

using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace DDDSample1.Domain.Shared.ValueObjects
{

    [ComplexType]
    public class PhoneNumber : IValueObject
    {
        public string number;

        public PhoneNumber()
        {

        }

        public PhoneNumber(string number)
        {
            Regex regex = new Regex(@"^([\+]?[0-9]{1,3}[\s.-][0-9]{1,12})([\s.-]?[0-9]{1,4}?)$");
            Match match = regex.Match(number);
            if (!match.Success)
            {
                string errmsg = "Invallid phone number format!";
                throw new BusinessRuleValidationException(errmsg);
            }
            this.number = number;
        }
    }
}
