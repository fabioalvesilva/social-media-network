using DDDSample1.Domain.Shared;
using System.Threading.Tasks;
using System.Collections.Generic;

namespace DDDSample1.Domain.Groups
{
    public interface IGroupRepository : IRepository<Group, GroupId>
    {
        Task<Group> GetGroupById(string id);

        Task<List<Group>> GetGroupsByUserId(string id);
    }
}
