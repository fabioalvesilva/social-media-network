using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Shared.ValueObjects
{

    [ComplexType]
    public class Name : IValueObject
    {
        public string name;

        public Name()
        {

        }

        public Name(string name)
        {
            if (String.IsNullOrEmpty(name))
            {
                throw new BusinessRuleValidationException(
                    "It is not possible to have a empty name.");
            }

            this.name = name;
        }
    }
}
