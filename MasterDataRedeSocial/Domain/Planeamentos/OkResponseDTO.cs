namespace DDDSample1.Domain.Planeamentos
{
    public class OkResponseDTO
    {
        public  string status {get; set; }

        public OkResponseDTO(string status)
        {
            this.status = status;
        }
    }
}