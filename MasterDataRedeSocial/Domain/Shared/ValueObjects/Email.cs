using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace DDDSample1.Domain.Shared.ValueObjects
{
    [ComplexType]
    public class Email : IValueObject
    {
        public string email;

        public Email()
        {

        }

        public Email(string email)
        {
            Regex regex = new Regex(@"^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$");
            Match match = regex.Match(email);
            if (!match.Success)
            {
                string errmsg = "Invallid email format!";
                throw new BusinessRuleValidationException(errmsg);
            }


            this.email = email;
        }
    }
}
