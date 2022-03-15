using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DDDSample1.Domain.Groups;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using Moq;
using Xunit;

namespace MasterDataRedeSocialTests.Domain.Groups
{
    public class GroupsServiceTest
    {

        private Mock<IUnitOfWork> _unitOfWorkMock = new Mock<IUnitOfWork>();
        private Mock<IGroupRepository> _groupRepositoryMock = new Mock<IGroupRepository>();

        public ISet<UserId> userIdList = new HashSet<UserId>();
        public ISet<Tag> tagsList = new HashSet<Tag>();

        public UserId userOne = new UserId(Guid.NewGuid());
        public UserId userTwo = new UserId(Guid.NewGuid());
        public UserId userThree = new UserId(Guid.NewGuid());

        public Tag tagOne = new Tag("TagOne");
        public Tag tagTwo = new Tag("TagTwo");
        public Tag tagThree = new Tag("TagThree");

        private List<Group> listGroups = new List<Group>();

        [Fact]
        public async Task ShouldGetAllAsync()
        {
            this.userIdList.Add(userOne);
            this.userIdList.Add(userTwo);

            this.tagsList.Add(tagOne);
            this.tagsList.Add(tagTwo);

            ISet<UserId> userIdListOne = new HashSet<UserId>();
            ISet<Tag> tagsListOne = new HashSet<Tag>();

            userIdListOne.Add(userThree);
            tagsListOne.Add(tagThree);

            Group gOne = new Group(this.userIdList, this.tagsList);
            Group gtwo = new Group(userIdListOne, tagsListOne);

            listGroups.Add(gOne);
            listGroups.Add(gtwo);

            this._groupRepositoryMock.Setup(repo => repo.GetAllAsync()).ReturnsAsync(listGroups);

            var _groupsService = new GroupService(_unitOfWorkMock.Object, _groupRepositoryMock.Object);

            var list = await _groupsService.GetAllAsync();

            Assert.Equal(2, list.Count);
            Assert.Equal(gOne.TagsList.Count, list[0].Tags.Count);
            Assert.Equal(gOne.UserIdList.Count, list[0].UserIdList.Count);
            Assert.Equal(gtwo.TagsList.Count, list[1].Tags.Count);
            Assert.Equal(gtwo.UserIdList.Count, list[1].UserIdList.Count);
        }

        [Fact]
        public async Task ShouldCreateAsync()
        {
            this.userIdList.Add(userOne);
            this.userIdList.Add(userTwo);
            this.userIdList.Add(userThree);
            this.tagsList.Add(tagOne);
            this.tagsList.Add(tagTwo);
            this.tagsList.Add(tagThree);

            Group group = new Group(this.userIdList, this.tagsList);

            ISet<Guid> userIdList = new HashSet<Guid>();
            ISet<string> tagsList = new HashSet<string>();

            userIdList.Add(userOne.AsGuid());
            userIdList.Add(userTwo.AsGuid());
            userIdList.Add(userThree.AsGuid());
            tagsList.Add(tagOne.Text);
            tagsList.Add(tagTwo.Text);
            tagsList.Add(tagThree.Text);

            CreatingGroupDTO cGroup = new CreatingGroupDTO(userIdList, tagsList);

            this._groupRepositoryMock.Setup(repo => repo.AddAsync(group)).ReturnsAsync(group);

            var _groupsService = new GroupService(_unitOfWorkMock.Object, _groupRepositoryMock.Object);

            var result = await _groupsService.AddAsync(cGroup);

            Assert.Equal(result.UserIdList.Count, group.UserIdList.Count);
            Assert.Equal(result.Tags.Count, group.TagsList.Count);
        }

        [Fact]
        public async Task ShouldUpdateAsync()
        {
            GroupId gId = new GroupId(Guid.NewGuid());

            this.userIdList.Add(userOne);
            this.userIdList.Add(userTwo);
            this.userIdList.Add(userThree);
            this.tagsList.Add(tagOne);
            this.tagsList.Add(tagTwo);
            this.tagsList.Add(tagThree);

            Group group = new Group(this.userIdList, this.tagsList);

            ISet<Guid> userIdList = new HashSet<Guid>();
            ISet<string> tagsList = new HashSet<string>();

            userIdList.Add(userOne.AsGuid());
            userIdList.Add(userTwo.AsGuid());
            userIdList.Add(userThree.AsGuid());
            tagsList.Add(tagOne.Text);
            tagsList.Add(tagTwo.Text);
            tagsList.Add(tagThree.Text);

            UpdatingGroupDTO uGroup = new UpdatingGroupDTO(gId.AsString(), userIdList, tagsList);

            this._groupRepositoryMock.Setup(repo => repo.GetGroupById(gId.AsString())).ReturnsAsync(group);

            var _groupsService = new GroupService(_unitOfWorkMock.Object, _groupRepositoryMock.Object);

            var result = await _groupsService.UpdateAsync(uGroup);

            Assert.Equal(result.Id.ToString(), group.Id.AsString());
            Assert.Equal(result.UserIdList.Count, group.UserIdList.Count);
            Assert.Equal(result.Tags.Count, group.TagsList.Count);

        }
    }
}
