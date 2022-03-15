using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace DDDSample1.Domain.Shared.ValueObjects
{

    [ComplexType]
    public class Message : IValueObject
    {
        public string Text { get; private set; }

        private Message()
        {

        }

        public Message(string text)
        {
            if (String.IsNullOrEmpty(text))
            {
                throw new BusinessRuleValidationException("It is not possible to have a empty message.");
            }

            this.Text = text;
        }

        public void ChangeText(string text)
        {
            if (String.IsNullOrEmpty(text))
            {
                throw new BusinessRuleValidationException(
                    "It is not possible to have a empty message.");
            }
            
            this.Text = text;
        }

    }
}
