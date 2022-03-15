using DDDSample1.Infrastructure;
using DDDSample1.Infrastructure.Shared;
using DDDSample1.Domain.Introductions;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace DDDSample1.Infraestructure.Introductions
{
    public class IntroductionRepository : BaseRepository<Introduction, IntroductionId>, IIntroductionRepository
    {

        private readonly DbSet<Introduction> _db;

        public IntroductionRepository(DDDSample1DbContext context) : base(context.Introduction)
        {
            this._db = context.Introduction;
        }

          public async Task<List<Introduction>> GetIntroductionByUserId(string id)
        {
            string query = $"SELECT * FROM [Introduction] WHERE [UserTo]='{id}' AND [active] = 'true' AND [IntroductionState_State] = 'PENDING'";

            return await this._db.FromSqlRaw(query).ToListAsync();
        }

    }
}
