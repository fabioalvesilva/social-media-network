using System;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;

namespace DDDSample1.Domain.Groups
{
    public class GroupDTO
    {
        public Guid Id { get; set; }

        public ISet<Guid> UserIdList { get; set; }

        public ISet<string> Tags { get; set; }

        public GroupDTO(Guid id, ISet<UserId> userIdList, ISet<Tag> tags)
        {
            this.Id = id;
            this.UserIdList = new HashSet<Guid>();
            this.Tags = new HashSet<string>();

            foreach (Tag tag in tags)
            {
                Tags.Add(tag.Text);
            }

            foreach (UserId user in userIdList)
            {
                UserIdList.Add(user.AsGuid());
            }
        }
    }
}
