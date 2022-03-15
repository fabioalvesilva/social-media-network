using Newtonsoft.Json;
using System;
using System.IO;
using System.Text;

namespace DDDSample1.Domain.Planeamentos
{


    public class GroupDTOMapper
    {
    public static PlaneamentoGroupDTO Deserialize<PlaneamentoGroupDTO>(string json)
        {
            Newtonsoft.Json.JsonSerializer s = new JsonSerializer();
            return s.Deserialize<PlaneamentoGroupDTO>(new JsonTextReader(new StringReader(json)));
        }
    }
}