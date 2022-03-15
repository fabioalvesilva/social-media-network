namespace DDDSample1.Domain.Shared
{
    public class TagCountDTO
    {
        public string Tag { get; set; }
        public int Count { get; set; }

        public TagCountDTO()
        {

        }
        public TagCountDTO(string tag, int count)
        {
            this.Tag = tag;
            this.Count = count;
        }

    }
}
