namespace DDDSample1.Domain.Planeamentos
{
    public class PlaneamentoGroupDTO
    {
        public  string [] Users { get; set; }
        public  string [] Tags { get; set; }

        public PlaneamentoGroupDTO(string [] users, string [] tags  )
        {
            this.Users = users;
            this.Tags = tags;
        }
    }
}