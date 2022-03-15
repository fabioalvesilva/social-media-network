using System.Collections;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Planeamentos;
using DDDSample1.Domain.Shared;
using System.IO;
using System.Net;
using System.Net.Http;
using Newtonsoft.Json;
using System.Net.Http.Headers;
using System.Net.Http.Json; 
using DDDSample1.Domain.Users;
using System.Text;
using DDDSample1.Domain.Users.dto;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;

namespace DDDSample1.Domain.Planeamentos{
    public class PlaneamentoService //: System.Net.Http.HttpMessageInvoker
    {
        //const string PLANEAMENTO_URL = "http://localhost:8000/";
        const string PLANEAMENTO_URL = "http://34.70.26.143:8000/";
        const string END = "C#";
        const string EP_USER = "handle_request_createUser";
        const string EP_CONNECTION = "handle_request_createConnection";
        const string EP_SHORTEST_PATH = "handle_request_shortest_path";
        const string EP_SAFEST_PATH = "handle_request_safest_path";
        const string EP_STRONGEST_PATH = "handle_request_strongest_path";

        const string EP_STRONGEST_CS = "handle_request_strongest_path_withCS";
        const string EP_STRONGEST_PATH_WITH_RS = "handle_request_strongest_path_withRS";
        const string EP_STRONGEST_PATH_WITH_MOOD = "handle_request_strongest_path_withMood";
        const string EP_GROUP_SUGESTION = "handle_request_user_groups";

        static readonly HttpClient client = new HttpClient();
        public PlaneamentoService()
        {
        }


        public static async Task<PathDTO> GetShortestpath()
        {
            //string ApiUrl = PLANEAMENTO_URL + EP_SHORTEST_PATH;
            /*
            var sb = new System.Text.StringBuilder();
            sb.Append(ApiUrl);
            if (reqParams.Length > 0){
                sb.Append("?");
                for (int i = 0; i < reqParams.Length; i++)
                {
                    sb.Append(reqParams[i].ToString());
                }
            }
            */

            HttpResponseMessage response = null;
            PathDTO pathDTO = null;

            try
            {
                response = await client.GetAsync(PLANEAMENTO_URL + "handle_request_strongest_path?orig=Sarah%20Silva&dest=Pedro%20Mourao");
                response.EnsureSuccessStatusCode();
                string responseBody = await response.Content.ReadAsStringAsync();
                //pathDTO = new PathDTO(response.Content.LoadIntoBufferAsync());
                // Above three lines can be replaced with new helper method below
                // string responseBody = await client.GetStringAsync(uri);
                Console.WriteLine("MENSAGEM");
                Console.WriteLine(responseBody);
                pathDTO = PathDTOMapper.Deserialize<PathDTO>(responseBody);


            }
            catch (HttpRequestException e)
            {
                Console.WriteLine("\nException Caught!");
                Console.WriteLine("Message :{0} ", e.Message);

            }

            return pathDTO;

            /*
                        var client = new RestClient("http://localhost:8000/handle_request_strongest_path?orig=Sarah%20Silva&dest=Pedro%20Mourao");
                        client.Timeout = -1;
                        var request = new RestRequest(Method.GET);
                        IRestResponse response = client.Execute(request);
                        Console.WriteLine(response.Content);
                        */

        }

        public static async Task<PathDTO> GetStrongestpath(string userFrom, string userTo)
        {
            //Console.WriteLine("SERVICE: " + userFrom + " " + userTo);

            string ApiUrl = PLANEAMENTO_URL + EP_STRONGEST_PATH + "?" + "userFrom=" + userFrom + "&" + "userTo=" + userTo;

            Console.WriteLine("SERVICE: URL:" + ApiUrl);

            HttpResponseMessage response = null;
            PathDTO pathDTO = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            pathDTO = PathDTOMapper.Deserialize<PathDTO>(responseBody);
            return pathDTO;
        }


        public static async Task<PlaneamentoGroupDTO> GetGroupsSuggestion(string user, string tagA, int minNumUSers, int numCommonTags )
        {
            //Console.WriteLine("SERVICE: " + userFrom + " " + userTo);

            string ApiUrl = PLANEAMENTO_URL + EP_GROUP_SUGESTION + "?" + "user=" + user + "&" + "tagA=" + tagA +  "&" + "minNumUsers=" + minNumUSers + "&" + "numCommonTags=" + numCommonTags;
            //user=Sarah Silva&tagA=travel&minNumUsers=2&numCommonTags=2
            Console.WriteLine("SERVICE: URL:" + ApiUrl);

            HttpResponseMessage response = null;
            PlaneamentoGroupDTO groupDTO = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            groupDTO = GroupDTOMapper.Deserialize<PlaneamentoGroupDTO>(responseBody);
            return groupDTO;

        }

