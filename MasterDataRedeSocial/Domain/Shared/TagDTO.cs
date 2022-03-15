namespace DDDSample1.Domain.Users.dto
{
    public class TagDTO
    {
        public string Text { get; set; }

        public TagDTO(string text)
        {
            this.Text = text;
        }
    }
}
