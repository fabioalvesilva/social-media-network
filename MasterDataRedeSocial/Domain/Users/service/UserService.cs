using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.dto;
using DDDSample1.Domain.Users.repository;
using DDDSample1.Domain.Planeamentos;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;
using System.Linq;

namespace DDDSample1.Domain.Users.service
{
    public class UserService
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IUserRepository _repo;

        public UserService(IUnitOfWork unitOfWork, IUserRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
        }

        public async Task<UserDTO> Authenticate(string email, string pwd)
        {

            var user = await this._repo.Authenticate(email, pwd);


            if (user == null)
            {
                throw new BusinessRuleValidationException("User does not exists.");
            }

            if (!user.Active)

                throw new BusinessRuleValidationException("This account is not active.");


            return new UserDTO(
                user.Id.AsGuid(), user.Name,
                user.Email, user.Password,
                user.Birthdate, user.PhoneNumber,
                user.Linkedin, user.Facebook,
                user.Mood, user.TagsList, user.Avatar);
        }

        public async Task<List<UserDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<UserDTO> listDto =
            list.ConvertAll<UserDTO>(user => new UserDTO(
                user.Id.AsGuid(), user.Name,
                user.Email, user.Password,
                user.Birthdate, user.PhoneNumber,
                user.Linkedin, user.Facebook,
                user.Mood, user.TagsList, user.Avatar));

