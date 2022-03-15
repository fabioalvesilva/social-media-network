using Microsoft.AspNetCore.Mvc;

using System;
using System.Threading.Tasks;
using System.Collections.Generic;

using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.service;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Introductions;
using DDDSample1.Domain.IntroductionRequests;

namespace DDDSample1.Controllers
{
    [Route("mdrs/[controller]")]
    [ApiController]
    public class IntroductionRequestsController : ControllerBase
    {
        private readonly IntroductionRequestService _service;

        private readonly IntroductionService _introductionService;

        private readonly UserService _userService;

        public IntroductionRequestsController(IntroductionRequestService service, UserService userService, IntroductionService introductionService)
        {
            _service = service;
            _userService = userService;
            _introductionService = introductionService;
        }

        // GET: api/IntroductionRequests
        [HttpGet]
        public async Task<ActionResult<IEnumerable<IntroductionRequestDTO>>> GetAll()
        {
            return await _service.GetAllAsync();
        }

        // GET: api/IntroductionRequests/5
        [HttpGet("{id}")]
        public async Task<ActionResult<IntroductionRequestDTO>> GetGetById(Guid id)
        {
            var intReq = await _service.GetByIdAsync(new IntroductionRequestId(id));

            if (intReq == null)
            {
                return NotFound();
            }

            return intReq;
        }

         // GET: api/Introduction/byUser/5
        [HttpGet("byuser/{id}")]
        public async Task<ActionResult<IEnumerable<IntroductionRequestCardDTO>>> GetGetByUserId(Guid id)
        {
            var list = await _service.GetByUserIdAsync(new UserId(id));

            if (list == null)
            {
                return NotFound();
            }

            return list;
        }

        // POST: api/IntroductionRequests
        [HttpPost]
        public async Task<ActionResult<IntroductionRequestDTO>> Create(CreatingIntroductionRequestDto dto)
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
                var intReq = await _service.AddAsync(dto);

                return CreatedAtAction(nameof(GetGetById), new { id = intReq.Id }, intReq);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }


        // PUT: api/IntroductionRequests/
        [HttpPut("{id}")]
        public async Task<ActionResult<IntroductionRequestDTO>> Update(Guid id, UpdatingIntroductionRequestDto dto)
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
                var intReq = await _service.UpdateAsync(dto);

                if (intReq == null)
                {
                    return NotFound();
                }


                if (String.Equals(intReq.IntroductionRequestState, "APPROVED"))
                {
                    await _introductionService.AddAsync(new CreatingIntroductionDto(dto.Id, dto.UserFrom, dto.UserMiddle, dto.UserTo, dto.PresentationMessage, dto.RequestMessage, "PENDING", true));
                }

                return Ok(intReq);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        // Inactivate: api/IntroductionRequests/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<IntroductionRequestDTO>> SoftDelete(Guid id)
        {
            var intReq = await _service.InactivateAsync(new IntroductionRequestId(id));

            if (intReq == null)
            {
                return NotFound();
            }

            return Ok(intReq);
        }

        // DELETE: api/IntroductionRequests/5
        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<IntroductionRequestDTO>> HardDelete(Guid id)
        {
            try
            {
                var intReq = await _service.DeleteAsync(new IntroductionRequestId(id));

                if (intReq == null)
                {
                    return NotFound();
                }

                return Ok(intReq);
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}