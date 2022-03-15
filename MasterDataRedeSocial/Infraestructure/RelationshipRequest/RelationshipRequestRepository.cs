using DDDSample1.Domain.Users.domain;
using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Domain.RelationshipRequests;

using System.Threading.Tasks;
using System.Collections.Generic;

using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Infraestructure.RelationshipRequests
{
    public class RelationshipRequestRepository : BaseRepository<RelationshipRequest, RelationshipRequestId>, IRelationshipRequestRepository
    {

        private readonly DbSet<RelationshipRequest> _db;

        public RelationshipRequestRepository(DDDSample1DbContext context) : base(context.RelationshipRequests)
        {
            this._db = context.RelationshipRequests;
        }

        public async Task<List<RelationshipRequest>> GetPendingRequest(UserId id)
        {
            string query = $"SELECT * FROM [RelationshipRequests] WHERE [UserTo]='{id.Value}' AND [RelationshipRequestState_activeState]='PENDING'";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }

        public async Task<List<RelationshipRequest>> CheckIfRelationshipRequest(UserId userTo, UserId userFrom)
        {
            string query = $"SELECT * FROM [RelationshipRequests] WHERE [UserFrom]='{userFrom.Value}' AND [UserTo]='{userTo.Value}' AND ([RelationshipRequestState_activeState]='PENDING' OR [RelationshipRequestState_activeState]='APROVED')";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }
    }
}