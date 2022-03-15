using System.Globalization;
using System.Threading.Tasks;
using System.Collections.Generic;
using DDDSample1.Domain.Shared;
using DDDSample1.Domain.IntroductionRequests;
using DDDSample1.Domain.Users.domain;
using DDDSample1.Domain.Users.repository;
using System;
using DDDSample1.Domain.Relationships;
using DDDSample1.Domain.Planeamentos;
using DDDSample1.Domain.Users.service;
using DDDSample1.Domain.Users.dto;

namespace DDDSample1.Domain.Shared
{

    public class ServiceHelper
    {

        private readonly PlaneamentoService _planeamentoService;
        private readonly RelationshipService _relationshipService;
        private readonly UserService _userService;
        public static Boolean status = false;

        public ServiceHelper(PlaneamentoService _planeamentoService, RelationshipService _relationshipService, UserService _userService)
        {
            this._relationshipService = _relationshipService;
            this._userService = _userService;
            this._planeamentoService = _planeamentoService;
        }
        public static void Unsync()
        {
            status = true;
        }
        public async void AllAsync()
        {
            if (status)
            {
                List<RelationshipDto> connections = await _relationshipService.GetAllAsync();
                List<UserDTO> usersDomain = await _userService.GetAllAsync();
                List<PlaneamentoUserDTO> users = await _userService.GetUsersPlanemento();
                var test = await _planeamentoService.createUsers(users, usersDomain, connections);
                var t1 = await _planeamentoService.createUsers(users, usersDomain, connections);
                status = false;
            }

        }


    }
}