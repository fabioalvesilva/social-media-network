
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using System;
using System.Collections.Generic;
using Xunit;

namespace MasterDataRedeSocialTests.Domain.Users
{


    public class UserTests
    {

        private Name name = new Name("Quim");
        private Email email = new Email("quim@isep.ipp.pt");
        private Password password = new Password("quimpass");
        private Birthdate birthdate = new Birthdate("1993-12-16");
        private PhoneNumber phoneNumber = new PhoneNumber("486-366-7113");
        private Facebook facebook = new Facebook("quimAlberto");
        private Linkedin linkedin = new Linkedin("quimAlberto");
        private Mood mood = new Mood();
        private Avatar avatar = new Avatar();

        [Fact]
        public void UserConstructor()
        {

            ISet<Tag> tagLists = new HashSet<Tag>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            var userId = new UserId(Guid.NewGuid());
            var user = new User(userId, this.name, this.email, this.password, this.birthdate, this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);

            Assert.Equal(userId, user.Id);
            Assert.Equal(this.name.name, user.Name.name);
            Assert.Equal(this.email.email, user.Email.email);
            Assert.Equal(this.password.password, user.Password.password);
            Assert.Equal(this.birthdate.date, user.Birthdate.date);
            Assert.Equal(this.phoneNumber.number, user.PhoneNumber.number);
            Assert.Equal(this.facebook.ToString(), user.Facebook.ToString());
            Assert.Equal(this.linkedin.ToString(), user.Linkedin.ToString());
        }

    }
}
