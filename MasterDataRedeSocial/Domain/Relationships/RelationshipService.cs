using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Domain.Users.repository;
using MasterDataRedeSocial.Domain.Relationships;
using System.Linq;
using DDDSample1.Domain.Users.dto;

namespace DDDSample1.Domain.Relationships
{
    public class RelationshipService
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IRelationshipRepository _repo;
        private readonly IUserRepository _userRepo;

        public RelationshipService(IUserRepository userRepo, IUnitOfWork unitOfWork, IRelationshipRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
            this._userRepo = userRepo;
        }

        public async Task<List<RelationshipDto>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<RelationshipDto> listDto =
            list.ConvertAll<RelationshipDto>(rela => new RelationshipDto(
                rela.Id.AsGuid(),
                rela.UserFrom, rela.UserTo,
                rela.ListTag,
                rela.ConnectionStrength,
                rela.RelationshipStrength,
                rela.RelationshipRequestId,
                rela.Active));

            return listDto;
        }

        public async Task<RelationshipDto> GetByIdAsync(RelationshipId id)
        {
            var rela = await this._repo.GetByIdAsync(id);

            if (rela == null)
            {
                return null;
            }

            return new RelationshipDto(rela.Id.AsGuid(), rela.UserFrom, rela.UserTo,
            rela.ListTag, rela.ConnectionStrength, rela.RelationshipStrength, rela.RelationshipRequestId, rela.Active);
        }


        public async Task<RelationshipDto> AddAsync(CreatingRelationshipDto dto)
        {
            ISet<Tag> listTag = new HashSet<Tag>();

            foreach (string tag in dto.ListTag)
            {
                listTag.Add(new Tag(tag));
            }

            //Bidirectional relationship From -> To ; To-> From 
            var rela = new Relationship(new UserId(dto.UserFrom), new UserId(dto.UserTo), listTag,
                        new ConnectionStrength(dto.ConnectionStrength), new RelationshipStrength(dto.RelationshipStrength),
                        new RelationshipRequestId(dto.RelationshipRequestId));

            var rela2 = new Relationship(new UserId(dto.UserTo), new UserId(dto.UserFrom), listTag,
                        new ConnectionStrength(dto.ConnectionStrength), new RelationshipStrength(dto.RelationshipStrength),
                        new RelationshipRequestId(dto.RelationshipRequestId));

            await this._repo.AddAsync(rela);
            await this._repo.AddAsync(rela2);

            await this._unitOfWork.CommitAsync();

            return new RelationshipDto(rela.Id.AsGuid(), rela.UserFrom, rela.UserTo, rela.ListTag,
                                    rela.ConnectionStrength, rela.RelationshipStrength, rela.RelationshipRequestId,
                                    rela.Active);
        }

        //public async Task<RelationshipDto> UpdateAsync(RelationshipDto dto)
        public async Task<RelationshipDto> UpdateAsync(UpdateRelationshipDto dto)
        {
            ISet<Tag> listTag = new HashSet<Tag>();
            foreach (string tag in dto.ListTag)
            {
                listTag.Add(new Tag(tag));
            }

            var rela = await this._repo.GetByIdAsync(new RelationshipId(dto.Id));

            if (rela == null)
            {
                return null;
            }

            rela.ChangeConnectionStrength(new ConnectionStrength(dto.ConnectionStrength));
            rela.ChangeRelationshipStrength(new RelationshipStrength(dto.RelationshipStrength));
            rela.ChangeListTag(listTag);

            await this._unitOfWork.CommitAsync();

            return new RelationshipDto(rela.Id.AsGuid(), rela.UserFrom, rela.UserTo, rela.ListTag, rela.ConnectionStrength, rela.RelationshipStrength, rela.RelationshipRequestId, rela.Active);
        }

        public async Task<RelationshipDto> InactivateAsync(RelationshipId id)
        {
            var rela = await this._repo.GetByIdAsync(id);

            if (rela == null)
            {
                return null;
            }

            rela.MarkAsInative();

            await this._unitOfWork.CommitAsync();

            return new RelationshipDto(rela.Id.AsGuid(), rela.UserFrom, rela.UserTo, rela.ListTag, rela.ConnectionStrength, rela.RelationshipStrength, rela.RelationshipRequestId, rela.Active);
        }

        public async Task<RelationshipDto> DeleteAsync(RelationshipId id)
        {
            var rela = await this._repo.GetByIdAsync(id);

            if (rela == null)
            {
                return null;
            }

            if (rela.Active)
            {
                throw new BusinessRuleValidationException("It is not possible to delete an active Relationship.");
            }

            this._repo.Remove(rela);
            await this._unitOfWork.CommitAsync();

            return new RelationshipDto(rela.Id.AsGuid(), rela.UserFrom, rela.UserTo, rela.ListTag, rela.ConnectionStrength, rela.RelationshipStrength, rela.RelationshipRequestId, rela.Active);
        }

        public async Task<List<RelationshipDto>> GetAllByUserIdAsync(UserId userId)
        {

            if (userId == null)
            {
                throw new BusinessRuleValidationException("User Id is null.");
            }

            List<Relationship> userRelationships = new List<Relationship>();
            List<RelationshipDto> userRelationshipsDto = new List<RelationshipDto>();

            userRelationships = await this._repo.GetAllUserRelationships(userId.Value);

            foreach (Relationship relation in userRelationships)
            {
                userRelationshipsDto.Add(new RelationshipDto(relation.Id.AsGuid(), relation.UserFrom, relation.UserTo, relation.ListTag, relation.ConnectionStrength, relation.RelationshipStrength,
                    relation.RelationshipRequestId, relation.Active));
            }

            return userRelationshipsDto;
        }

        public async Task<RelationshipDto> GetRelationByUsersAsync(UserId userFromId, UserId userToId)
        {

            if (userFromId == null || userToId == null)
            {
                throw new BusinessRuleValidationException("User Id is null.");
            }

            Relationship relationship;

            relationship = await this._repo.GetRelationByUsers(userFromId.Value, userToId.Value);

            if (relationship == null)
            {
                return null;
            }

            RelationshipDto rDTO = new RelationshipDto(relationship.Id.AsGuid(), relationship.UserFrom,
                relationship.UserTo, relationship.ListTag, relationship.ConnectionStrength, relationship.RelationshipStrength,
                relationship.RelationshipRequestId, relationship.Active);

            return rDTO;
        }


        public async Task<List<RelationshipCardDto>> GetAllFriendsByUserIdAsync(UserId userId)
        {

            if (userId == null)
            {
                throw new BusinessRuleValidationException("User Id is null.");
            }

            List<Relationship> userRelationships = new List<Relationship>();
            List<RelationshipCardDto> relationshipsDto = new List<RelationshipCardDto>();

            userRelationships = await this._repo.GetAllUserRelationships(userId.Value);

            foreach (Relationship relation in userRelationships)
            {

                var userTo = await this._userRepo.GetByIdAsync(new UserId(relation.UserTo.AsGuid()));
                var userFrom = await this._userRepo.GetByIdAsync(new UserId(relation.UserFrom.AsGuid()));

                relationshipsDto.Add(new RelationshipCardDto(relation.Id.AsGuid(), userFrom, userTo,
                    relation.ListTag, relation.ConnectionStrength, relation.RelationshipStrength, relation.RelationshipRequestId));
            }

            return relationshipsDto;
        }

        private async Task checkRelationshipIdAsync(RelationshipId relationshipId)
        {
            var category = await _repo.GetByIdAsync(relationshipId);
            if (category == null)
            {
                throw new BusinessRuleValidationException("Invalid Relationship Id.");
            }
        }

        public async Task<List<TagCountDTO>> GetAllRelationshipTags()
        {
            var relas = await this._repo.GetAllAsync();

            List<Tag> list = (from b in relas from a in b.ListTag select a).ToList();

            List<TagCountDTO> listTags = (from t in list
                                          group t by t.Text into grp
                                          select new TagCountDTO { Tag = grp.Key, Count = grp.Count() }).ToList();

            return listTags;
        }

        public async Task<List<Tag>> GetAllRelationshipTagsByUser(string id)
        {
            var relas = await this._repo.GetAllUserRelationships(id);

            List<Tag> listTags = (from b in relas from a in b.ListTag select a).ToList();


            return listTags;
        }

        public async Task<List<RelationshipLeaderBoardDto>> GetLeaderboardByNetworkConection()
        {
            List<Relationship> relations = await this._repo.GetAllAsync();
            List<User> users = await this._userRepo.GetAllAsync();

            var res = from e1 in relations
                      join e2 in users on e1.UserTo equals e2.Id
                      select new
                      {
                          UserID = e1.UserTo,
                          UserName = e2.Name
                      };

            List<RelationshipLeaderBoardDto> listUserCount = (from t in res
                                                              group t by t.UserName into grp
                                                              orderby grp.Count() descending
                                                              select new RelationshipLeaderBoardDto
                                                              {
                                                                  Name = grp.Key.name,
                                                                  Count = grp.Count()
                                                              }).ToList();

            return listUserCount;
        }

        public async Task<List<RelationshipLeaderBoardDto>> GetLeaderboardByNetworkFortress()
        {
            List<Relationship> relations = await this._repo.GetAllAsync();
            List<User> users = await this._userRepo.GetAllAsync();

            var sum = (from r in relations
                       group r by r.UserFrom into rgroup
                       orderby rgroup.Key descending
                       select new
                       {
                           ID = rgroup.Key.Value,
                           Count = rgroup.Sum(x => x.RelationshipStrength.Value)
                       }).ToList();

            List<RelationshipLeaderBoardDto> totalScore = (from e1 in sum
                                                           join e2 in users on e1.ID equals e2.Id.Value
                                                           orderby e1.Count descending
                                                           select new RelationshipLeaderBoardDto
                                                           {
                                                               Name = e2.Name.name,
                                                               Count = e1.Count
                                                           }).ToList();

            return totalScore;
        }

        public async Task<string> GetUserNetworkStrength(string id)
        {
            List<Relationship> relations = await this._repo.GetAllUserRelationships(id);

            var sum = relations.Sum(x => x.RelationshipStrength.Value);

            return sum.ToString();
        }
    }
}