using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.repository;


namespace DDDSample1.Domain.Introductions
{
    public class IntroductionService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IIntroductionRepository _repo;
        private readonly IUserRepository _repoUser;
        private readonly IIntroductionRequestRepository _repoItReq;

        public IntroductionService(IUnitOfWork unitOfWork, IIntroductionRepository repo,
        IUserRepository repoUser, IIntroductionRequestRepository repoItReq)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
            this._repoUser = repoUser;
            this._repoItReq = repoItReq;
        }

        public async Task<List<IntroductionDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<IntroductionDTO> listDto = list.ConvertAll<IntroductionDTO>(req =>
             new IntroductionDTO(req.Id.AsGuid()
             , req.IntroductionRequestId, req.UserFrom, req.UserMiddle, req.UserTo, req.PresentationMessage, req.IntrodutionMessage, req.IntroductionState, req.Active));

            return listDto;
        }

        public async Task<IntroductionDTO> GetByIdAsync(IntroductionId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            return new IntroductionDTO(req.Id.AsGuid()
             , req.IntroductionRequestId, req.UserFrom, req.UserMiddle, req.UserTo,
             req.PresentationMessage, req.IntrodutionMessage, req.IntroductionState, req.Active);
        }


        public async Task<List<IntroductionDTO>> GetByUserIdAsync(UserId id)
        {
            var list = await this._repo.GetIntroductionByUserId(id.Value);

            if (list == null)
                return null;

            List<IntroductionDTO> listDto = list.ConvertAll<IntroductionDTO>(introduction => new IntroductionDTO(
                introduction.Id.AsGuid(), introduction.IntroductionRequestId, introduction.UserFrom,
                introduction.UserMiddle, introduction.UserTo, introduction.PresentationMessage,
                introduction.IntrodutionMessage, introduction.IntroductionState, introduction.Active));


            return listDto;
        }

        public async Task<List<IntroductionCardDTO>> GetByUserIdCardAsync(UserId id)
        {
            var list = await this._repo.GetIntroductionByUserId(id.Value);

            if (list == null)
                return null;

            List<IntroductionCardDTO> listDto = new();

            foreach (Introduction i in list)
            {
                var itRequest = await this._repoItReq.GetByIdAsync(i.IntroductionRequestId);
                var userFrom = await this._repoUser.GetByIdAsync(i.UserFrom);
                var userMiddle = await this._repoUser.GetByIdAsync(i.UserMiddle);
                var userTo = await this._repoUser.GetByIdAsync(i.UserTo);

                IntroductionCardDTO itCardDTO = new IntroductionCardDTO(
                    i.Id.AsGuid(), itRequest.Id.AsString(), userFrom.Id.AsString(), userFrom.Name.name,
                    userMiddle.Id.AsString(), userMiddle.Name.name, userTo.Id.AsString(),
                    userTo.Name.name, i.PresentationMessage.Text,
                    i.IntrodutionMessage.Text, i.IntroductionState.State, i.Active);

                listDto.Add(itCardDTO);
            }
            return listDto;
        }

        public async Task<IntroductionDTO> AddAsync(CreatingIntroductionDto dto)
        {
            IntroductionState stateTemp = new IntroductionState("PENDING");

            var req = new Introduction(new IntroductionRequestId(dto.IntroductionRequestId), new UserId(dto.UserFrom), new UserId(dto.UserMiddle), new UserId(dto.UserTo),
            new Shared.ValueObjects.Message(dto.PresentationMessage), new Shared.ValueObjects.Message(dto.IntroductionMessage), stateTemp);

            await this._repo.AddAsync(req);

            await this._unitOfWork.CommitAsync();


            return new IntroductionDTO(req.Id.AsGuid()
             , req.IntroductionRequestId, req.UserFrom, req.UserMiddle, req.UserTo,
             req.PresentationMessage, req.IntrodutionMessage, req.IntroductionState, req.Active);
        }

        public async Task<IntroductionDTO> UpdateAsync(UpdatingIntroductionDto dto)
        {
            var req = await this._repo.GetByIdAsync(new IntroductionId(dto.Id));

            if (req == null)
                return null;

            // change request state
            req.ChangeState(new IntroductionState(dto.IntroductionState));

            await this._unitOfWork.CommitAsync();


            return new IntroductionDTO(req.Id.AsGuid()
             , req.IntroductionRequestId, req.UserFrom, req.UserMiddle, req.UserTo,
             req.PresentationMessage, req.IntrodutionMessage, req.IntroductionState, req.Active);
        }

        public async Task<IntroductionDTO> InactivateAsync(IntroductionId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            // change all fields
            req.MarkAsInative();

            await this._unitOfWork.CommitAsync();


            return new IntroductionDTO(req.Id.AsGuid()
             , req.IntroductionRequestId, req.UserFrom, req.UserMiddle, req.UserTo,
             req.PresentationMessage, req.IntrodutionMessage, req.IntroductionState, req.Active);
        }

        public async Task<IntroductionDTO> DeleteAsync(IntroductionId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            if (req.Active)
                throw new BusinessRuleValidationException("It is not possible to delete an request introduction.");

            this._repo.Remove(req);
            await this._unitOfWork.CommitAsync();


            return new IntroductionDTO(req.Id.AsGuid()
             , req.IntroductionRequestId, req.UserFrom, req.UserMiddle, req.UserTo,
             req.PresentationMessage, req.IntrodutionMessage, req.IntroductionState, req.Active);
        }
    }
}