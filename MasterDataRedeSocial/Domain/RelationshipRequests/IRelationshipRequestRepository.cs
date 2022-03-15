using DDDSample1.Domain.Shared;
using DDDSample1.Domain.RelationshipRequests;
using System.Collections.Generic;
using DDDSample1.Domain.Users;
using DDDSample1.Domain.Users.domain;
using System;
using System.Threading.Tasks;


namespace DDDSample1.Domain.RelationshipRequests
{
    public interface IRelationshipRequestRepository : IRepository<RelationshipRequest, RelationshipRequestId>
    {
        Task<List<RelationshipRequest>> GetPendingRequest(UserId id);

        Task<List<RelationshipRequest>> CheckIfRelationshipRequest(UserId userTo, UserId userFrom);
    }
}