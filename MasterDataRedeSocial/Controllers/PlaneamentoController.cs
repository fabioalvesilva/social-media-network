using System.Net.Http;
using Microsoft.AspNetCore.Mvc;

using System.Collections.Generic;
using System.Threading.Tasks;


using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.dto;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Users.service;
using DDDSample1.Domain.Planeamentos;


namespace DDDSample1.Controllers
{
    [Route("mdrs/[controller]")]
    [ApiController]
    public class PlaneamentoController : ControllerBase
    {
        private readonly PlaneamentoService _planeamentoService;
        private readonly RelationshipService _relationshipService;
        private readonly UserService _userService;

        private readonly ServiceHelper _svc;

        const string PLANEAMENTO_URL = "http://localhost:8000/";
        const string END = "C#";
        const string EP_USER = "handle_request_createUser";
        const string EP_CONNECTION = "handle_request_createConnection";
        const string EP_SHORTEST_PATH = "handle_request_shortest_path";
        const string EP_SAFEST_PATH = "handle_request_safest_path";
        const string EP_STRONGEST_PATH = "handle_request_strongest_path";
        const string EP_GROUP_SUGESTION = "handle_request_user_group";



        public PlaneamentoController(PlaneamentoService _planeamentoService,
                    RelationshipService _relationshipService, UserService _userService,
                    ServiceHelper _serviceHelper)
        {

            this._relationshipService = _relationshipService;
            this._userService = _userService;
            this._planeamentoService = _planeamentoService;
            this._svc = _serviceHelper;
        }

        /*
                // GET: api/Planeamento
                [HttpGet]
                public async Task<PathDTO> GetAll()
                {
                    return await PlaneamentoService.GetShortestpath();
                }
        */

        // GET: api/Planeamento
        [HttpGet("StrongestPath")]
        public async Task<ActionResult<PathDTO>> GetStrongestPath([FromQuery] string userFrom, [FromQuery] string userTo)
        {
            _svc.AllAsync();

            var cat = await PlaneamentoService.GetStrongestpath(userFrom, userTo);

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }

        [HttpGet("ShortestPath")]
        public async Task<ActionResult<PathDTO>> GetShortestPath([FromQuery] string userFrom, [FromQuery] string userTo)
        {
            //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
            _svc.AllAsync();
            var cat = await PlaneamentoService.GetShortestPath(userFrom, userTo);

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }

        [HttpGet("SafestPath")]
        public async Task<ActionResult<PathDTO>> GetSafestPath([FromQuery] string userFrom, [FromQuery] string userTo, [FromQuery] int value)
        {
            //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
            _svc.AllAsync();
            var cat = await PlaneamentoService.GetSafestPath(userFrom, userTo, value);

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }

        [HttpGet("SafestPathV2")]
        public async Task<ActionResult<PathDTO>> GetSafestPathV2([FromQuery] string userFrom, [FromQuery] string userTo, [FromQuery] int value)
        {
            //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
            _svc.AllAsync();
            var cat = await _planeamentoService.getSafestPathV2();

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }

[HttpGet("GroupSuggestion")]
        public async Task<ActionResult<PlaneamentoGroupDTO>> GroupSuggestion([FromQuery] string user, [FromQuery] string tagA, [FromQuery] int minNumUsers, [FromQuery] int numCommonTags)
        {
            try
            {
                //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
                _svc.AllAsync();
                var cat = await PlaneamentoService.GetGroupsSuggestion(user, tagA, minNumUsers, numCommonTags);

                if (cat == null)
                {
                    return NotFound();
                }

                return cat;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }




        [HttpPost("createUsersV2")]
        public async Task<ActionResult<HttpResponseMessage>> CreateUsers()
        {

            List<RelationshipDto> connections = await _relationshipService.GetAllAsync();
            List<UserDTO> usersDomain = await _userService.GetAllAsync();
            List<PlaneamentoUserDTO> users = await _userService.GetUsersPlanemento();

            var cat = await _planeamentoService.createUsers(users, usersDomain, connections);

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
            //return null;
        }
        /*
                [HttpPost("createConnection")]
                public async Task<OkResponseDTO> CreateConnection(PlaneamentoConnectionDTO dto)
                {
                    //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
                    //return await PlaneamentoService.GetSafestPath(userFrom, userTo, value);
                    return await PlaneamentoService.CreateConnection(dto);
                }

            /*
                [HttpGet("SafestPath")]
                public async Task<PathDTO> GetSafestPath([FromQuery]string userFrom, [FromQuery]string userTo, [FromQuery]int value)
                {
                    //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
                    return await PlaneamentoService.GetSafestPath(userFrom, userTo, value);
                }
        */
        [HttpGet("StrongestPathCS")]
        public async Task<ActionResult<PathDTO>> GetStrongestPathCS([FromQuery] string userFrom, [FromQuery] string userTo)
        {
            //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
            _svc.AllAsync();
            var cat = await PlaneamentoService.GetStrongestPathWithConnectionStrength(userFrom, userTo);

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }

        [HttpGet("StrongestPathCSRS")]
        public async Task<ActionResult<PathDTO>> GetStrongestPathCSRS([FromQuery] string userFrom, [FromQuery] string userTo)
        {
            //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
            _svc.AllAsync();
            var cat = await PlaneamentoService.GetStrongestPathWithCSRS(userFrom, userTo);

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }
        [HttpGet("StrongestPathMood")]
        public async Task<ActionResult<PathDTO>> GetStrongestPathMood([FromQuery] string userFrom, [FromQuery] string userTo)
        {
            //Console.WriteLine("CONTROLLER: " + userFrom + " " + userTo);
            _svc.AllAsync();
            var cat = await PlaneamentoService.GetStrongestPathWithMood(userFrom, userTo);

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }

    }
}