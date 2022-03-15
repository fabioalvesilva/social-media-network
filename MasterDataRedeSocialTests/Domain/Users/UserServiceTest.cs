using DDDSample1.Domain.Users.repository;
using DDDSample1.Domain.Users.service;
using System.Threading.Tasks;
using Moq;
using DDDSample1.Domain.Shared;
using System;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.dto;
using System.Collections.Generic;
using Xunit;

namespace MasterDataRedeSocialTests.Domain.Users
{

    public class UserServiceTest
    {

        private Mock<IUnitOfWork> _unitOfWorkMock = new Mock<IUnitOfWork>();
        private Mock<IUserRepository> _userRepositoryMock = new Mock<IUserRepository>();

        private List<User> usersList = new List<User>();

        private Name name = new Name("Quim");
        private Email email = new Email("quim@isep.ipp.pt");
        private Password password = new Password("quimpass");
        private Birthdate birthdate = new Birthdate("1993-12-16");
        private PhoneNumber phoneNumber = new PhoneNumber("486-366-7113");
        private Facebook facebook = new Facebook("quimAlberto");
        private Linkedin linkedin = new Linkedin("quimAlberto");
        private Mood mood = new Mood("JOYFUL");
        private Avatar avatar = new Avatar("Male");

        [Fact]
        public async Task ShouldGetByIdAsync()
        {
            ISet<Tag> tagLists = new HashSet<Tag>();
            ISet<string> tagListString = new HashSet<string>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            foreach (Tag tag in tagLists)
            {
                tagListString.Add(tag.ToString());
            }

            var userId = new UserId(Guid.NewGuid());
            var user = new User(userId, this.name, this.email, this.password, this.birthdate, this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);
            var userDto = new CreatingUserDTO(name.ToString(), email.ToString(), password.ToString(), birthdate.ToString(), phoneNumber.ToString(), linkedin.ToString(),
                facebook.ToString(), this.mood.ToString(), tagListString, this.avatar.toString());

            this._userRepositoryMock.Setup(repo => repo.GetByIdAsync(userId)).ReturnsAsync(user);

            var _userService = new UserService(_unitOfWorkMock.Object, _userRepositoryMock.Object);

            var result = await _userService.GetByIdAsync(userId);

            Assert.Equal(userId.AsString(), result.Id.ToString());

        }

        [Fact]
        public async Task ShouldCreateUserAsync()
        {
            ISet<Tag> tagLists = new HashSet<Tag>();
            ISet<string> tagListString = new HashSet<string>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            foreach (Tag tag in tagLists)
            {
                tagListString.Add(tag.ToString());
            }


            var user = new User(this.name, this.email, this.password, this.birthdate,
            this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);

            var userDto = new CreatingUserDTO(this.name.name, this.email.email, this.password.password,
                        this.birthdate.date, this.phoneNumber.number, this.linkedin.url, this.facebook.url,
                        this.mood.activeMood, tagListString, this.avatar.activeAvatar);

            var _userService = new UserService(this._unitOfWorkMock.Object, this._userRepositoryMock.Object);

            this._userRepositoryMock.Setup(repo => repo.AddAsync(user));
            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            var result = await _userService.AddAsync(userDto);

            Assert.Equal(user.Name.name, result.Name);
            Assert.Equal(user.Email.email, result.Email);
            Assert.Equal(user.PhoneNumber.number, result.PhoneNumber);
        }

        [Fact]
        public async Task ShouldUpdateAsync()
        {

            ISet<Tag> tagLists = new HashSet<Tag>();
            ISet<string> tagListString = new HashSet<string>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            foreach (Tag tag in tagLists)
            {
                tagListString.Add(tag.ToString());
            }

            Name nameNew = new Name("Roscas");
            Email emailNew = new Email("roscas@isep.ipp.pt");
            Password passwordNew = new Password("roscaspass");
            Birthdate birthdateNew = new Birthdate("1993-03-03");
            PhoneNumber phoneNumberNew = new PhoneNumber("911-111-111");
            Facebook facebookNew = new Facebook("roscasAlberto");
            Linkedin linkedinNew = new Linkedin("roscasAlberto");

            var userId = new UserId(Guid.NewGuid());

            var userUpdated = new User(userId, nameNew, emailNew, passwordNew, birthdateNew, phoneNumberNew, linkedinNew, facebookNew, this.mood, tagLists, this.avatar);

            var userDto = new UpdatingUserDTO(userId.AsString(), userUpdated.Name.name, userUpdated.Email.email, userUpdated.Password.password, userUpdated.Birthdate.date, userUpdated.PhoneNumber.number,
                userUpdated.Linkedin.url, userUpdated.Facebook.url, "JOYFUL", tagListString, "Male");

            this._userRepositoryMock.Setup(repo => repo.GetByIdAsync(userId)).ReturnsAsync(userUpdated);

            var _userService = new UserService(this._unitOfWorkMock.Object, this._userRepositoryMock.Object);

            var updatedResult = await _userService.UpdateAsync(userDto);

            this._unitOfWorkMock.Setup(u => u.CommitAsync());

            Assert.Equal(userDto.Id.ToString(), updatedResult.Id.ToString());
            Assert.Equal(nameNew.name, updatedResult.Name.ToString());
            Assert.Equal(passwordNew.password, updatedResult.Password.ToString());
            Assert.Equal(emailNew.email, updatedResult.Email.ToString());
            Assert.Equal(phoneNumberNew.number, updatedResult.PhoneNumber.ToString());
        }

