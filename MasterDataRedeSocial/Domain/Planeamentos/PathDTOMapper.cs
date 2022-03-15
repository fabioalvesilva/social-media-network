using Newtonsoft.Json;
using System;
using System.IO;
using System.Text;

namespace DDDSample1.Domain.Planeamentos
{


    public class PathDTOMapper
    {
    public static PathDTO Deserialize<PathDTO>(string json)
        {
            Newtonsoft.Json.JsonSerializer s = new JsonSerializer();
            return s.Deserialize<PathDTO>(new JsonTextReader(new StringReader(json)));
        }
    }
}