
%-----------------------
% FICHEIRO DE PREDICADOS
%-----------------------



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%                       SPRINT B

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%



% ------------------------------------------------------------------------
%                                 UC's'
% ------------------------------------------------------------------------
%


% Obter os utilizadores que tenham em comum Xtags sendo X parametrizavel.
% Deve ter em aten��o que duas tags sintaticamente
% diferentes podem ter o mesmo significado semantico (e.g. C# e CSharp).
%




userWithXTagsInCommon(X, Tags_Users):-
                    listAllTags(AllTags),
                    getCategoriesFromTags(AllTags,MainTagListTemp),                    %obter as categorias das tags
                    removeDuplicates(MainTagListTemp, MainTagList),                    %remove duplicados da lista de tags
                    sort(MainTagList, SortedMainTagList),                              %ordena alfabeticamente as tags
                    allCombination(X,SortedMainTagList, TagsCombination),              %faz combina��es de x tags
                    listUsers(ListOfUsers),                                            %lista de users
                    tagsInCommon(X,TagsCombination,ListOfUsers,[],Tags_Users).




tagsInCommon(_,[],_, TempList,  TempList).

tagsInCommon(X,[H|T],ListOfUsers, TempList,  Tag_Users):-
                   usersWithCommonTags(X,H,ListOfUsers,[],UserListWithCommonTag),      %verifica a presenca de uma determinada combina��o de tag numa lista de
                   length(UserListWithCommonTag,Length),                               %verifica o tamanho da lista com os users que possui a combina��o de dada tag
                   Length>0,                                                           %se for >0 ent�o:
                   append([H],[UserListWithCommonTag], TempTag_Users),                 %faz append da tag com lista de users: [[music, sport], ['Sarah Silva', 'Fabio Silva']]
                   tagsInCommon(X,T,ListOfUsers,[TempTag_Users|TempList], Tag_Users).

tagsInCommon(X,[_|T],ListOfUsers, TempList,  Tag_Users):-
                    tagsInCommon(X,T,ListOfUsers,TempList, Tag_Users).





usersWithCommonTags( _,_,[],TempList, TempList):-!.

usersWithCommonTags(X,TagCombination, [H|T], TempList, Tag_User):-
                    listTagsOfUser(H,UserTagList),                                     %lista de tags do user
                    getCategoriesFromTags(UserTagList,MainTagListTemp),                %obter as categorias das tags
                    removeDuplicates(MainTagListTemp, MainTagList),                    %remove duplicados da lista de tags
                    sort(MainTagList, SortedMainTagList),                              %ordena alfabeticamente as tags
                    allCombination(X,SortedMainTagList, UserTagsCombination),          %faz combina��es de x tags
                    member(TagCombination,UserTagsCombination),!,                      %verifica se a combina��o das tags referencia est� nas combina��es do user

                    usersWithCommonTags(X,TagCombination, T, [H|TempList], Tag_User).

usersWithCommonTags(X,TagCombination, [_|T],TempList, Tag_User):-
                    usersWithCommonTags(X,TagCombination, T, TempList, Tag_User).








%-----------------------------------------------------------------------

% Sugerir conex�es com outros utilizadores tendo por base as tags e
% conex�es partilhadas (at� determinado n�vel).

% Entendimento do problema: Reportar todos os utilizadores dentro de
% determinado nivel que possuem a mesma tag e retornar o seu caminho.
%



userSugestions(User,Level, Sugestions):-
                    listTagsOfUser(User,UserTagList),                                  %lista de tags do user
                    getCategoriesFromTags(UserTagList,UserMainTagListTemp),            %obter as categorias das tags
                    removeDuplicates(UserMainTagListTemp, UserMainTagList),            %remove duplicados da lista de tags
                    userNetworkByDimension(User,Level,ListAllUsers),                   %obter a lista de users dentro de um determinado nivel
                    listAllConnectionsOfUserA(User, UserConnections),                  %obter a lista das conexoes do userOrig
                    removeElement(ListAllUsers, User, ListAllUsersTemp),               %remover da lista dos users (dentro do nivel) o userOrig
                    removeElements(UserConnections,ListAllUsersTemp,ListUsers),        %remover da lista dos users (dentro do nivel) as conxoes diretas do userOrig
                    getSugestions(ListUsers, UserMainTagList, [], Sugestions).         %obter as sugestoes



getSugestions([], _, TempUsers, TempUsers).

getSugestions([H|T], UserMainTagList, TempUsers, Sugestions):-
                    listTagsOfUser(H,UserTagList),                                     %lista de tags do user em estudo
                    getCategoriesFromTags(UserTagList,MainTagListTemp),                %obter as categorias das tags
                    removeDuplicates(MainTagListTemp, MainTagList),                    %remove duplicados da lista de tags
                    intercecao(UserMainTagList, MainTagList, TagsInCommon),            %intercecao entre a lista de tags do user orig e o user em estudo
                    length(TagsInCommon, Length),                                      %verificar o tamanho da lista anterior
                    Length>0,!,                                                        %se houver pelo menos um elemento:
                    getSugestions(T, UserMainTagList, [H|TempUsers], Sugestions).      %adicionar o User numa lista temporaria

getSugestions([_|T], UserMainTagList, TempUsers, Sugestions):-
                    getSugestions(T, UserMainTagList, TempUsers, Sugestions).




userNetworkByDimension(User,Level,ListAllUsers):-
                    userNetworkByDimension2(User,_,Level,ListAllUsers).

userNetworkByDimension2(Orig,X,Nivel,UserNetworkDimension):-
                    findall(Cam,dfs2(Orig,X,Cam,Nivel),List),                           %todos os caminhos
                    flatten(List, ListWithRep),                                         %flatten as varias listas com os diversos caminhos
                    removeDuplicates(ListWithRep,UserNetworkDimension).                 %remover duplicados permitindo obter uma lista de users







% -------------------------------------------------------------------------




% Determinar o tamanho da rede de um utilizador (at� um determinado nivel)
%
% Parametros:
%     - Orig: Origem
%     - Nivel: Nivel
%     - NetworkDimension: Resultado final




networkDimension(Orig,Nivel,NetworkDimension):-
                    networkDimensions(Orig,_,Nivel,NetworkDimension).



networkDimensions(Orig,X,Nivel,NetworkDimension):-
                    findall(Cam,dfs2(Orig,X,Cam,Nivel),List),
                    flatten(List, ListWithRep),
                    removeDuplicates(ListWithRep,FinalList),
                    length(FinalList, Dimension),
                    NetworkDimension is Dimension-1.


dfs2(Orig,X,Cam, M):-
                    dfs2(Orig,X,[Orig],Cam, M) .

dfs2(Dest,Dest,LA,Cam, _):-
                    reverse(LA,Cam).

dfs2(Act,Dest,LA,Cam, M):-
                    M> 0, M1 is M-1,
                    ligacao(Act,X,_,_),
                    \+member(X,LA),
                    dfs2(X,Dest,[X|LA], Cam, M1).





%-----------------------------------------------------------------------


% determinar o caminho mais curto (minimiza o n�mero de liga��es) para
% determinado utilizador



% COM FINDALL:
% ------------

caminho_maisCurto_FindAll(Orig,Dest,LCam):-
                    %get_time(T1),
                    findall(Cam,dfs(Orig,Dest,Cam),AllCaminhos),
                    %length(AllCaminhos, Count),
                    shortest(AllCaminhos, LCam).
                    %get_time(T2),
                    %T is T2-T1,nl,
                    %nl, write('N�mero de solu��es encontradas: '),write(Count),
                    %nl, write('Tempo de geracao da solucao:'),write(T),nl.






% SEM FINDALL:
% ------------



:-dynamic melhor_sol_minlig/2.
:-dynamic conta_sol/1.

caminho_maisCurto(Orig,Dest,LCaminho_minlig):-
                   % get_time(Ti),
                    (melhor_caminho_minlig(Orig,Dest);true),
                    retract(melhor_sol_minlig(LCaminho_minlig,_)).
                    %retract(conta_sol(NS1)),
                    %get_time(Tf),
                    %T is Tf-Ti,
                    %nl, write('N�mero de solu��es encontradas: '),write(NS1),
                    %nl, write('Tempo de geracao da solucao:'),write(T),nl.


melhor_caminho_minlig(Orig,Dest):-
                    asserta(melhor_sol_minlig(_,10000)),
                    asserta(conta_sol(0)),
                    dfs(Orig,Dest,LCaminho),
                    atualiza_melhor_minlig(LCaminho),
                    fail.


atualiza_melhor_minlig(LCaminho):-
                    retract(conta_sol(NS)),
                    NS1 is NS+1,
                    asserta(conta_sol(NS1)),
                    melhor_sol_minlig(_,N),
                    length(LCaminho,C),
                    %nl, write(LCaminho), nl,
                    C<N, !,
                    retract(melhor_sol_minlig(_,_)),
                    asserta(melhor_sol_minlig(LCaminho,C)).





% SEM FINDALL OTIMIZADO:
% ----------------------


:-dynamic melhor_sol_minlig_Otimizado/2.
:-dynamic conta_sol_Otimizado/1.

caminho_maisCurto_Otimizado(Orig,Dest,LCaminho_minlig):-
                    %get_time(Ti),
                    (melhor_caminho_minlig_Otimizado(Orig,Dest);true),
                    retract(melhor_sol_minlig_Otimizado(LCaminho_minlig,_)).
                    %retract(conta_sol_Otimizado(NS1)),
                    %get_time(Tf),
                    %T is Tf-Ti,
                    %nl, write('N�mero de solu��es encontradas: '),write(NS1),
                    %nl, write('Tempo de geracao da solucao:'),write(T),nl.


melhor_caminho_minlig_Otimizado(Orig,Dest):-
                    asserta(conta_sol_Otimizado(0)),
                    asserta(melhor_sol_minlig_Otimizado(_,10000)),
                    dfs3(Orig,Dest,_),
                    retract(conta_sol_Otimizado(NS)),
                    NS1 is NS+1,
                    asserta(conta_sol_Otimizado(NS1)),
                    fail.



dfs3(Orig,Dest,Cam):-
                    dfs3(Orig,Dest,[Orig],Cam),
                    melhor_sol_minlig_Otimizado(_,N),
                    length(Cam,Y),
                    Y<N,
                    retract(melhor_sol_minlig_Otimizado(_,_)),
                    asserta(melhor_sol_minlig_Otimizado(Cam,Y)).

dfs3(Dest,Dest,LA,Cam):-
                    reverse(LA,Cam).

dfs3(Act,Dest,LA,Cam):-
                    ligacao(Act,X,_,_),
                    \+ member(X,LA),
                    melhor_sol_minlig_Otimizado(_,N),
                    length(LA,Y),
                    Y<N,
                    dfs3(X,Dest,[X|LA],Cam).





%-----------------------------------------------------------------------

% determinar o caminho mais forte (maximiza o somat�rio das for�as de
% liga��o) para determinado utilizador



:-dynamic melhor_sol_maisForte/2.
:-dynamic conta_sol_maisForte/1.


caminho_maisForte(Orig,Dest,LCaminho_maisForte):-
                   %get_time(Ti),
                  (melhor_caminho_maisForte(Orig,Dest);true),
                   retract(melhor_sol_maisForte(LCaminho_maisForte,_)).
                   %retract(conta_sol_maisForte(NS1)),
                   %get_time(Tf),
                   %T is Tf-Ti,
                   %nl, write('N�mero de solu��es encontradas: '),write(NS1),nl,
                   %nl, write('Tempo de geracao da solucao:'),write(T),nl.


melhor_caminho_maisForte(Orig,Dest):-
                   asserta(melhor_sol_maisForte(_,0)),
                   asserta(conta_sol_maisForte(0)),
                   dfs(Orig,Dest,LCaminho),
                   atualiza_melhor_maisForte(LCaminho),
                   fail.

atualiza_melhor_maisForte(LCaminho):-
                   retract(conta_sol_maisForte(NS)),
                   NS1 is NS+1,
                   asserta(conta_sol_maisForte(NS1)),
                   melhor_sol_maisForte(_,N),
                   calculateStrength(LCaminho,[],SumStrength) ,
                   %write(SumStrength),
                   %nl, write("Caminho: "), write(LCaminho), nl,
                   SumStrength>N,
                   retract(melhor_sol_maisForte(_,_)),
                   asserta(melhor_sol_maisForte(LCaminho,SumStrength)).



calculateStrength([_],Temp,SumStrength):- sumList(Temp,SumStrength),!.
calculateStrength([A,B|T], Temp, Strength):-

                   ligacao(A,B,C1,_),
                   ligacao(B,A,C2,_),
                   Soma is C1+C2,

                   removeElement([A,B|T],A,List),

                   calculateStrength(List,[Soma|Temp],Strength).





%-----------------------------------------------------------------------


% Consultar o caminho mais seguro (garante que n�o h� uma for�a de
% liga��o inferior a x considerando as for�as nos dois sentidos da
% liga��o) para determinado utilizador


:-dynamic melhor_sol_maisSeguro/2.
:-dynamic conta_sol_maisSeguro/1.


caminho_maisSeguro(X,Orig,Dest,LCaminho_maisSeguro):-
                   %get_time(Ti),
                  (melhor_caminho_maisSeguro(X,Orig,Dest) ;true),
                   retract(melhor_sol_maisSeguro(LCaminho_maisSeguro,_)).
                   %retract(conta_sol_maisSeguro(NS1)),
                   %get_time(Tf),
                   %T is Tf-Ti,
                   %nl, write('N�mero de solu��es encontradas: '),write(NS1),nl,
                   %nl, write('Tempo de geracao da solucao:'),write(T),nl.


melhor_caminho_maisSeguro(X,Orig,Dest):-
                   asserta(melhor_sol_maisSeguro(_,0)),
                   asserta(conta_sol_maisSeguro(0)),
                   dfs(Orig,Dest,LCaminho),
                   atualiza_melhor_maisSeguro(X,LCaminho),
                   fail.

atualiza_melhor_maisSeguro(X,LCaminho):-
                   retract(conta_sol_maisSeguro(NS)),
                   NS1 is NS+1,
                   asserta(conta_sol_maisSeguro(NS1)),
                   melhor_sol_maisSeguro(_,N),
                   calculateStrength_Secure(X,LCaminho,[],SumStrength),
                   %nl, write("Caminho: "), write(LCaminho), nl,
                   SumStrength>N,
                   retract(melhor_sol_maisSeguro(_,_)),
                   asserta(melhor_sol_maisSeguro(LCaminho,SumStrength)).


calculateStrength_Secure(_,[_],Temp,SumStrength):- sumList(Temp,SumStrength),!.
calculateStrength_Secure(X,[A,B|T], Temp, Strength):-

                   ligacao(A,B,C1,_),
                   ligacao(B,A,C2,_),
                   Soma is C1+C2,
                   Soma >= X,

                   removeElement([A,B|T],A,List),

                   calculateStrength_Secure(X,List,[Soma|Temp],Strength).




% ------------------------------------------------------------------------
% ------------------------------------------------------------------------
%			         LISTAS
% ------------------------------------------------------------------------
% ------------------------------------------------------------------------
%


% Lista todos os users
% ---------------------
%
% retorna: lista de todos os users registados no sistema
%

listUsers(List):-findall(User, no(User,_,_), List).




% Lista outros users (excepto user que entrou por parametro)
% ----------------------------------------------------------
%
% retorna: lista de todos os users exceto o user passado por parametro
%
%

listOtherUsers(User,List):- findall(OtherUsers, (no(OtherUsers,_,_), OtherUsers\=User),List).






% Lista com todas as conex�es de um determinado user
% ---------------------------------------------------
%
% Nota:
%    - isConnected2 - metodo unidirecional + multiplos resultados
%

listAllConnectionsOfUserA(A,List):-findall(B,(isConnected2(A,B)),List).






% Lista de todas as tags
% ------------------------------
%
% retorna:  lista de todas as tags registadas
%
%

listAllTags(FinalList):-
                    findall(X,sinonym(X,_,_),List),
                    sort(List, FinalList).





% Lista de todas as categorias de tags
% ------------------------------------
%
% retorna:  lista de todas as categorias de tags
%           (categoria engloba todos os sinonimos daquela categoria)
%
%

listAllTagsCategory(FinalList):-
                    findall(X,sinonym(_,_,X),TempList),
                    removeDuplicates(TempList, List),
                    sort(List, FinalList).






% Lista de tags de um utilizador
% ------------------------------
%
% retorna: todas as listas de um user
%
%

listTagsOfUser(User, FinalList):-
                    no(User,_,List),
                    sort(List, FinalList).





% Lista as tags de um utilizador e os seus respetivos sinonimos
% -----------------------------------------------------------------
%
% Parametros:
%    - lista de tags do user
%    - lista de sinonimos (temporario)
%    - lista final



listOfTagsSinonym([],SinonymTags,Final):-
                   flatten(SinonymTags,FlattenList),
                   removeDuplicates(FlattenList,Final).

listOfTagsSinonym([H|T], SinonymTags, UserAllTags):-
                   sinonym(H,ListSinonyms,_),
                   uniao([H],ListSinonyms,HTags),
                   listOfTagsSinonym(T,[HTags|SinonymTags],UserAllTags).





% Lista as categorias das tags de um determinado utilizador
% -----------------------------------------------------------------
%
% Parametros:
%    - lista de tags do user
%    - lista final



getCategoriesFromTags([],[]):- !.

getCategoriesFromTags([H|T], [L|MainTagList]):-
                   sinonym(H,_,L),!,                           %devolve a categoria da tag
                   getCategoriesFromTags(T,MainTagList).

getCategoriesFromTags([_|T], MainTagList):-
                   getCategoriesFromTags(T,MainTagList).







% Lista as tags em comum entre 2 users
% -------------------------------------.
%
% Parametros:
%    - lista de tags referencia (UserAllTags)
%
%

tagsInCommonBetween2Users(UserAllTags,UserB, CommonTags):-
                    listTagsOfUser(UserB,UserBTags),
                    intercecao(UserAllTags,UserBTags,CommonTags).






% Lista os utilizadores que tenhan X Tags em comum com outro o User passado por parametro
% ------------------------------------------------------------------------------------------
%
% Parametros:
%    - lista de tags referencia (UserAllTags)
%


usersWithXTagsInCommon(_,[],_,[]):-!.
usersWithXTagsInCommon(UserAllTags, [H|T], X, [H|Result]):-
                    tagsInCommonBetween2Users(UserAllTags, H, CommonTags),
                    numberOfTagsInCommon(CommonTags,NumberOfCommonTags),
                    NumberOfCommonTags >= X, !,
                    usersWithXTagsInCommon(UserAllTags, T, X, Result).

usersWithXTagsInCommon(UserAllTags, [_|T], X, Result):-
                    usersWithXTagsInCommon(UserAllTags, T, X, Result).











% ------------------------------------------------------------------------
%			     PREDICADOS SIMPLES
% ------------------------------------------------------------------------
%





% A est� conectado a B ?
% -----------------------
%
% Nota:
%     - isConnected: unidirecional + �nica solucao
%     - isConnected2: unidirecional + multiplas solucoes
%     - isConnected3: bidirecionalidade + m�ltiplas solucoes
%     - isConnected4: bidirecionalidade + unica solucao


isConnected(A,B):-  ligacao(A,B,_,_),!,A\=B.
isConnected2(A,B):- ligacao(A,B,_,_),A\=B.
isConnected3(A,B):- (ligacao(A,B,_,_);ligacao(B,A,_,_)),A\=B.
isConnected4(A,B):- (ligacao(A,B,_,_);ligacao(B,A,_,_)),!,A\=B.







% ------------------------------------------------------------------------
%			     OUTROS PREDICADOS
% ------------------------------------------------------------------------
%




% quantifica o numero de tags em comum com outro user
% ----------------------------------------------------
%
% Parametros: Lista de tags em comun
%
%

numberOfTagsInCommon(CommonTags,Number):-
                    length(CommonTags,Number).







% ------------------------------------------------------------------------
%                           DFS e BFS
% ------------------------------------------------------------------------
%
%



dfs(Orig,Dest,Cam):-
                    dfs(Orig,Dest,[Orig],Cam).
dfs(Dest,Dest,LA,Cam):-
                    reverse(LA,Cam).
dfs(Act,Dest,LA,Cam):-
                    ligacao(Act,X,_,_),
                    \+ member(X,LA),
                    dfs(X,Dest,[X|LA],Cam).





% ------------------------------------------------------------------------
%                           UTILS
% ------------------------------------------------------------------------
%
%

% Uniao de dois conjuntos representados por listas
% O predicado uniao � diferente da concatena��o na medida que as
% listas representam conjuntos, logo nao podem ter elementos repetidos.

uniao([],L,L).
uniao([X|L1],L2,LU):-
                    member(X,L2),!,
                    uniao(L1,L2,LU).
uniao([X|L1],L2,[X|LU]):-
                    uniao(L1,L2,LU).



%Remove elements

removeElement([],_,[]).
removeElement(List,X,FinalList):-
                    delete(List,X,FinalList).



%Remove Elements of a list within a list

removeElements([],List,List).
removeElements([H|T],ListToUpdate,ListUpdated):-
                    removeElement(ListToUpdate,H,UsersUpdate),
                    removeElements(T,UsersUpdate, ListUpdated).




%Remove duplicates

removeDuplicates([],[]).
removeDuplicates([H|T],List):-
                    member(H,T),!,
                    removeDuplicates(T,List).
removeDuplicates([H|T],[H|List]):-
                    removeDuplicates(T,List).



% O predicado Interce�ao � diferente da uniao na medida que representa
% os valores em comum entre 2 listas (sem repeti��es).

intercecao([],_,[]).
intercecao([X|List1],List2,[X|LI]):-
                    member(X,List2),!,
                    intercecao(List1, List2, LI).
intercecao([_|List1],List2,LI):-
                    intercecao(List1,List2,LI).



% Sublista mais pequena em Lista

shortest(L,S) :-
       setof((C,E),
       (member(E,L),length(E,C)),[(_,S)|_]).



% The sum of all elements in list in prolog

sumList([], 0).

sumList([H | T], S) :-
        sumList(T, S1),
	S is H + S1.



% The sum of all elements in list in prolog

allCombination(X,ListOfAllTags,TagsCombination):-
                    findall(L,combination(X,ListOfAllTags,L),TagsCombination).

combination(0,_,[]):-!.
combination(X,[Tag|L],[Tag|T]):-
                    X1 is X-1,
                    combination(X1,L,T).
combination(X,[_|L],T):-
                    combination(X,L,T).






% -------------------------------------------------------------------------
%                            UPDATE DA BASE DE CONHECIMENTO
% ------------------------------------------------------------------------
%



%create users
createUser(UserA, Mood, ListOfTags):-
                    not(no(UserA, _,_)),
                    assert(no(UserA, Mood, [ListOfTags])).

%remove user
removeUser(UserA):-
                    (no(UserA, _, _),retractall(no(UserA, _, _))).





%create connections
createConnection(UserA, UserB, ConnectionStrenght, ConnectionTag):-
                    not(isConnected(UserA, UserB)),
                    assert(ligacao(UserA, UserB, ConnectionStrenght, [ConnectionTag])).

%remove connections
removeConnection(UserA, UserB):-
                    (ligacao(UserA, UserB, Strenght, TagList),retractall(ligacao(UserA, UserB, Strenght, TagList)));
		    (ligacao(UserB, UserA, Strenght, TagList),retractall(ligacao(UserB, UserA, Strenght, TagList))).