            return listDto;
        }

        public async Task<int> GetNumberUsers()
        {
            var list = await this._repo.GetAllAsync();

            List<UserDTO> listDto =
            list.ConvertAll<UserDTO>(user => new UserDTO(
                user.Id.AsGuid(), user.Name,
                user.Email, user.Password,
                user.Birthdate, user.PhoneNumber,
                user.Linkedin, user.Facebook,
                user.Mood, user.TagsList, user.Avatar));

            return listDto.Count;
        }

        public async Task<List<UserDTO>> GetAllUsersInCommonAsync(string userOneId, string userTwoId)
        {
            var list = await this._repo.GetAllUsersInCommon(userOneId, userTwoId);

            List<UserDTO> listDto =
            list.ConvertAll<UserDTO>(user => new UserDTO(
                user.Id.AsGuid(), user.Name,
                user.Email, user.Password,
                user.Birthdate, user.PhoneNumber,
                user.Linkedin, user.Facebook,
                user.Mood, user.TagsList, user.Avatar));

            return listDto;
        }

        public async Task<List<UserDTO>> GetAllUsersAsync(UserId id)
        {
            var list = await this._repo.GetAllUsers(id.AsString());

            List<UserDTO> listDto =
            list.ConvertAll<UserDTO>(user => new UserDTO(
                user.Id.AsGuid(), user.Name,
                user.Email, user.Password,
                user.Birthdate, user.PhoneNumber,
                user.Linkedin, user.Facebook,
                user.Mood, user.TagsList, user.Avatar));

            return listDto;
        }

        public async Task<UserDTO> GetByIdAsync(UserId userId)
        {
            var user = await this._repo.GetByIdAsync(userId);

            if (user == null)
            {
                return null;
            }

            return new UserDTO(
                user.Id.AsGuid(), user.Name,
                user.Email, user.Password,
                user.Birthdate, user.PhoneNumber,
                user.Linkedin, user.Facebook,
                user.Mood, user.TagsList, user.Avatar);
        }

        public async Task<UserDTO> GetByEmailAsync(Email email)
        {
            User user = await this._repo.GetUserByEmail(email.email);

            if (user == null)
            {
                return null;
            }

            return new UserDTO(
               user.Id.AsGuid(), user.Name,
               user.Email, user.Password,
               user.Birthdate, user.PhoneNumber,
               user.Linkedin, user.Facebook,
               user.Mood, user.TagsList, user.Avatar);
        }

          public async Task<UserDTO> GetUserByName(Name name)
        {
            User user = await this._repo.GetUserByName(name.name);

            if (user == null)
            {
                return null;
            }

            return new UserDTO(
               user.Id.AsGuid(), user.Name,
               user.Email, user.Password,
               user.Birthdate, user.PhoneNumber,
               user.Linkedin, user.Facebook,
               user.Mood, user.TagsList, user.Avatar);
        }

        public async Task<List<UserDTO>> GetWithSameTagsByIDAsync(Guid userId)
        {
            var list = await this._repo.GetUserWithSameTags(userId.ToString());

            if (list == null)
                return null;

            List<UserDTO> listDto = new();

            foreach (User user in list)
            {
                UserDTO userDto = new UserDTO(user.Id.AsGuid(), user.Name,
                user.Email, user.Password, user.Birthdate, user.PhoneNumber, user.Linkedin,
                user.Facebook, user.Mood, user.TagsList, user.Avatar);

                listDto.Add(userDto);
            }
            return listDto;
        }

        public async Task<List<PlaneamentoUserDTO>> GetUsersPlanemento()
        {
            var list = await this._repo.GetAllAsync();



            List<PlaneamentoUserDTO> listDto =
            list.ConvertAll<PlaneamentoUserDTO>(user => new PlaneamentoUserDTO(user.Name.name, user.Mood.activeMood, user.TagsList));

            return listDto;
        }

        public async Task<UserDTO> AddAsync(CreatingUserDTO dto)
        {
            //Check if User EMail Already Exists in BD
            User usermail = await this._repo.GetUserByEmail(dto.Email);

            if (usermail != null)
                throw new BusinessRuleValidationException("A user with this email already exists");


            ISet<Tag> listTags = new HashSet<Tag>();

            Mood mood = new Mood(dto.Mood);

            Avatar avatar = new Avatar(dto.Avatar);

            foreach (string tag in dto.Tags)
            {
                listTags.Add(new Tag(tag));
            }

            var user = new User(
                new Name(dto.Name),
                new Email(dto.Email),
                new Password(dto.Password),
                new Birthdate(dto.Birthdate),
                new PhoneNumber(dto.PhoneNumber),
                new Linkedin(dto.Linkedin),
                new Facebook(dto.Facebook),
                mood,
                listTags,
                avatar);


            await this._repo.AddAsync(user);

            await this._unitOfWork.CommitAsync();

            return new UserDTO(
                user.Id.AsGuid(), user.Name,
                user.Email, user.Password,
                user.Birthdate, user.PhoneNumber,
                user.Linkedin, user.Facebook,
                user.Mood, user.TagsList, user.Avatar);
        }

        public async Task<UserDTO> UpdateAsync(UpdatingUserDTO dto)
        {
            var user = await this._repo.GetByIdAsync(new UserId(dto.Id));

            if (user == null)
            {
                return null;
            }

            if (!user.Active)
            {
                throw new BusinessRuleValidationException(
                   "It is not possible to changes to an inactive User.");
            }

            ISet<Tag> listTags = new HashSet<Tag>();

            foreach (string tag in dto.Tags)
            {
                listTags.Add(new Tag(tag));
            }


            // change all field
            user.setName(dto.Name);
            user.setPhoneNumber(dto.PhoneNumber);
            user.setPassword(dto.Password);
            user.setBirthdate(dto.Birthdate);
            //user.setEmail(dto.Email);
            user.setLinkedin(dto.Linkedin);
            user.setFacebook(dto.Facebook);
            user.setMood(dto.Mood);
            user.setListTags(listTags);
            user.seAvatar(dto.Avatar);

            await this._unitOfWork.CommitAsync();

            return new UserDTO(
             user.Id.AsGuid(), user.Name,
             user.Email, user.Password,
             user.Birthdate, user.PhoneNumber,
             user.Linkedin, user.Facebook,
             user.Mood, user.TagsList, user.Avatar);
        }

        public async Task<UserDTO> InactivateAsync(UserId userId)
        {
            var user = await this._repo.GetByIdAsync(userId);

            if (user == null)
                return null;

            var name = "user_inactive";
            var email = "user_inactive" + DateTime.Now.ToString("yyyymmdd") + "@inactive.com";
            var phone = "000-000-000";
            var linkedin = "inactive_"+ DateTime.Now.ToString("yyyymmdd");
            var facebook = "inactive_"+ DateTime.Now.ToString("yyyymmdd");

            user.setName(name);
            user.setEmail(email);
            user.setPhoneNumber(phone);
            user.setLinkedin(linkedin);
            user.setFacebook(facebook);

            user.MarkAsInative();

            await this._unitOfWork.CommitAsync();

            return new UserDTO(
               user.Id.AsGuid(), new Name(name),
               new Email(email), user.Password,
               user.Birthdate, user.PhoneNumber,
               user.Linkedin, user.Facebook,
               user.Mood, user.TagsList, user.Avatar
          );
        }

        public async Task<UserDTO> DeleteAsync(UserId userId)
        {
            var user = await this._repo.GetByIdAsync(userId);

            if (user == null)
                return null;

            if (user.Active)
                throw new BusinessRuleValidationException("It is not possible to delete an active user.");

            this._repo.Remove(user);
            await this._unitOfWork.CommitAsync();

            return new UserDTO(
               user.Id.AsGuid(), user.Name,
               user.Email, user.Password,
               user.Birthdate, user.PhoneNumber,
               user.Linkedin, user.Facebook,
               user.Mood, user.TagsList, user.Avatar
          );
        }
        public async Task<List<TagCountDTO>> GetAllUsersTags()
        {
            var users = await this._repo.GetAllAsync();

            List<Tag> list = (from b in users from a in b.TagsList select a).ToList();

            List<TagCountDTO> listTags = (from t in list
                                          group t by t.Text into grp
                                          select new TagCountDTO { Tag = grp.Key, Count = grp.Count() }).ToList();

            return listTags;
        }

        public async Task<List<UserDTO>> GetUserFriendsThirdLevel(UserId userId)
        {
            var list = await this._repo.GetUserFriendsThirdLevel(userId.Value.ToString());

            List<UserDTO> listDto = list.ConvertAll<UserDTO>(user => new UserDTO(
               user.Id.AsGuid(), user.Name,
               user.Email, user.Password,
               user.Birthdate, user.PhoneNumber,
               user.Linkedin, user.Facebook,
               user.Mood, user.TagsList, user.Avatar));

            return listDto;
        }
    }
}
