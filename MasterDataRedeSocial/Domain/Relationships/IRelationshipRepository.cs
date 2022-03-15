using DDDSample1.Domain.Shared;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DDDSample1.Domain.Relationships
{
    public interface IRelationshipRepository: IRepository<Relationship, RelationshipId>
    {
        Task<List<Relationship>> GetAllUserRelationships(string userId);

        Task<Relationship> GetRelationByUsers(string userFromId, string userToId);

    }
}