using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace DDDSample1.Domain.Shared.ValueObjects
{

    [ComplexType]
    public class Linkedin : IValueObject
    {
        public string url;

        public Linkedin()
        {

        }

        public Linkedin(string url)
        {
            Regex regex = new Regex(@"^[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$");
            //Regex regex = new Regex(@"^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$");
            Match match = regex.Match(url);
            if (!match.Success)
            {
                string errmsg = "Invallid Linkedin's username format!";
                throw new BusinessRuleValidationException(errmsg);
            }
            this.url = url;
        }
    }
}
