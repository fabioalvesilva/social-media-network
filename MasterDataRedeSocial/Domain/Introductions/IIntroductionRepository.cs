using DDDSample1.Domain.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;


namespace DDDSample1.Domain.Introductions
{
    public interface IIntroductionRepository : IRepository<Introduction, IntroductionId>
    {
        Task<List<Introduction>> GetIntroductionByUserId(string id);
    }
}