using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Shared.ValueObjects
{

    [ComplexType]
    public class Password : IValueObject
    {
        public string password;

        public Password()
        {

        }

        public Password(string password)
        {
            this.password = password;
        }
    }
}
