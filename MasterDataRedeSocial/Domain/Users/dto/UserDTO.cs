using System;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;

namespace DDDSample1.Domain.Users.dto
{
    public class UserDTO
    {
        public Guid Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Birthdate { get; set; }

        public string PhoneNumber { get; set; }

        public string Linkedin { get; set; }

        public string Facebook { get; set; }
        public bool Active { get; set; }

        public string Mood { get; set; }

        public ISet<string> Tags { get; set; }

        public string Avatar { get; set; }

        public UserDTO(Guid id, Name name, Email email, Password password,
         Birthdate birthdate, PhoneNumber phoneNumber, Linkedin linkedin,
         Facebook facebook, Mood mood, ISet<Tag> tags, Avatar avatar)
        {
            this.Id = id;
            this.Name = name.name;
            this.Email = email.email;
            this.Password = password.password;
            this.Birthdate = birthdate.date;
            this.PhoneNumber = phoneNumber.number;
            this.Linkedin = linkedin.url;
            this.Facebook = facebook.url;
            this.Mood = mood.activeMood;
            this.Tags = new HashSet<string>();

            foreach (Tag tag in tags)
            {
                Tags.Add(tag.Text);
            }

            this.Avatar = avatar.activeAvatar;

        }
    }
}
