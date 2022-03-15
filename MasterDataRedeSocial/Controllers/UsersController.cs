using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.dto;
using DDDSample1.Domain.Users.service;

namespace DDDSample1.Controllers
{

    [Route("mdrs/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _service;

        private readonly RelationshipService _serviceRelationship;

        private readonly ServiceHelper _svc;

        public UsersController(UserService service, RelationshipService relationshipsServices, ServiceHelper svc)
        {
            _service = service;
            _serviceRelationship = relationshipsServices;
            _svc = svc;
        }

        // GET: users
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetAll()
        {
            return await _service.GetAllAsync();
        }


        // GET: users
        [HttpGet("allUsers")]
        public async Task<int> GetNumberUsers()
        {
            return await _service.GetNumberUsers();
        }


        // GET: users/5
        [HttpGet("allUsers/{id}")]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetByAllUsersByUserId(Guid id)
        {
            var user = await _service.GetAllUsersAsync(new UserId(id));

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // GET: api/users/common
        [HttpGet("commonFriends/{userFrom}/{userTo}")]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetCommonFriends(string userFrom, string userTo)
        {
            var users = await _service.GetAllUsersInCommonAsync(userFrom, userTo);

            if (users == null)
            {
                return NotFound();
            }

            return users;
        }

        // GET: users/5
        [HttpGet("{id}")]
        public async Task<ActionResult<UserDTO>> GetById(Guid id)
        {
            var user = await _service.GetByIdAsync(new UserId(id));

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // GET: users/email
        [HttpGet("search/{email}")]
        public async Task<ActionResult<UserDTO>> GetUserByEmail(string email)
        {
            var user = await _service.GetByEmailAsync(new Email(email));

            return user;
        }

        // GET: users/email
        [HttpGet("getUserByName/{name}")]
        public async Task<ActionResult<UserDTO>> GetUserByName(string name)
        {
            var user = await _service.GetUserByName(new Name(name));

            return user;
        }

        // GET: api/Introduction/withsametags/5
        [HttpGet("suggestedfriends/{id}")]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetGetWithSameTags(Guid id)
        {
            //var user = await _service.GetByEmailAsync(new Email(email));

            var list = await _service.GetWithSameTagsByIDAsync(id);

            if (list == null)
            {
                return NotFound();
            }

            return list;
        }

        // GET: suggestedUssers -> UC9)
        /*
                [HttpGet("suggestedUsers/{userID}")]
                public async Task<ActionResult<UserDTO>> GetSuggestedUsers(Guid id)
                {
                    return await _service.GetAllAsync();

                    var user = await _service.GetByEmailAsync(new Email(email));

                    return user;
                }
            */
        // POST: users
        [HttpPost]
        public async Task<ActionResult<UserDTO>> Create(CreatingUserDTO dto)
        {

            try
            {
                var user = await _service.AddAsync(dto);
                var action = CreatedAtAction(nameof(GetById), new { id = user.Id }, user);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<UserDTO>> Update(Guid id, UpdatingUserDTO dto)
        {
            string tmp = id.ToString();
            if (tmp != dto.Id)
            {
                return BadRequest();
            }

            try
            {
                var user = await _service.UpdateAsync(dto);

                if (user == null)
                {
                    return NotFound();
                }

                var action = Ok(user);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // Inactivate: users/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<UserDTO>> SoftDelete(Guid id)
        {
            var user = await _service.InactivateAsync(new UserId(id));

            if (user == null)
            {
                return NotFound();
            }

            var action = Ok(user);
            ServiceHelper.Unsync();
            return action;
        }

        // DELETE: users/5
        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<UserDTO>> HardDelete(Guid id)
        {
            try
            {
                var user = await _service.DeleteAsync(new UserId(id));

                if (user == null)
                {
                    return NotFound();
                }

                var action = Ok(user);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpGet("networkStrength/{id}")]
        public async Task<ActionResult<string>> GetNetworkStrength(Guid id)
        {
            return await _serviceRelationship.GetUserNetworkStrength(id.ToString());
        }

        [HttpGet("friendsthirdlevel/{id}")]
        public async Task<ActionResult<IEnumerable<UserDTO>>> GetUserFriendsThirdLevel(Guid id)
        {
            var list = await _service.GetUserFriendsThirdLevel(new UserId(id));

            return list;
        }
    }
}
