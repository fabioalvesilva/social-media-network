using DDDSample1.Domain.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace DDDSample1.Domain.IntroductionRequests
{
    public interface IIntroductionRequestRepository : IRepository<IntroductionRequest, IntroductionRequestId>
    {
        Task<List<IntroductionRequest>> GetIntroductionByUserId(string id);
    }
}