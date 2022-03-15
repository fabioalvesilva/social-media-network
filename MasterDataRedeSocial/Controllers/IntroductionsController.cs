using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Introductions;
using DDDSample1.Domain.Users.service;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Relationships;

namespace DDDSample1.Controllers
{
    [Route("mdrs/[controller]")]
    [ApiController]
    public class IntroductionsController : ControllerBase
    {
        private readonly IntroductionService _service;
        private readonly UserService _userService;
        private readonly RelationshipService _relationshipService;
        public IntroductionsController(IntroductionService service, UserService userService, RelationshipService relationshipService)
        {
            _service = service;
            _userService = userService;
            _relationshipService = relationshipService;
        }

        // GET: api/Introduction
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IntroductionDTO>>> GetAll()
        {
            return await _service.GetAllAsync();
        }

        // GET: api/Introduction/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IntroductionDTO>> GetGetById(Guid id)
        {
            var cat = await _service.GetByIdAsync(new IntroductionId(id));

            if (cat == null)
            {
                return NotFound();
            }

            return cat;
        }

        // GET: api/Introduction/search/5
        [HttpGet("search/{id}")]
        public async Task<ActionResult<IEnumerable<IntroductionDTO>>> GetGetByUserId(Guid id)
        {
            var list = await _service.GetByUserIdAsync(new UserId(id));

            if (list == null)
            {
                return NotFound();
            }

            return list;
        }

        // GET: api/Introduction/byUser/5
        [HttpGet("byuser/{id}")]
        public async Task<ActionResult<IEnumerable<IntroductionCardDTO>>> GetGetByUserIdCard(Guid id)
        {
            var list = await _service.GetByUserIdCardAsync(new UserId(id));

            if (list == null)
            {
                return NotFound();
            }

            return list;
        }

        // POST: api/Introduction
        [HttpPost]
        public async Task<ActionResult<IntroductionDTO>> Create(CreatingIntroductionDto dto)
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

            var userMiddle = await _userService.GetByIdAsync(new UserId(dto.UserMiddle));
            if (userTo == null)
            {
                return NotFound();
            }
            try
            {
                var cat = await _service.AddAsync(dto);

                return CreatedAtAction(nameof(GetGetById), new { id = cat.Id }, cat);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }


        // PUT: api/Introduction/5
        [HttpPut("{id}")]
        public async Task<ActionResult<IntroductionDTO>> Update(Guid id, UpdatingIntroductionDto dto)
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

            var userMiddle = await _userService.GetByIdAsync(new UserId(dto.UserMiddle));
            if (userTo == null)
            {
                return NotFound();
            }

            try
            {
                var cat = await _service.UpdateAsync(dto);

                if (cat == null)
                {
                    return NotFound();
                }

                if (String.Equals(dto.IntroductionState, "APPROVED"))
                {
                    ISet<string> tags = new HashSet<string>();
                    string rID;

                    rID = "00000000-0000-0000-0000-000000000000";
                  
                    var relation = _relationshipService.AddAsync(new CreatingRelationshipDto(dto.UserFrom, dto.UserTo, tags, 0, 0, rID));

                    if (relation == null)
                        return BadRequest();
                }

                return Ok();

            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // Inactivate: api/IntroductionRequests/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IntroductionDTO>> SoftDelete(Guid id)
        {
            var cat = await _service.InactivateAsync(new IntroductionId(id));

            if (cat == null)
            {
                return NotFound();
            }

            return Ok(cat);
        }

        // DELETE: api/IntroductionRequests/5
        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<IntroductionDTO>> HardDelete(Guid id)
        {
            try
            {
                var cat = await _service.DeleteAsync(new IntroductionId(id));

                if (cat == null)
                {
                    return NotFound();
                }

                return Ok(cat);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}