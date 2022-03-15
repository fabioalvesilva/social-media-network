namespace DDDSample1.Domain.Planeamentos
{
    public class RelationshipPlanningDTO
    {

        /*
        "userFrom": "CArlos",
        "userTo": "Moutinho",
        "connectionStrength": 1,
        "relationshipStrength": 2
        */
        public  string userFrom { get; set; }
        public  string userTo { get; set; }
        public  int connectionStrength { get; set; }
        public  int relationshipStrength { get; set; }

        public RelationshipPlanningDTO(string userFrom, string userTo, int connectionStrength, int relationshipStrength)
        {
            this.userFrom = userFrom;
            this.userTo = userTo;
            this.connectionStrength = connectionStrength;
            this.relationshipStrength = relationshipStrength;
        }
    }
}