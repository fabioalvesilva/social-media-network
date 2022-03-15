using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using System.Collections.Generic;
using System.Threading.Tasks;
using System;

namespace DDDSample1.Domain.Groups
{
    public class GroupService
    {

        private readonly IUnitOfWork _unitOfWork;
        private readonly IGroupRepository _repo;

        public GroupService(IUnitOfWork unitOfWork, IGroupRepository repo)
        {
            this._unitOfWork = unitOfWork;
            this._repo = repo;
        }

        public async Task<List<GroupDTO>> GetAllAsync()
        {
            var list = await this._repo.GetAllAsync();

            List<GroupDTO> listDto =
            list.ConvertAll<GroupDTO>(group => new GroupDTO(
                group.Id.AsGuid(), group.UserIdList, group.TagsList));

            return listDto;
        }

        public async Task<GroupDTO> AddAsync(CreatingGroupDTO dto)
        {
            ISet<Tag> listTags = new HashSet<Tag>();
            ISet<UserId> listUsers = new HashSet<UserId>();

            foreach (Guid user in dto.UserIdList)
            {
                listUsers.Add(new UserId(user));
            }

            foreach (string tag in dto.Tags)
            {
                listTags.Add(new Tag(tag));
            }

            var group = new Group(listUsers, listTags);

            await this._repo.AddAsync(group);

            await this._unitOfWork.CommitAsync();

            return new GroupDTO(group.Id.AsGuid(), group.UserIdList, group.TagsList);
        }

        public async Task<GroupDTO> UpdateAsync(UpdatingGroupDTO dto)
        {
            var group = await this._repo.GetGroupById(dto.Id);

            if (group == null)
            {
                return null;
            }

            ISet<Tag> listTags = new HashSet<Tag>();
            ISet<UserId> listUsers = new HashSet<UserId>();

            foreach (Guid user in dto.UserIdList)
            {
                listUsers.Add(new UserId(user));
            }

            foreach (string tag in dto.Tags)
            {
                listTags.Add(new Tag(tag));
            }

            group.setTagsList(listTags);
            group.setUserIdList(listUsers);

            await this._unitOfWork.CommitAsync();

            return new GroupDTO(group.Id.AsGuid(), group.UserIdList, group.TagsList);
        }

        public async Task<GroupDTO> DeleteAsync(GroupId groupId)
        {
            var group = await this._repo.GetByIdAsync(groupId);

            if (group == null)
                return null;

            this._repo.Remove(group);
            await this._unitOfWork.CommitAsync();

            return new GroupDTO(group.Id.AsGuid(), group.UserIdList, group.TagsList);
        }

        public async Task<GroupDTO> GetByIdAsync(GroupId groupId)
        {
            var group = await this._repo.GetByIdAsync(groupId);

            if (group == null)
            {
                return null;
            }

            return new GroupDTO(group.Id.AsGuid(), group.UserIdList, group.TagsList);
        }

        
        public async Task<List<GroupDTO>> GetGroupsByUserId(Guid userId)
        {
            List<GroupDTO> list = new List<GroupDTO>();
            var listgroups = await this._repo.GetGroupsByUserId(userId.ToString());

            if (listgroups == null)
            {
                return null;
            }

            foreach (Group g in listgroups)
            {
                list.Add(new GroupDTO(g.Id.AsGuid(),g.UserIdList,g.TagsList));
            }

            return list;
        }
    }
}
