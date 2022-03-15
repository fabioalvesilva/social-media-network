using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Relationships
{
    [ComplexType]
    public class RelationshipStrength : IValueObject
    {
        public int Value;

        public RelationshipStrength()
        {

        }

        public RelationshipStrength(int value)
        {
            this.Value = value;
        }
    }
}
