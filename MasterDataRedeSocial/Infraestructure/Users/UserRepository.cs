using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.repository;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace DDDSample1.Infraestructure.Users
{
    public class UserRepository : BaseRepository<User, UserId>, IUserRepository
    {

        private readonly DbSet<User> _db;

        public UserRepository(DDDSample1DbContext context) : base(context.Users)
        {
            this._db = context.Users;
        }


        public async Task<List<User>> GetAllUsers(string id)
        {
            string query = $"SELECT * FROM [Users] WHERE ID IN (SELECT id FROM [Users] WHERE ID <> '{id}' " +
                $"EXCEPT SELECT UserTo FROM [Relationships] WHERE UserFrom = '{id}')";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }

        public async Task<List<User>> GetAllUsersInCommon(string userFrom, string userTo)
        {

            string query = $"SELECT * FROM [Users] WHERE ID IN (SELECT UserTo FROM [Relationships] WHERE UserFrom = '{userFrom}' " +
                $"INTERSECT SELECT UserTo FROM [Relationships] WHERE UserFrom = '{userTo}')";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }


        public async Task<User> GetUserByEmail(string email)
        {
            string query = $"SELECT * FROM [Users] WHERE [Email_email]='{email}'";

            var user = await this._db.FromSqlRaw(query).FirstOrDefaultAsync();

            return user;
        }

        public async Task<User> GetUserByName(string name)
        {
            string query = $"SELECT * FROM [Users] WHERE [Name_name]='{name}'";

            var user = await this._db.FromSqlRaw(query).FirstOrDefaultAsync();

            return user;
        }

        public async Task<User> Authenticate(string email, string pwd)
        {
            string query = $"SELECT * FROM [Users] WHERE [Email_email]='{email}' AND [Password_password]='{pwd}'";

            var result = await this._db.FromSqlRaw(query).FirstOrDefaultAsync();

            return result;
        }

        public async Task<List<User>> GetUserWithSameTags(string id)
        {
            string query = $"SELECT * FROM [Users] WHERE [Id] IN (SELECT [UserId] FROM [Users_TagsList] WHERE [Text] IN (Select [Text] FROM [Users_TagsList] WHERE [UserId] = '{id}')) AND [Active] = 'true' AND NOT [Id] = '{id}'";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }

        public async Task<List<User>> GetUserFriendsThirdLevel(string userId)
        {
            string query = $"SELECT * FROM [Users] WHERE [Id] IN (SELECT DISTINCT [UserTo] FROM [Relationships] WHERE [UserFrom] IN (SELECT [UserTo] FROM [Relationships] WHERE [UserFrom] IN (SELECT [UserTo] FROM [Relationships] WHERE [UserFrom] = '{userId}') OR [UserTo] IN (SELECT [UserTo] FROM [Relationships] WHERE [UserFrom] = '{userId}')) AND [UserTo] <> '{userId}') AND [Active] = 1";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }

    }
}
