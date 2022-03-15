using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using Xunit;
using DDDSample1.Domain.Groups;

namespace MasterDataRedeSocialTests.Domain.Groups
{
    public class GroupsTests
    {

        public ISet<UserId> userIdList = new HashSet<UserId>();
        public ISet<Tag> tagsList = new HashSet<Tag>();

        public UserId userOne = new UserId("19999999-9999-9999-9999-999999999999");
        public UserId userTwo = new UserId("29999999-9999-9999-9999-999999999999");
        public UserId userThree = new UserId("39999999-9999-9999-9999-999999999999");

        public Tag tagOne = new Tag("TagOne");
        public Tag tagTwo = new Tag("TagTwo");
        public Tag tagThree = new Tag("TagThree");

        [Fact]
        public void GroupsConstructor()
        {
            this.userIdList.Add(userOne);
            this.userIdList.Add(userTwo);
            this.userIdList.Add(userThree);

            this.tagsList.Add(tagOne);
            this.tagsList.Add(tagTwo);
            this.tagsList.Add(tagThree);

            Group g = new Group (this.userIdList, this.tagsList);

            Assert.Equal(g.TagsList, this.tagsList);
            Assert.Equal(g.UserIdList, this.userIdList);
        }

    }
}
