namespace DDDSample1.Domain.Planeamentos
{
    public class PathDTO
    {
        public  string [] Paths { get; set; }

        public PathDTO(string [] paths )
        {
            this.Paths = paths;
        }
    }
}