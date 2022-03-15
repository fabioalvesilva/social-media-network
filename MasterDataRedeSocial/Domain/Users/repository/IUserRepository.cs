using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace DDDSample1.Domain.Users.repository
{

    public interface IUserRepository : IRepository<User, UserId>
    {
        Task<User> GetUserByEmail(string email);
        Task<User> GetUserByName(string name);
        Task<User> Authenticate(string email, string pwd);
        Task<List<User>> GetUserWithSameTags(string id);
        Task<List<User>> GetAllUsers(string id);
        Task<List<User>> GetAllUsersInCommon(string userFromId, string userToId);
        Task<List<User>> GetUserFriendsThirdLevel(string userId);
    }
}
