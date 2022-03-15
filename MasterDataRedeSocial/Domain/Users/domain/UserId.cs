using DDDSample1.Domain.Shared;
using Newtonsoft.Json;
using System;

namespace DDDSample1.Domain.Users.domain
{
    public class UserId : EntityId
    {
        [JsonConstructor]
        public UserId(Guid value) : base (value)
        {

        }

        public UserId(string value) : base(value)
        {

        }

        public override String AsString()
        {
            Guid obj = (Guid)base.ObjValue;
            return obj.ToString();
        }

        protected override Object createFromString(string text)
        {
            return new Guid(text);
        }

        public Guid AsGuid()
        {
            return (Guid)base.ObjValue;
        }
    }
}
