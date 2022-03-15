using DDDSample1.Domain.Relationships;
using DDDSample1.Infrastructure.Shared;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DDDSample1.Infrastructure.Relationships
{
    public class RelationshipRepository : BaseRepository<Relationship, RelationshipId>, IRelationshipRepository
    {

        private readonly DbSet<Relationship> _db;

        public RelationshipRepository(DDDSample1DbContext context) : base(context.Relationships)
        {

            this._db = context.Relationships;

        }

        public async Task<List<Relationship>> GetAllUserRelationships(string userId)
        {

            string query = $"SELECT * FROM [Relationships] WHERE [UserFrom]='{userId}'";
            
            return await this._db.FromSqlRaw(query).ToListAsync();
        }

        public async Task<Relationship> GetRelationByUsers(string userFromId, string userToId)
        {
            string query = $"SELECT * FROM [Relationships] WHERE [UserFrom]='{userFromId}' AND [UserTo]='{userToId}'";

            return await this._db.FromSqlRaw(query).FirstAsync();
        }

    }
}