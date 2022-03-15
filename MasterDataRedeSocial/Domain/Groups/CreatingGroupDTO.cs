using System.Collections.Generic;
using System;

namespace DDDSample1.Domain.Groups
{
    public class CreatingGroupDTO
    {
        public string Id { get; set; }

        public ISet<Guid> UserIdList { get; set; }

        public ISet<string> Tags { get; set; }

        public CreatingGroupDTO(ISet<Guid> userIdlist, ISet<string> tags)
        {
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
