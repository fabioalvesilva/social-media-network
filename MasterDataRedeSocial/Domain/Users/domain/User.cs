using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using System;
using System.Collections.Generic;

namespace DDDSample1.Domain.Users.domain
{
    public class User : Entity<UserId>, IAggregateRoot
    {

        public Name Name { get; private set; }

        public Email Email { get; private set; }

        public Password Password { get; private set; }

        public Birthdate Birthdate { get; private set; }

        public PhoneNumber PhoneNumber { get; private set; }

        public Linkedin Linkedin { get; private set; }

        public Facebook Facebook { get; private set; }

        public bool Active { get; private set; }

        public ISet<Tag> TagsList { get; private set; }

        public Mood Mood { get; private set; }

        public Avatar Avatar { get; private set; }


        public User()
        {
            this.Active = true;
            this.TagsList = new HashSet<Tag>();
        }

        public User(Name name, Email email, Password password, Birthdate birthdate, PhoneNumber phoneNumber,
        Linkedin linkedin, Facebook facebook, Mood mood, ISet<Tag> tags, Avatar avatar)
        {
            this.Id = new UserId(Guid.NewGuid());
            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Birthdate = birthdate;
            this.PhoneNumber = phoneNumber;
            this.Linkedin = linkedin;
            this.Facebook = facebook;
            this.Active = true;
            this.TagsList = tags;
            this.Mood = mood;
            this.Avatar = avatar;
        }

        public User(UserId id, Name name, Email email, Password password, Birthdate birthdate,
        PhoneNumber phoneNumber, Linkedin linkedin, Facebook facebook, Mood mood, ISet<Tag> tags, Avatar avatar)
        {
            this.Id = id;
            this.Name = name;
            this.Email = email;
            this.Password = password;
            this.Birthdate = birthdate;
            this.PhoneNumber = phoneNumber;
            this.Linkedin = linkedin;
            this.Facebook = facebook;
            this.Active = true;
            this.TagsList = tags;
            this.Mood = mood;
            this.Avatar = avatar;
        }

        public void setName(string name)
        {

            this.Name = new Name(name);
        }

        public void setEmail(string email)
        {

            this.Email = new Email(email);
        }

        public void setBirthdate(string date)
        {

            this.Birthdate = new Birthdate(date);
        }

        public void setPassword(string pwd)
        {

            this.Password = new Password(pwd);
        }

        public void setPhoneNumber(string number)
        {

            this.PhoneNumber = new PhoneNumber(number);
        }

        public void setLinkedin(string url)
        {

            this.Linkedin = new Linkedin(url);
        }


        public void setFacebook(string url)
        {

            this.Facebook = new Facebook(url);
        }

        public void setTag(Tag tag)
        {
            this.TagsList.Add(tag);
        }

        public void setListTags(ISet<Tag> tags)
        {
            this.TagsList = tags;
        }

        public void MarkAsInative()
        {
            this.Active = false;
        }

        public void setMood(String mood)
        {
            this.Mood = new Mood(mood);
        }


        public void seAvatar(String avatar)
        {
            this.Avatar = new Avatar(avatar);
        }

    }

}
