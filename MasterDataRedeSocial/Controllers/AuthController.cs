using DDDSample1.Domain.Shared;
using DDDSample1.Domain.Shared.ValueObjects;
using DDDSample1.Domain.Users.dto;
using DDDSample1.Domain.Users.service;
using MasterDataRedeSocial.Domain.Users.dto;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace MasterDataRedeSocial.Controllers
{
    [Route("mdrs/auth")]
    [ApiController]
    public class AuthController : Controller
    {

        private readonly UserService _service;

        public AuthController(UserService service)
        {
            _service = service;
        }


        [HttpPost]
        public async Task<ActionResult<UserDTO>> Login(LoginDTO user)
        {
            try
            {
                var res = await _service.Authenticate(user.Email.ToString(), user.Password.ToString());

                if (res == null)
                {
                    return NotFound();
                }
                return Ok(res);
            }

            catch (BusinessRuleValidationException ex)
            {
                return BadRequest(new { Message = ex.Message });
            }
        }
    }
}
