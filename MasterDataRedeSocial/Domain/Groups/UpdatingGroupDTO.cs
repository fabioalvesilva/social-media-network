using System.Collections.Generic;
using System;

namespace DDDSample1.Domain.Groups
{
    public class UpdatingGroupDTO
    {
        public string Id { get; set; }

        public ISet<Guid> UserIdList { get; set; }

        public ISet<string> Tags { get; set; }

        public UpdatingGroupDTO(string id, ISet<Guid> userIdlist, ISet<string> tags)
        {
            Id = id;
            UserIdList = new HashSet<Guid>();
            Tags = new HashSet<string>();

            foreach (Guid user in userIdlist)
            {
                UserIdList.Add(user);
            }

            foreach (string tag in tags)
            {
                Tags.Add(tag);
            }
        }
    }
}
