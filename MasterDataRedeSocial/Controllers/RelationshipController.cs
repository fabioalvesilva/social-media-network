using Microsoft.AspNetCore.Mvc;

using System;
using System.Collections.Generic;
using System.Threading.Tasks;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Users.service;
using MasterDataRedeSocial.Domain.Relationships;

namespace DDDSample1.Controllers
{
    [Route("mdrs/[controller]")]
    [ApiController]
    public class RelationshipsController : ControllerBase
    {
        private readonly RelationshipService _relationshipService;
        private readonly UserService _userService;

        private readonly ServiceHelper _svc;

        public RelationshipsController(RelationshipService service, UserService userService, ServiceHelper svc)
        {
            _relationshipService = service;
            _userService = userService;
            _svc = svc;
        }

        // GET: api/Relationships
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RelationshipDto>>> GetAll()
        {
            return await _relationshipService.GetAllAsync();
        }

        // GET: api/Relationships/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RelationshipDto>> GetById(Guid id)
        {
            var rela = await _relationshipService.GetByIdAsync(new RelationshipId(id));

            if (rela == null)
            {
                return NotFound();
            }

            return rela;
        }

        // GET: relationships/3
        [HttpGet("MyRelationships/{id}")]
        public async Task<ActionResult<IEnumerable<RelationshipDto>>> GetAllRelationshipsByUser(Guid id)
        {
            UserId userId = new UserId(id);
            var user = await _userService.GetByIdAsync(userId);

            if (user == null)
            {
                return NotFound();
            }

            var listRelationships = await _relationshipService.GetAllByUserIdAsync(userId);

            return listRelationships;
        }

        // GET: relationships/3
        [HttpGet("friends/{id}")]
        public async Task<ActionResult<IEnumerable<RelationshipCardDto>>> GetAllFriendsByUser(Guid id)
        {
            UserId userId = new UserId(id);
            var user = await _userService.GetByIdAsync(userId);

            if (user == null)
            {
                return NotFound();
            }

            var listRelationships = await _relationshipService.GetAllFriendsByUserIdAsync(userId);

            return listRelationships;
        }

        // POST: api/Relationships
        [HttpPost]
        public async Task<ActionResult<RelationshipDto>> Create(CreatingRelationshipDto dto)
        {
            try
            {
                var rela = await _relationshipService.AddAsync(dto);

                var action = CreatedAtAction(nameof(GetById), new { id = rela.Id }, rela);

                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }


        // PUT: api/Relationships/5
        [HttpPut("{id}")]
        public async Task<ActionResult<RelationshipDto>> Update(Guid id, UpdateRelationshipDto dto)
        {
            string tmp = id.ToString();
            if (tmp != dto.Id)
            {
                return BadRequest();
            }

            var userFrom = await _userService.GetByIdAsync(new UserId(dto.UserFrom));
            if (userFrom == null)
            {
                return NotFound();
            }

            var userTo = await _userService.GetByIdAsync(new UserId(dto.UserTo));
            if (userTo == null)
            {
                return NotFound();
            }

            try
            {
                var rela = await _relationshipService.UpdateAsync(dto);

                if (rela == null)
                {
                    return NotFound();
                }
                var action = Ok(rela);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // PUT: api/relationStrength
        [HttpPut("relationStrength")]
        public async Task<ActionResult<RelationshipDto>> UpdateConnectionStrength(UpdateConnectionStrength obj)
        {

            try
            {
                var rela = await _relationshipService.GetRelationByUsersAsync(new UserId(obj.UserFrom), new UserId(obj.UserTo));

                if (rela == null)
                {
                    return NotFound();
                }

                rela.RelationshipStrength = rela.RelationshipStrength + obj.Reaction;

                UpdateRelationshipDto relaUpdatedDto = new UpdateRelationshipDto(rela.Id.ToString(), rela.UserFrom.ToString(), rela.UserTo.ToString(), rela.ListTag, rela.ConnectionStrength,
                    rela.RelationshipStrength, rela.RelationshipRequest.ToString());

                var relaUpdated = await _relationshipService.UpdateAsync(relaUpdatedDto);

                if (relaUpdated == null)
                {
                    return NotFound();
                }

                var action = Ok(relaUpdated);
                ServiceHelper.Unsync();
                return Ok(relaUpdated);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // Inactivate: api/Relationships/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RelationshipDto>> SoftDelete(Guid id)
        {
            var rela = await _relationshipService.InactivateAsync(new RelationshipId(id));

            if (rela == null)
            {
                return NotFound();
            }

            var action = Ok(rela);
            ServiceHelper.Unsync();
            return action;
        }

        // DELETE: api/Relationships/5
        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<RelationshipDto>> HardDelete(Guid id)
        {
            try
            {
                var rela = await _relationshipService.DeleteAsync(new RelationshipId(id));

                if (rela == null)
                {
                    return NotFound();
                }

                var action = Ok(rela);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpGet("leaderboardByNetworkDimension")]
        public async Task<ActionResult<IEnumerable<RelationshipLeaderBoardDto>>> GetLeaderboardByNetworkConection()
        {
            return await _relationshipService.GetLeaderboardByNetworkConection();
        }

        [HttpGet("leaderboardByNetworkFortress")]
        public async Task<ActionResult<IEnumerable<RelationshipLeaderBoardDto>>> GetLeaderboardByNetworkFortress()
        {
            return await _relationshipService.GetLeaderboardByNetworkFortress();
        }
    }
}