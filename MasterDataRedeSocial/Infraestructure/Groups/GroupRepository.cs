using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Domain.Groups;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace DDDSample1.Infraestructure.Groups
{
    public class GroupRepository : BaseRepository<Group, GroupId>, IGroupRepository
    {

        private readonly DbSet<Group> _db;

        public GroupRepository(DDDSample1DbContext context) : base(context.Groups)
        {
            this._db = context.Groups;
        }

        public async Task<Group> GetGroupById(string id)
        {
            string query = $"SELECT * FROM [Groups] WHERE [Id]='{id}'";

            return await this._db.FromSqlRaw(query).FirstAsync();
        }

        public async Task<List<Group>> GetGroupsByUserId(string id)
        {
            string query = $"SELECT * FROM [Groups] WHERE [Id] IN (SELECT [GroupId] FROM [UserId] WHERE [Value]='{id}')";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }

    }
}