        [Fact]
        public async Task ShouldGetAllUsers()
        {

            ISet<Tag> tagLists = new HashSet<Tag>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            var user1 = new User(new UserId(Guid.NewGuid()), this.name, this.email, this.password, this.birthdate, this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);
            var user2 = new User(new UserId(Guid.NewGuid()), new Name("Roscas"), new Email("roscas@isep.ipp.pt"), new Password("roscaspass"), new Birthdate("1993-09-09"), new PhoneNumber("911-111-111"), new Linkedin("roscasAlberto"), new Facebook("roscasAlberto"), this.mood, tagLists, this.avatar);
            var user3 = new User(new UserId(Guid.NewGuid()), this.name, this.email, this.password, this.birthdate, this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);

            this.usersList.Add(user1);
            this.usersList.Add(user2);
            this.usersList.Add(user3);

            this._userRepositoryMock.Setup(repo => repo.GetAllAsync()).ReturnsAsync(this.usersList);
            var _userService = new UserService(this._unitOfWorkMock.Object, this._userRepositoryMock.Object);

            var result = await _userService.GetAllAsync();

            Assert.Equal(user1.Id.AsString(), result[0].Id.ToString());
            Assert.Equal(user1.Name.name, result[0].Name.ToString());
            Assert.Equal(user1.Email.email, result[0].Email.ToString());

            Assert.Equal(user2.Id.AsString(), result[1].Id.ToString());
            Assert.Equal(user2.Name.name, result[1].Name.ToString());
            Assert.Equal(user2.Email.email, result[1].Email.ToString());

            Assert.Equal(user3.Id.AsString(), result[2].Id.ToString());
            Assert.Equal(user3.Name.name, result[2].Name.ToString());
            Assert.Equal(user3.Email.email, result[2].Email.ToString());

        }

        [Fact]
        public async Task ShouldNotDeleteActivateUserAsync()
        {

            ISet<Tag> tagLists = new HashSet<Tag>();
            ISet<string> tagListString = new HashSet<string>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            foreach (Tag tag in tagLists)
            {
                tagListString.Add(tag.ToString());
            }

            var userId = new UserId(Guid.NewGuid());
            var user = new User(userId, this.name, this.email, this.password, this.birthdate, this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);

            var userDto = new CreatingUserDTO(name.ToString(), email.ToString(), password.ToString(), birthdate.ToString(), phoneNumber.ToString(), linkedin.ToString(), facebook.ToString(), mood.ToString(), tagListString, avatar.toString());

            this._userRepositoryMock.Setup(repo => repo.GetByIdAsync(userId)).ReturnsAsync(user);

            var _userService = new UserService(_unitOfWorkMock.Object, _userRepositoryMock.Object);

            var result = await Assert.ThrowsAnyAsync<BusinessRuleValidationException>(() => _userService.DeleteAsync(userId));

            Assert.Equal("It is not possible to delete an active user.", result.Message);

        }

        [Fact]
        public async Task ShouldDeleteUserAsync()
        {

            ISet<Tag> tagLists = new HashSet<Tag>();
            ISet<string> tagListString = new HashSet<string>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            foreach (Tag tag in tagLists)
            {
                tagListString.Add(tag.ToString());
            }

            var userId = new UserId(Guid.NewGuid());
            var user = new User(userId, this.name, this.email, this.password, this.birthdate, this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);
            user.MarkAsInative();

            var userDto = new CreatingUserDTO(name.ToString(), email.ToString(), password.ToString(), birthdate.ToString(), phoneNumber.ToString(), linkedin.ToString(), facebook.ToString(), mood.ToString(), tagListString, avatar.toString());

            this._userRepositoryMock.Setup(repo => repo.GetByIdAsync(userId)).ReturnsAsync(user);

            var _userService = new UserService(_unitOfWorkMock.Object, _userRepositoryMock.Object);

            var result = await _userService.DeleteAsync(userId);

            Assert.Equal(userId.AsString(), result.Id.ToString());

        }

        [Fact]
        public async Task ShouldInactivateUserAsync()
        {

            ISet<Tag> tagLists = new HashSet<Tag>();
            ISet<string> tagListString = new HashSet<string>();

            tagLists.Add(new Tag("Redes de Comunicação"));
            tagLists.Add(new Tag("Engenharia de Software"));

            foreach (Tag tag in tagLists)
            {
                tagListString.Add(tag.ToString());
            }

            var userId = new UserId(Guid.NewGuid());
            var user = new User(userId, this.name, this.email, this.password, this.birthdate, this.phoneNumber, this.linkedin, this.facebook, this.mood, tagLists, this.avatar);

            var userDto = new CreatingUserDTO(name.ToString(), email.ToString(), password.ToString(), birthdate.ToString(), phoneNumber.ToString(), linkedin.ToString(), facebook.ToString(), mood.ToString(), tagListString, avatar.toString());

            this._userRepositoryMock.Setup(repo => repo.GetByIdAsync(userId)).ReturnsAsync(user);

            var _userService = new UserService(_unitOfWorkMock.Object, _userRepositoryMock.Object);

            var result = await _userService.InactivateAsync(userId);

            Assert.False(result.Active);
        }
    }
}
