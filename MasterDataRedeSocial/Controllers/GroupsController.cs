using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Groups;

namespace DDDSample1.Controllers
{
    [Route("mdrs/[controller]")]
    [ApiController]
    public class GroupsController : ControllerBase
    {
        private readonly GroupService _service;

        private readonly ServiceHelper _svc;

        public GroupsController(GroupService service, ServiceHelper svc)
        {
            _service = service;
            _svc = svc;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GroupDTO>>> GetAll()
        {
            return await _service.GetAllAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GroupDTO>> GetById(Guid id)
        {
            var group = await _service.GetByIdAsync(new GroupId(id));

            if (group == null)
            {
                return NotFound();
            }

            return group;
        }

        [HttpPost]
        public async Task<ActionResult<GroupDTO>> Create(CreatingGroupDTO dto)
        {

            try
            {
                var group = await _service.AddAsync(dto);
                var action = CreatedAtAction(nameof(GetById), new { id = group.Id }, group);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<GroupDTO>> Update(Guid id, UpdatingGroupDTO dto)
        {

            if (!id.ToString().Equals(dto.Id.ToString()))
            {
                return BadRequest();
            }

            try
            {
                var group = await _service.UpdateAsync(dto);

                if (group == null)
                {
                    return NotFound();
                }

                var action = Ok(group);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpDelete("{id}/hard")]
        public async Task<ActionResult<GroupDTO>> HardDelete(Guid id)
        {
            try
            {
                var group = await _service.DeleteAsync(new GroupId(id));

                if (group == null)
                {
                    return NotFound();
                }

                var action = Ok(group);
                ServiceHelper.Unsync();
                return action;
            }
            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }

        [HttpGet("groupsByUserId/{id}")]
        public async Task<List<GroupDTO>> GetGroupsByUserId(Guid id)
        {
            return await _service.GetGroupsByUserId(id);
        }
    }
}
