using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using System.Collections.Generic;

namespace DDDSample1.Domain.Users.dto
{
    public class UpdatingUserDTO
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Email { get; set; }

        public string Password { get; set; }

        public string Birthdate { get; set; }

        public string PhoneNumber { get; set; }

        public string Linkedin { get; set; }

        public string Facebook { get; set; }

        public bool Active { get; set; }

        public string Mood { get; set; }

        public string Avatar { get; set; }

        public ISet<string> Tags { get; set; }

        public UpdatingUserDTO(string id, string name, string email,
                                string password, string birthdate, string phoneNumber,
                                 string linkedin, string facebook, string mood, ISet<string> tags,
                                 string avatar)
        {
            Id = id;
            Name = name;
            Email = email;
            Password = password;
            Birthdate = birthdate;
            PhoneNumber = phoneNumber;
            Linkedin = linkedin;
            Facebook = facebook;
            Mood = mood;
            Tags = new HashSet<string>();

            foreach (string tag in tags)
            {
                Tags.Add(tag);
            }

            Avatar = avatar;
        }
    }
}
