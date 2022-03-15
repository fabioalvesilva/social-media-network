using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.repository;


namespace DDDSample1.Domain.IntroductionRequests
{
    public class IntroductionRequestService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IIntroductionRequestRepository _repo;
        private readonly IUserRepository _repoUser;

        public IntroductionRequestService(IUnitOfWork unitOfWork, IIntroductionRequestRepository repo, IUserRepository repoUser)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;

            this._unitOfWork = unitOfWork;
            this._repo = repo;
            this._repoUser = repoUser;
        }

        public async Task<List<IntroductionRequestDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<IntroductionRequestDTO> listDto = list.ConvertAll<IntroductionRequestDTO>(req =>
             new IntroductionRequestDTO(req.Id.AsGuid(), req.UserFrom, req.UserMiddle, req.UserTo,
             req.RequestMesssage, req.PresentationMessage, req.IntroductionRequestState, req.Active));

            return listDto;
        }

        public async Task<List<IntroductionRequestCardDTO>> GetByUserIdAsync(UserId id)
        {
            var list = await this._repo.GetIntroductionByUserId(id.Value);

            if (list == null)
                return null;

            List<IntroductionRequestCardDTO> listDto = new();

            foreach (IntroductionRequest i in list)
            {
                var userFrom = await this._repoUser.GetByIdAsync(i.UserFrom);
                var userMiddle = await this._repoUser.GetByIdAsync(i.UserMiddle);
                var userTo = await this._repoUser.GetByIdAsync(i.UserTo);

                IntroductionRequestCardDTO itCardDTO = new IntroductionRequestCardDTO(
                    i.Id.AsGuid(), userFrom.Id.AsString(), userFrom.Name.name,
                    userMiddle.Id.AsString(), userMiddle.Name.name, userTo.Id.AsString(),
                    userTo.Name.name, i.RequestMesssage.Text, i.PresentationMessage.Text,
                    i.IntroductionRequestState.State, i.Active);

                listDto.Add(itCardDTO);
            }
            return listDto;
        }


        public async Task<IntroductionRequestDTO> GetByIdAsync(IntroductionRequestId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            return new IntroductionRequestDTO(req.Id.AsGuid(), req.UserFrom, req.UserMiddle, req.UserTo,
             req.RequestMesssage, req.PresentationMessage, req.IntroductionRequestState, req.Active);
        }

        public async Task<IntroductionRequestDTO> AddAsync(CreatingIntroductionRequestDto dto)
        {
            IntroductionRequestState stateTemp = new IntroductionRequestState("PENDING");

            var req = new IntroductionRequest(new UserId(dto.UserFrom), new UserId(dto.UserMiddle), new UserId(dto.UserTo),
            new Shared.ValueObjects.Message(dto.RequestMessage),
            new Shared.ValueObjects.Message(dto.PresentationMessage), stateTemp);

            await this._repo.AddAsync(req);

            await this._unitOfWork.CommitAsync();

            return new IntroductionRequestDTO(req.Id.AsGuid(), req.UserFrom, req.UserMiddle, req.UserTo,
             req.RequestMesssage, req.PresentationMessage, req.IntroductionRequestState, req.Active);
        }

        public async Task<IntroductionRequestDTO> UpdateAsync(UpdatingIntroductionRequestDto dto)
        {
            var req = await this._repo.GetByIdAsync(new IntroductionRequestId(dto.Id));

            if (req == null)
                return null;

            // change all field
            req.ChangeState(new IntroductionRequestState(dto.IntroductionRequestState));

            await this._unitOfWork.CommitAsync();

            return new IntroductionRequestDTO(req.Id.AsGuid(), req.UserFrom, req.UserMiddle, req.UserTo,
             req.RequestMesssage, req.PresentationMessage, req.IntroductionRequestState, req.Active);
        }

        public async Task<IntroductionRequestDTO> InactivateAsync(IntroductionRequestId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            // change all fields
            req.MarkAsInative();

            await this._unitOfWork.CommitAsync();

            return new IntroductionRequestDTO(req.Id.AsGuid(), req.UserFrom, req.UserMiddle, req.UserTo,
             req.RequestMesssage, req.PresentationMessage, req.IntroductionRequestState, req.Active);
        }

        public async Task<IntroductionRequestDTO> DeleteAsync(IntroductionRequestId id)
        {
            var req = await this._repo.GetByIdAsync(id);

            if (req == null)
                return null;

            if (req.Active)
                throw new BusinessRuleValidationException("It is not possible to delete an request category.");

            this._repo.Remove(req);
            await this._unitOfWork.CommitAsync();

            return new IntroductionRequestDTO(req.Id.AsGuid(), req.UserFrom, req.UserMiddle, req.UserTo,
             req.RequestMesssage, req.PresentationMessage, req.IntroductionRequestState, req.Active);
        }
    }
}