        public static async Task<PathDTO> GetShortestPath(string userFrom, string userTo)
        {
            //Console.WriteLine("SERVICE: " + userFrom + " " + userTo);

            string ApiUrl = PLANEAMENTO_URL + EP_SHORTEST_PATH + "?" + "userFrom=" + userFrom + "&" + "userTo=" + userTo;

            Console.WriteLine("SERVICE: URL:" + ApiUrl);

            HttpResponseMessage response = null;
            PathDTO pathDTO = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            pathDTO = PathDTOMapper.Deserialize<PathDTO>(responseBody);
            return pathDTO;

        }
        public static async Task<PathDTO> GetSafestPath(string userFrom, string userTo, int value)
        {
            //Console.WriteLine("SERVICE: " + userFrom + " " + userTo);

            string ApiUrl = PLANEAMENTO_URL + EP_SHORTEST_PATH + "?" + "userFrom=" + userFrom + "&" + "userTo=" + userTo + "&" + "value=" + value;

            //Console.WriteLine("SERVICE: URL:" + ApiUrl );

            HttpResponseMessage response = null;
            PathDTO pathDTO = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            pathDTO = PathDTOMapper.Deserialize<PathDTO>(responseBody);
            return pathDTO;

        }
        /*
        public static async Task<OkResponseDTO> CreateUserPlaneamento(PlaneamentoUserDTO dto)
        {
            Console.WriteLine("SERVICE: " + dto.userName + ";" + dto.mood + ";" + dto.tags);

            string tags = "";

            for (int i = 0; i < dto.tags.Length; i++)
            {
                tags += dto.tags[i] + (i + 1 == dto.tags.Length ? "" : ", ");
            }

            string ApiUrl = PLANEAMENTO_URL + EP_USER + "?" + "userName=" + dto.userName + "&" + "mood=" + dto.mood + "&" + "tags=" + tags;
            Console.WriteLine("SERVICE: URL:" + ApiUrl);

            HttpResponseMessage response = null;
            OkResponseDTO dtoResp = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            dtoResp = OkResponseDTOMapper.Deserialize<OkResponseDTO>(responseBody);
            return dtoResp;

        }*/
/*
        public static async Task<OkResponseDTO> CreateConnection(PlaneamentoConnectionDTO dto)
        {
            Console.WriteLine("SERVICE: " + dto.userFrom + ";" + dto.userTo + ";" + dto.connectionStrenght + ";" + dto.tags);

            //TODO falta colocar tags 
            string ApiUrl = PLANEAMENTO_URL + EP_CONNECTION + "?" + "userFrom=" + dto.userFrom + "&" + "userTo=" + dto.userTo + "&" + "connectionStrenght=" + dto.connectionStrenght + "&" + "tags=travel";
            Console.WriteLine("SERVICE: URL:" + ApiUrl);
            /*
                for (int i = 0; i < userDTO.tags.Length; i++)
                {

                }*/
            //Console.WriteLine("SERVICE: URL:" + ApiUrl );
/*
            HttpResponseMessage response = null;
            OkResponseDTO dtoResp = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            dtoResp = OkResponseDTOMapper.Deserialize<OkResponseDTO>(responseBody);
            return dtoResp;

        }
*/
        //Hosted web API REST Service base url
        string Baseurl = PLANEAMENTO_URL;
        public async Task<PathDTO> getSafestPathV2()
        {
            PathDTO pathDTO = new PathDTO(new String[]{}) ;
            using (var client = new HttpClient())
            {
                //Passing service base url
                client.BaseAddress = new Uri(Baseurl);
                client.DefaultRequestHeaders.Clear();
                //Define request data format
                //client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                //Sending request to find web api REST service resource GetAllEmployees using HttpClient
                HttpResponseMessage Res = await client.GetAsync("handle_request_safest_path?userFrom=Sarah Silva&userTo=Dario Ornelas&value=1");
                //Checking the response is successful or not which is sent using HttpClient
                if (Res.IsSuccessStatusCode)
                {
                    //Storing the response details recieved from web api
                    var EmpResponse = Res.Content.ReadAsStringAsync().Result;
                    //Deserializing the response recieved from web api and storing into the Employee list
                    pathDTO = JsonConvert.DeserializeObject<PathDTO>(EmpResponse);
                }
                //returning the employee list to view
                return pathDTO;
            }
        }


