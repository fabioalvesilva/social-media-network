using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using System;
using System.Collections.Generic;

namespace DDDSample1.Domain.Groups
{
    public class Group : Entity<GroupId>, IAggregateRoot
    {

        public ISet<UserId> UserIdList { get; private set; }

        public ISet<Tag> TagsList { get; private set; }

        public Group()
        {
            this.UserIdList = new HashSet<UserId>();
            this.TagsList = new HashSet<Tag>();
        }

        public Group(ISet<UserId> userIdList, ISet<Tag> tags)
        {
            this.Id = new GroupId(Guid.NewGuid());
            this.UserIdList = userIdList;
            this.TagsList = tags;
        }

        public void setTag(Tag tag)
        {
            this.TagsList.Add(tag);
        }

        public void setTagsList(ISet<Tag> tags)
        {
            this.TagsList = tags;
        }

        public void setUserId(UserId user)
        {
            this.UserIdList.Add(user);
        }

        public void setUserIdList(ISet<UserId> userIdList)
        {
            this.UserIdList = userIdList;
        }
    }
}
