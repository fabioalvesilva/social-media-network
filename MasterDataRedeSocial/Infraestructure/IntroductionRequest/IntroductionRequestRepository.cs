using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Domain.IntroductionRequests;
using System.Threading.Tasks;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Infraestructure.IntroductionRequests
{
    public class IntroductionRequestRepository : BaseRepository<IntroductionRequest, IntroductionRequestId>, IIntroductionRequestRepository
    {

        private readonly DbSet<IntroductionRequest> _db;
        public IntroductionRequestRepository(DDDSample1DbContext context) : base(context.IntroductionRequests)
        { this._db = context.IntroductionRequests; }

        public async Task<List<IntroductionRequest>> GetIntroductionByUserId(string id)
        {
            string query = $"SELECT * FROM [IntroductionRequests] WHERE [UserMiddle]='{id}' AND [Active] = 'true' AND [IntroductionRequestState_State] = 'PENDING'";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }

    }
}
