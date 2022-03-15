
% server Prolog
:- use_module(library(http/thread_httpd)).
:- use_module(library(http/http_dispatch)).
:- use_module(library(http/http_parameters)).
:- use_module(library(http/http_client)).

% json
:- use_module(library(http/json)).
:- use_module(library(http/json_convert)).
:- use_module(library(http/http_json)).

% Compilar
:- compile('../LoadFiles.pl').



%--------------------------
%  JSON OBJECT
%--------------------------


:- json_object allpaths(paths:list).

:- json_object user(status:atom).










%----------------------------------------------------------
% Rela��o entre pedidos HTTP e predicados que os processam
%----------------------------------------------------------
%


% Rela��o entre pedidos HTTP e predicados que os processam
% :- http_handler('/processa_json', p_json, []).




% Caminho mais curto
:- http_handler(root(handle_request_shortest_path), handle_request_shortest_path,[]).


% Caminho mais forte
:- http_handler(root(handle_request_strongest_path), handle_request_strongest_path,[]).


% Caminho mais seguro
:- http_handler(root(handle_request_safest_path), handle_request_safest_path,[]).



% Adicionar Users
:- http_handler(root(handle_request_createUser), handle_request_createUser,[]).
%no('Sarah Silva', 'Proud', ['rap', 'football', 'trip', 'sport', 'outdoors']).
%%create users
%createUser(UserA, Mood, ListOfTags):-
%                    not(no(UserA, _,_)),
%                    assert(no(UserA, Mood, ListOfTags)).

% Criar Conexoes
:- http_handler(root(handle_request_createConnection), handle_request_createConnection,[]).
%createConnection(UserA, UserB, ConnectionStrenght, ConnectionTag):-
%                    not(isConnected(UserA, UserB)),
%                    assert(ligacao(UserA, UserB, ConnectionStrenght, [ConnectionTag])).









%--------------------------
% Implementa��o
%--------------------------


% initiates server at given port
server(Port) :-
        http_server(http_dispatch, [port(Port)]).












% Caminho mais curto
%
handle_request_shortest_path(_Request):-
        http_parameters(_Request, [userFrom(Orig, []), userTo(Dest,[])]),
        (caminho_maisCurto(Orig, Dest, LCaminho_minlig),
        prolog_to_json(allpaths(LCaminho_minlig), JSON_Object)),
        reply_json(JSON_Object).


% Caminho mais forte
%
handle_request_strongest_path(_Request):-
        http_parameters(_Request, [userFrom(Orig, []), userTo(Dest,[])]),
        (caminho_maisForte(Orig, Dest, LCaminho_maisForte),
        prolog_to_json(allpaths(LCaminho_maisForte), JSON_Object)),
        reply_json(JSON_Object).


% Caminho mais seguro
%
handle_request_safest_path(_Request):-
        http_parameters(_Request, [value(ValorMin, []),userFrom(Orig, []), userTo(Dest,[])]),
        atom_number(ValorMin, Valor),
        (caminho_maisSeguro(Valor,Orig, Dest, LCaminho_maisSeguro),
        prolog_to_json(allpaths(LCaminho_maisSeguro), JSON_Object)),
        reply_json(JSON_Object).

% Criar USer
%
handle_request_createUser(_Request):-
        http_parameters(_Request, [userName(UserA, []),mood(Mood, []), tags(ListOfTags,[])]),
        (createUser(UserA, Mood, ListOfTags),
        prolog_to_json(user('ok'), JSON_Object)),
        reply_json(JSON_Object).


% Criar Conexao
%
handle_request_createConnection(_Request):-
        http_parameters(_Request, [userFrom(UserA, []),userTo(UserB, []),connectionStrenght(ConnectionStrenght, []), tags(ConnectionTag,[])]),
        (createConnection(UserA, UserB, ConnectionStrenght, ConnectionTag),
        prolog_to_json(user('ok'), JSON_Object)),
        reply_json(JSON_Object).

%createConnection(UserA, UserB, ConnectionStrenght, ConnectionTag):-
%                    not(isConnected(UserA, UserB)),
%                    assert(ligacao(UserA, UserB, ConnectionStrenght, [ConnectionTag])).
% ------------------------------------------------------------------------
