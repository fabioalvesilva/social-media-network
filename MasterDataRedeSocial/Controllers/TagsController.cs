using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Users.service;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace DDDSample1.Controllers
{

    [Route("mdrs/[controller]")]
    [ApiController]
    public class TagsController : ControllerBase
    {
        private readonly UserService _service;
        private readonly RelationshipService _serviceRelationship;

        public TagsController(UserService service, RelationshipService relationshipsServices)
        {
            _service = service;
            _serviceRelationship = relationshipsServices;
        }

        // GET: tags
        [HttpGet("AllUserTags")]
        public async Task<ActionResult<IEnumerable<TagCountDTO>>> GetAllUserTags()
        {
            return await _service.GetAllUsersTags();
        }

        // GET: tags/5
        [HttpGet("AllRelationshipTags")]
        public async Task<ActionResult<IEnumerable<TagCountDTO>>> GetAllRelationshipTags()
        {
            return await _serviceRelationship.GetAllRelationshipTags();
        }

        // GET: tags/5
        [HttpGet("AllRelationshipTagsByUser/{id}")]
        public async Task<ActionResult<IEnumerable<Tag>>> GetAllRelationshipTagsByUser(string id)
        {
            return await _serviceRelationship.GetAllRelationshipTagsByUser(id);
        }
    }
}