namespace MasterDataRedeSocial.Domain.Relationships
{
    public class UpdateConnectionStrength
    {
        public string UserFrom { get; set; }

        public string UserTo { get; set; }

        public int Reaction { get; set; }

        public UpdateConnectionStrength(string userFrom, string userTo, int reaction)
        {
            this.UserFrom = userFrom;
            this.UserTo = userTo;
            this.Reaction = reaction;
        }
    }
}
