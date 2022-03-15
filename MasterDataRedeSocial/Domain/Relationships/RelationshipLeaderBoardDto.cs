namespace DDDSample1.Domain.Relationships
{
    public class RelationshipLeaderBoardDto
    {
        public string Name { get; set; }
        public int Count { get; set; }

        public RelationshipLeaderBoardDto()
        {

        }
        public RelationshipLeaderBoardDto(string name, int count)
        {
            this.Name = name;
            this.Count = count;
        }
    }
}