using Microsoft.AspNetCore.Mvc;

using System;
using System.Threading.Tasks;
using System.Collections.Generic;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.RelationshipRequests;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.service;
using DDDSample1.Domain.Relationships;
using MasterDataRedeSocial.Domain.RelationshipRequests;

namespace DDDSample1.Controllers
{
    [Route("mdrs/[controller]")]
    [ApiController]
    public class RelationshipRequestsController : ControllerBase
    {
        private readonly RelationshipRequestService _service;

        private readonly RelationshipService _relationshipService;

        private readonly UserService _userService;

        public RelationshipRequestsController(RelationshipRequestService service, UserService userService, RelationshipService relationshipService)
        {
            _service = service;
            _userService = userService;
            _relationshipService = relationshipService;
        }

        // GET: mdrs/RelationshipRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<RelationshipRequestDTO>>> GetAll()
        {
            return await _service.GetAllAsync();
        }

        // GET: mdrs/RelationshipRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<RelationshipRequestDTO>> GetGetById(Guid id)
        {
            var relReq = await _service.GetByIdAsync(new RelationshipRequestId(id));

            if (relReq == null)
            {
                return NotFound();
            }

            return relReq;
        }

        // GET: mdrs/5
        [HttpGet("pending/{id}")]
        public async Task<ActionResult<IEnumerable<RelationshipRequestCardDto>>> GetPendingRequest(Guid id)
        {
            return await _service.GetPendingRequest(new UserId(id));
        }

        // POST: mdrs/RelationshipRequests
        [HttpPost]
        public async Task<ActionResult<RelationshipRequestDTO>> Create(CreatingRelationshipRequestDto dto)
        {
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
                var relaReq = await _service.AddAsync(dto);

                return CreatedAtAction(nameof(GetGetById), new { id = relaReq.Id }, relaReq);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }


        // PUT: mdrs/RelationshipRequests/5
        [HttpPut("{id}")]
        public async Task<ActionResult<RelationshipRequestDTO>> Update(Guid id, UpdatingRelationshipRequestDto dto)
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
                var relReq = await _service.UpdateAsync(dto);

                if (relReq == null)
                {
                    return NotFound();
                }

                // TODO: one day
                if (String.Equals(relReq.RelationshipRequestState, "APPROVED"))
                {
                    await _relationshipService.AddAsync(new CreatingRelationshipDto(dto.UserFrom, dto.UserTo, new HashSet<string>(), 0, 0, relReq.Id));
                }

                return Ok(relReq);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // Inactivate: mdrs/RelationshipRequests/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<RelationshipRequestDTO>> SoftDelete(Guid id)
        {
            var relReq = await _service.InactivateAsync(new RelationshipRequestId(id));

            if (relReq == null)
            {
                return NotFound();
            }

            return Ok(relReq);
        }

        // DELETE: mdrs/RelationshipRequests/5
        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<RelationshipRequestDTO>> HardDelete(Guid id)
        {
            try
            {
                var relReq = await _service.DeleteAsync(new RelationshipRequestId(id));

                if (relReq == null)
                {
                    return NotFound();
                }

                return Ok(relReq);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}