using System;
using DDDSample1.Domain.Shared;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Domain.Shared
{

    public class Tag : IValueObject
    {
        public string Text { get; private set; }

        private Tag()
        {
            
        }

        public Tag(string text)
        {
            this.Text = text;
        }

        public void ChangeText(string text)
        {
            this.Text = text;
        }
    }
}