namespace DDDSample1.Domain.Planeamentos
{
    public class PlaneamentoConnectionDTO
    {
        public  string userFrom;
        public string userTo;
        public  int connectionStrength { get; set; }
        public  int relationshipStrength { get; set; }

        public PlaneamentoConnectionDTO(string userFrom, string userTo, int connectionStrength,int relationshipStrength )
        {
            this.userFrom = userFrom;
            this.userTo = userTo;
            this.connectionStrength = connectionStrength;
            this.relationshipStrength = relationshipStrength; 
        }
    }
}