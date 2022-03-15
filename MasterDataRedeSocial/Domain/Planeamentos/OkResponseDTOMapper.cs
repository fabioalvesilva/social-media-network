using Newtonsoft.Json;
using System;
using System.IO;
using System.Text;

namespace DDDSample1.Domain.Planeamentos
{


    public class OkResponseDTOMapper
    {
    public static OkResponseDTOMapper Deserialize<OkResponseDTOMapper>(string json)
        {
            Newtonsoft.Json.JsonSerializer s = new JsonSerializer();
            return s.Deserialize<OkResponseDTOMapper>(new JsonTextReader(new StringReader(json)));
        }
    }
}