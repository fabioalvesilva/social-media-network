
% server Prolog
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_parameters)).
:- use_module(library(http/http_client)).

% json
:- use_module(library(http/json)).
:- use_module(library(http/json_convert)).
:- use_module(library(http/http_json)).
:- use_module(library(http/http_open)).


% Compilar
:- compile('../LoadFiles.pl').



%--------------------------
%  JSON OBJECT
%--------------------------


:- json_object allpaths(paths:list).

:- json_object user(status:atom).

:- json_object groups(users:list,tags:list).


%----------------------------------------------------------
% Rela��o entre pedidos HTTP e predicados que os processam
%----------------------------------------------------------
%

% Caminho mais curto


% Caminho mais forte



% Caminho mais seguro








%--------------------------
% Implementa��o
%--------------------------


% initiates server at given port
server(Port) :-
        http_server(http_dispatch, [port(Port)]).



% Caminho mais curto
%
:- http_handler(root(handle_request_shortest_path), handle_request_shortest_path,[]).

handle_request_shortest_path(_Request):-
        http_parameters(_Request, [userFrom(Orig, []), userTo(Dest,[])]),
        (caminho_maisCurto(Orig, Dest, LCaminho_minlig),        
        prolog_to_json(allpaths(LCaminho_minlig), JSON_Object)),
        reply_json(JSON_Object).

% Caminho mais forte
%
:- http_handler(root(handle_request_strongest_path), handle_request_strongest_path,[]).

handle_request_strongest_path(_Request):-
        http_parameters(_Request, [userFrom(Orig, []), userTo(Dest,[])]),
        (caminho_maisForte(Orig, Dest, LCaminho_maisForte),
        prolog_to_json(allpaths(LCaminho_maisForte), JSON_Object)),
        reply_json(JSON_Object).


% Caminho mais seguro
%
:- http_handler(root(handle_request_safest_path), handle_request_safest_path,[]).
handle_request_safest_path(_Request):-
        http_parameters(_Request, [value(ValorMin, []),userFrom(Orig, []), userTo(Dest,[])]),
        atom_number(ValorMin, Valor),
        (caminho_maisSeguro(Valor,Orig, Dest, LCaminho_maisSeguro),
        prolog_to_json(allpaths(LCaminho_maisSeguro), JSON_Object)),
        reply_json(JSON_Object).

% GRoups
:- http_handler(root(handle_request_user_groups), handle_request_user_groups,[]).
handle_request_user_groups(_Request):-
        http_parameters(_Request, [value(ValorMin, []),user(User, [])]),
        (caminho_maisForte('Sarah Silva', 'Rafael Soares', LCaminho_maisForte)),
        (sinonym('sport',Tags,_)),
        prolog_to_json(groups(LCaminho_maisForte,Tags), JSON_Object),
        reply_json(JSON_Object).        

% Criar USer
%
handle_request_createUser(_Request):-
        http_parameters(_Request, [userName(UserA, []),mood(Mood, []), tags(ListOfTags,[])]),
        (createUser(UserA, Mood, ListOfTags),
        prolog_to_json(user('ok'), JSON_Object)),
        reply_json(JSON_Object).



% --------------------------Users Creation------------------------
:- http_handler(root(handle_request_createUsers), handle_request_createUsers,[]).

handle_request_createUsers(Request) :-
        http_read_json(Request, JSON, [json_object(term)]),
        retractall(no(_, _, _)),
        create_users(JSON),
        R = JSON,
        prolog_to_json(R, JSONObject),
        reply_json(JSONObject, [json_object(term)]).

create_users([]):-!.
create_users([json(Node)|Lista]):-
         assertz(no(Node.name, Node.mood, Node.tags)),
         create_users(Lista).

% ------------------------------------------------------------------------
% --------------------------Connections Creation--------------------------
%%TEST Connection ligacao('Sarah Silva', 'Rafael Soares',_,_).
:- http_handler(root(handle_request_createConnections), handle_request_createConnections,[]).

handle_request_createConnections(Request) :-
        http_read_json(Request, JSON, [json_object(term)]),
        %retractall(ligacao(_, _, _, _)),
        create_connections(JSON),
        R = JSON,
        prolog_to_json(R, JSONObject),
        reply_json(JSONObject, [json_object(term)]).

create_connections([]):-!.
create_connections([json(Node)|Lista]):-
         assertz(ligacao(Node.userFrom, Node.userTo, Node.connectionStrength, Node.relationshipStrength)),
         create_connections(Lista).


% ------------------------------------------------------------------------
% --------------------------Groups Creation-------------------------------


%%%%WIP%%%%%%%%
% ------------------------------------------------------------------------
