using System;
using System.Threading.Tasks;
using System.Collections.Generic;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;
using MasterDataRedeSocial.Domain.RelationshipRequests;
using DDDSample1.Domain.Users.repository;

namespace DDDSample1.Domain.RelationshipRequests
{
    public class RelationshipRequestService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRelationshipRequestRepository _repo;
        private readonly IUserRepository _userRepo;

        public RelationshipRequestService(IUnitOfWork unitOfWork, IRelationshipRequestRepository repo, IUserRepository userRepo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
            this._userRepo = userRepo;
        }

        public async Task<List<RelationshipRequestDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<RelationshipRequestDTO> listDto = list.ConvertAll<RelationshipRequestDTO>(req =>
             new RelationshipRequestDTO(req.Id.AsGuid(), req.RelationshipRequestState, req.UserFrom, req.UserTo, req.Active));

            return listDto;
        }

        public async Task<List<RelationshipRequestCardDto>> GetPendingRequest(UserId id)
        {
            var list = await this._repo.GetPendingRequest(id);

            if (list == null)
            {
                return null;
            }

            List<RelationshipRequestCardDto> result = new List<RelationshipRequestCardDto>();

            foreach (RelationshipRequest r in list)
            {
                User userFrom = await this._userRepo.GetByIdAsync(r.UserFrom);

                result.Add(new RelationshipRequestCardDto(r.Id.AsGuid(), r.RelationshipRequestState, userFrom.Name.name, userFrom.Email.email, userFrom.Id.AsString()));
            }

            return result;
        }

        //public async Task<List<RelationshipRequestDTO>> GetPendingRequest(UserId id)
        //{
        //    var list = await this._repo.GetPendingRequest(id);

        //    if (list == null)
        //    {
        //        return null;
        //    }

        //    List<RelationshipRequestDTO> listDto = list.ConvertAll<RelationshipRequestDTO>(req =>
        //      new RelationshipRequestDTO(req.Id.AsGuid(), req.RelationshipRequestState, req.UserFrom, req.UserTo, req.Active));

        //    return listDto;
        //}

        public async Task<RelationshipRequestDTO> GetByIdAsync(RelationshipRequestId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            return new RelationshipRequestDTO(req.Id.AsGuid(), req.RelationshipRequestState, req.UserFrom, req.UserTo, req.Active);
        }

        public async Task<RelationshipRequestDTO> AddAsync(CreatingRelationshipRequestDto dto)
        {
            var validation = await this._repo.CheckIfRelationshipRequest(new UserId(dto.UserTo), new UserId(dto.UserFrom));
            
            if (validation.Count > 0) {
                throw new BusinessRuleValidationException("It is not possible to ask an two request relationship for the same persone.");
            }

            RelationshipRequestState state = new RelationshipRequestState("PENDING");

            var req = new RelationshipRequest(state, new UserId(dto.UserFrom), new UserId(dto.UserTo));

            await this._repo.AddAsync(req);

            await this._unitOfWork.CommitAsync();

            return new RelationshipRequestDTO(req.Id.AsGuid(), req.RelationshipRequestState, req.UserFrom, req.UserTo, req.Active);
        }

        public async Task<UpdatingRelationshipRequestDto> UpdateAsync(UpdatingRelationshipRequestDto dto)
        {
            var req = await this._repo.GetByIdAsync(new RelationshipRequestId(dto.Id));

            if (req == null)
                return null;

            // change all field
            req.ChangeState(new RelationshipRequestState(dto.RelationshipRequestState));


            await this._unitOfWork.CommitAsync();
            return new UpdatingRelationshipRequestDto(req.Id.AsGuid().ToString(), req.RelationshipRequestState.activeState, req.UserFrom.AsString(), req.UserTo.AsString());
        }

        public async Task<RelationshipRequestDTO> InactivateAsync(RelationshipRequestId id)
        { 
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            // change all fields
            req.MarkAsInative();

            await this._unitOfWork.CommitAsync();

            return new RelationshipRequestDTO(req.Id.AsGuid(), req.RelationshipRequestState, req.UserFrom, req.UserTo, req.Active);
        }

        public async Task<RelationshipRequestDTO> DeleteAsync(RelationshipRequestId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            if (req.Active)
            {
                throw new BusinessRuleValidationException("It is not possible to delete an request relationship.");
            }

            this._repo.Remove(req);
            await this._unitOfWork.CommitAsync();

            return new RelationshipRequestDTO(req.Id.AsGuid(), req.RelationshipRequestState, req.UserFrom, req.UserTo, req.Active);
        }
    }
}