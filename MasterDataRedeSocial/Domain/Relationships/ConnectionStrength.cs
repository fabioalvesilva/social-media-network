using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Relationships
{
    [ComplexType]
    public class ConnectionStrength : IValueObject
    {
        public int Value;

        public ConnectionStrength()
        {

        }

        public ConnectionStrength(int value)
        {
            this.Value = value;
        }
    }
}