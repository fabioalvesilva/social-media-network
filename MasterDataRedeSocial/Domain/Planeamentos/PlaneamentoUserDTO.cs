using System.Collections.Generic;
using DDDSample1.Domain.Shared;
namespace DDDSample1.Domain.Planeamentos
{
    public class PlaneamentoUserDTO
    {
        public  string name;
        public string mood;

        public ISet<string> tags { get; set; }
        public PlaneamentoUserDTO(string name, string mood, ISet<Tag> Tags )
        {
            this.name = name;
            this.mood = mood;
            this.tags = new HashSet<string>();

            foreach (Tag t in Tags)
            {
                this.tags.Add(t.Text);
            }
        }
    }
}