        public async Task<HttpResponseMessage> createUsers( List<PlaneamentoUserDTO> allUsers, List<UserDTO> allUsersDomain, List<RelationshipDto> allRelationships)
        {
            using (var client = new HttpClient())
            {

                //Users creation 
                client.DefaultRequestHeaders.Clear();
                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var json = JsonConvert.SerializeObject(allUsers);
                var data = new StringContent(json, Encoding.UTF8, "application/json");
                var response1  = await client.PostAsync(PLANEAMENTO_URL + "handle_request_createUsers", data);

                
                //Connections
                List<PlaneamentoConnectionDTO> connectionDTOs = new List<PlaneamentoConnectionDTO>();
                foreach(RelationshipDto relationship in allRelationships){
                    UserId UserFromId = relationship.UserFrom;
                    UserId UserToId = relationship.UserFrom;
                    string userFromName = "";
                    string userToName  ="";

                    foreach(UserDTO u in allUsersDomain){
                        if(!(string.IsNullOrEmpty(userFromName) && string.IsNullOrEmpty(userToName)))
                            break;
                        if(u.Id.Equals(UserFromId))
                            userFromName = u.Name;
                        
                        if(u.Id.Equals(UserToId))
                            userToName = u.Name;
                    }

                    connectionDTOs.Add(new PlaneamentoConnectionDTO(userFromName, userToName, relationship.ConnectionStrength,relationship.RelationshipStrength));                

                }

                //handle_request_createConnections
                client.DefaultRequestHeaders.Clear();
                //Define request data format
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                var json2 = JsonConvert.SerializeObject(connectionDTOs);
                var data2 = new StringContent(json, Encoding.UTF8, "application/json");
                var response2  = await client.PostAsync(PLANEAMENTO_URL + "handle_request_createConnections", data);

                return response1;
            }
        }


        public static async Task<PathDTO> GetStrongestPathWithConnectionStrength(string userFrom, string userTo)
        {
            //Console.WriteLine("SERVICE: " + userFrom + " " + userTo);

            string ApiUrl = PLANEAMENTO_URL + EP_STRONGEST_CS + "?" + "userFrom=" + userFrom + "&" + "userTo=" + userTo;

            Console.WriteLine("SERVICE: URL:" + ApiUrl);

            HttpResponseMessage response = null;
            PathDTO pathDTO = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            pathDTO = PathDTOMapper.Deserialize<PathDTO>(responseBody);
            return pathDTO;

        }

        public static async Task<PathDTO> GetStrongestPathWithCSRS(string userFrom, string userTo)
        {
            //Console.WriteLine("SERVICE: " + userFrom + " " + userTo);

            string ApiUrl = PLANEAMENTO_URL + EP_STRONGEST_PATH_WITH_RS + "?" + "userFrom=" + userFrom + "&" + "userTo=" + userTo;

            Console.WriteLine("SERVICE: URL:" + ApiUrl);

            HttpResponseMessage response = null;
            PathDTO pathDTO = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            pathDTO = PathDTOMapper.Deserialize<PathDTO>(responseBody);
            return pathDTO;

        }
        public static async Task<PathDTO> GetStrongestPathWithMood(string userFrom, string userTo)
        {
            //Console.WriteLine("SERVICE: " + userFrom + " " + userTo);

            string ApiUrl = PLANEAMENTO_URL + EP_STRONGEST_PATH_WITH_RS + "?" + "userFrom=" + userFrom + "&" + "userTo=" + userTo;

            Console.WriteLine("SERVICE: URL:" + ApiUrl);

            HttpResponseMessage response = null;
            PathDTO pathDTO = null;

            response = await client.GetAsync(ApiUrl);
            response.EnsureSuccessStatusCode();
            string responseBody = await response.Content.ReadAsStringAsync();
            //Console.WriteLine("MENSAGEM");
            //Console.WriteLine(responseBody);
            pathDTO = PathDTOMapper.Deserialize<PathDTO>(responseBody);
            return pathDTO;

        }
    }
}