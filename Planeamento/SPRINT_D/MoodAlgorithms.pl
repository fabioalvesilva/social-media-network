
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

%                       SPRINT D

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%


suggestGroups(User,NumCommonTags,MinNumberUsers,MandatoryListTags,Group):-
                    length(MandatoryListTags, Length),
                    (Length > 0,!,suggestGroups_MandatoryTags(User,NumCommonTags,MinNumberUsers,MandatoryListTags,Group));
                    suggestGroups_NoMandatoryTags(User,NumCommonTags,MinNumberUsers,Group).



suggestGroups_MandatoryTags(User,NumCommonTags,MinNumberUsers,MandatoryTags,Group):-
                    userWithXTagsInCommon(NumCommonTags, ListAllCombinations),                                               % obter lista com todas as combina��es de X tags
                    filterByUserOrig(User,ListAllCombinations,[], FilteredByUser),                                           % filtrar apenas as combina��es que tenham o userOrig
                    filter_RemoveUserOrig(User,FilteredByUser,FilteredByNonOrig),                                            % remover das combina��es os users a remover
                    filterByMandatoryTags(FilteredByNonOrig,MandatoryTags,FilteredByMandatoryTags),                          %  Manter apenas combina��es com tags obrigatorias
                    filterByNumberOfUsers(MinNumberUsers,FilteredByMandatoryTags,[],FilteredByNumberOfUsers),!,              % filtrar a lista obrigando a um mininmo de Y users
                    length(FilteredByNumberOfUsers,FilteredByNumberOfUsersLength),
                    FilteredByNumberOfUsersLength  > 0,
                    select_BiggestGroup(FilteredByNumberOfUsers,[],Group).                                                   % selecionar maior grupo


suggestGroups_NoMandatoryTags(User,NumCommonTags,MinNumberUsers,Group):-
                    userWithXTagsInCommon(NumCommonTags, ListAllCombinations),                                               % obter lista com todas as combina��es de X tags
                    filterByUserOrig(User,ListAllCombinations,[], FilteredByUser),                                           % filtrar apenas as combina��es que tenham o userOrig
                    filter_RemoveUserOrig(User,FilteredByUser,FilteredByNonUser),                                            % Remover das combina��es os users a remover
                    filterByNumberOfUsers(MinNumberUsers,FilteredByNonUser,[], FilteredByNumberOfUsers),                     % filtrar a lista obrigando a um mininmo de Y users
                    select_BiggestGroup(FilteredByNumberOfUsers,[],Group).                                                   % selecionar maior grupo




filterByMandatoryTags(Group,[],Group).
filterByMandatoryTags(FilteredByNonFriends,[Tag|OutrasTags],FilteredByMandatoryTags):-
                    selectTags(Tag,FilteredByNonFriends,[],Group),
                    filterByMandatoryTags(Group,OutrasTags,FilteredByMandatoryTags).

selectTags(_,[],Temp,Temp).
selectTags(Tag,[[Tags|Users]|OtherCombinations],Temp,Result):-
                    member(Tag,Tags),
                    selectTags(Tag,OtherCombinations,[[Tags|Users]|Temp],Result).
selectTags(Tag,[_|OtherCombinations],Temp,Result):-
                    selectTags(Tag,OtherCombinations,Temp,Result).


select_BiggestGroup([],TempList,Group):-
                    %nl,write('- Todos os grupos: '),write(TempList),nl,
                    sort(TempList,TempListOrderedAscend),
                    %nl,write('- Todos os grupos sorted: '),write(TempListOrderedAscend),nl,
                    reverse(TempListOrderedAscend,TempListOrderedDesc),
                    %nl,write('- Todos os grupos sorted Desc: '),write(TempListOrderedDesc),nl,
                    nth0(0,TempListOrderedDesc,Group1),
                    removeFirstElement(Group1,BiggerGroup),
                    %nl,write('- Maior grupo: '),write(BiggerGroup),nl,
                    flatten(BiggerGroup,Group).

select_BiggestGroup([[_|Users]|OtherCombinations],TempList,Group):-
                    flatten(Users,Users1),
                    length(Users1,LengthUser1),
                    select_BiggestGroup(OtherCombinations,[[LengthUser1|Users1]|TempList],Group).

removeFirstElement([_|T],T).



filterByNumberOfUsers(_,[],Temp,Temp).
filterByNumberOfUsers(MinNumberUsers,[[Tag|[Users|_]]|T],Temp,FilteredByNumber):-
                    length(Users,NumberOfUsers),
                    NumberOfUsers>=MinNumberUsers,
                    filterByNumberOfUsers(MinNumberUsers,T,[[Tag|[Users]]|Temp],FilteredByNumber).

filterByNumberOfUsers(MinNumberUsers,[_|T],Temp,FilteredByNumber):-
                    filterByNumberOfUsers(MinNumberUsers,T,Temp,FilteredByNumber).


filter_RemoveUserOrig(User,FilteredByUser,RemovedUser):-
                    removeUsers(User,FilteredByUser,[],RemovedUser).

removeUsers(_,[],Temp,Temp).
removeUsers(UserToRemove,[[Tag|Users]|C],Temp,Result):-
                    flatten(Users,Users1),
                    removeElement(Users1,UserToRemove, RemovedUser),
                    removeUsers(UserToRemove,C, [[Tag|[RemovedUser]]|Temp],Result).


filterByUserOrig(_, [], Temp, Temp).
filterByUserOrig(User, [H|T], Temp, FilteredByUser):-
                    flatten(H,H1),
                    member(User,H1),
                    filterByUserOrig(User,T,[H|Temp],FilteredByUser).
filterByUserOrig(User,[_|T],Temp,FilteredByUser):-
                    filterByUserOrig(User,T,Temp,FilteredByUser).










%-----------------
% Mood Algorithms
%------------------



% Alegria / Angustia
% -------------------


moodUpdate_Joy_Distress(User, MoodUpdatedValue):-

    getMood_Joy_Distress(User,UserMoodValue),                                                     % obter o valor do mood Alegria/angustia

    getLikesDislikes(User, LikesDislikesValue),                                                   % obter o valor da dif. entre likes e dislikes de um user

    abs(LikesDislikesValue,LikesDislikesValueAbs),                                                % obter o valor absoluto da dif. entre likes e dislikes

    SaturationValue is 50,                                                                        % colocar o valor de saturacao

    append([LikesDislikesValueAbs],[SaturationValue],List),                                       % criar uma lista com o valor da dif de dislikes/likes e valor de saturacao
    getMin(List,MinValue),                                                                        % obter o minimo da lista
    getMoodUpdate(UserMoodValue,LikesDislikesValue,SaturationValue,MinValue,MoodUpdatedValue).    % metodo que define os novos valores do mood



getMoodUpdate(UserMoodValue,LikesDislikesValue,SaturationValue,MinValue,MoodUpdatedValue):-

        (LikesDislikesValue > 0,                                                                  % se o valor da dif. entre likes e dislikes for superior a 0:
         MoodUpdatedValue is (UserMoodValue+(1-UserMoodValue)*(MinValue/SaturationValue)));       % expressao matematica para contribuir para o aumento da EmoÁ„o

        (LikesDislikesValue < 0,                                                                  % se o valor da dif. entre likes e dislikes for superior a 0:
         MoodUpdatedValue is (UserMoodValue*(1-(MinValue/SaturationValue)))).                     % expressao matematica para contribuir para  diminuiÁ„o da EmoÁ„o


getMoodUpdate(UserMoodValue,_,_,_,UserMoodValue).                                                 % em caso do num da dif. entre likes dislikes for 0 (nao muda nada).




getMood_Joy_Distress(User, UserMoodValue):-
    mood(User,UserMoodValue,_,_,_,_,_).

getLikesDislikes(User, Value):-
    findall(FR,ligacao(_,User,_,FR), ListForcaRelacao),
    sumList(ListForcaRelacao,Value).

getMin(L,MinValue):-
    sort(L,SortedList),
    nth0(0,SortedList,MinValue).



%--------------------------------------------------------------------------------------------

%DFS with Multicrit�rio + Mood
%
%

:-dynamic melhor_sol_maisForte_Mult_Mood/2.
:-dynamic conta_sol_maisForte_Mult_Mood/1.


caminho_maisForte2_Mult_Mood(Orig,Dest,Nivel,LCaminho_maisForte,Forca):-
	%get_time(Ti),
	(melhor_caminho_maisForte2_Mult_Mood(Orig,Dest,Nivel);true),
	retract(melhor_sol_maisForte_Mult_Mood(LCaminho_maisForte,Forca)).
	%retract(conta_sol_maisForte_Mult(NS1)),
	%get_time(Tf),
	%T is Tf-Ti,
	%nl, write('N�mero de solu��es encontradas: '),write(NS1),nl,
	%nl, write('Tempo de geracao da solucao:'),write(T),nl.

melhor_caminho_maisForte2_Mult_Mood(Orig,Dest,Nivel):-
	asserta(melhor_sol_maisForte_Mult_Mood(_,0)),
	asserta(conta_sol_maisForte_Mult_Mood(0)),
	dfs(Orig,Dest,LCaminho),

        checkMoods(LCaminho,[],List),!,
        length(List,LCaminho1),
        LCaminho1>0,

	atualiza_melhor_maisForte2_Mult_Mood(LCaminho,Nivel),
	fail.

atualiza_melhor_maisForte2_Mult_Mood(LCaminho,Nivel):-
	retract(conta_sol_maisForte_Mult_Mood(NS)),
	NS1 is NS+1,
	asserta(conta_sol_maisForte_Mult_Mood(NS1)),
	melhor_sol_maisForte_Mult_Mood(_,N),

	calculateStrength2_Mult_Mood(LCaminho,[],SumStrength),
	length(LCaminho,C),
	%nl, write(LCaminho), nl,
	C1 is C-1,
	C1=<Nivel, !,
	%write(SumStrength),
	%nl, write("Caminho: "), write(LCaminho), nl,
	SumStrength>N,

        retract(melhor_sol_maisForte_Mult_Mood(_,_)),
	asserta(melhor_sol_maisForte_Mult_Mood(LCaminho,SumStrength)).


calculateStrength2_Mult_Mood([_],Temp,SumStrength):-
	sumList(Temp,SumStrength),!.

calculateStrength2_Mult_Mood([A,B|T], Temp, Strength):-
	ligacao(A,B,FL1,FR1),
	ligacao(B,A,FL2,FR2),
	Forca is FL1+FL2,
	Relacao is FR1+FR2,
	opcoes_multicriterio(Forca,Relacao,Soma),
	removeElement([A,B|T],A,List),
	calculateStrength2_Mult_Mood(List,[Soma|Temp],Strength).





checkMoods([],Temp,FinalList):- reverse(Temp,FinalList).
checkMoods([H|T],Temp,List):-
               mood(H,Mood1,Mood2,Mood3,Mood4,Mood5,_),
               Mood1>=0.5,
               Mood2>=0.5,
               Mood3>=0.5,
               Mood4>=0.5,
               Mood5>=0.5,
               checkMoods(T, [H|Temp],List).
checkMoods(_,_,List):-checkMoods([],[],List).




% ------------------------------------------------------------------------


% A* With Estimation com Multicrit�rio + Mood
%
% Implementado a o A*  considerando o m�ximo N liga��es (ou seja vamos
% do utilizador de in�cio ao utilizador final pretendido no m�ximo com
% N-1 utilizadores intermedi�rios conectados em s�rie)



aStar_Multicriterio_Mood(Orig,Dest,NivelMax,Cam,Custo):-
    forcaMaximaMulticriterio_Mood(ListaOrdenada),
    aStar3_Mood(Dest,[(_,0,0,[Orig])],NivelMax,0,ListaOrdenada,Cam,Custo).

aStar3_Mood(Dest,[(_,Custo,_,[Dest|T])|_],_,_,_,Cam,Custo):-
    reverse([Dest|T],Cam).

aStar3_Mood(Dest,[(_,Ca,Ra,LA)|Outros],NivelMax,NivelAtual,ListaFMOrdenada,Cam,Custo):-

    NivelAtual =< NivelMax,                                 % Numero de ligacoes atuais < ao valor maximo de ligacoes?
    member(Act,LA),
    %LA=[Act|_],
    length(LA,NumUsers),                                  % Tamanho da lista atual
    NivelAtual1 is NumUsers-1,                                                        % Tamanho -1 (retirar origem)
    NivelAtual1 < NivelMax,                                                           % Numero de n�s adicionados < ao n� de ligacoes maximas?
    nth0(NivelAtual1,ListaFMOrdenada,ValorEstimadoMax),

    findall((CEX,CaX,RaX,[X|LA]),
        (Dest\==Act,

         (ligacao(Act,X,ForcaX,RelacaoX),ligacao(X,Act,ForcaY,RelacaoY)),         % Seleciona um novo n�
         \+ member(X,LA),                                                         % Verifica se o novo n� est� ou nao na lista
                 mood(X,Mood1,_,_,_,_,_),Mood1>=0.5,
                 mood(X,_,Mood2,_,_,_,_),Mood2>=0.5,
                 mood(X,_,_,Mood3,_,_,_),Mood3>=0.5,
                 mood(X,_,_,_,Mood4,_,_),Mood4>=0.5,
                 mood(X,_,_,_,_,Mood5,_),Mood5>=0.5,
         CaX is ForcaX + ForcaY + Ca,                                             % Cax (custo das ligacoes): soma das ligacoes + o que est� para tras
         RaX is RelacaoX + RelacaoY + Ra,                     % Rax (custo das relacoes): soma das relacoes + o que esta para tras
         estimativa_multicriterio(ValorEstimadoMax,NivelMax,NivelAtual1,EstX),    % Calculo da estimativa
         %write('Estimativa= '), write(EstX),nl,
         CEX is EstX),
        Novos),
    append(Outros,Novos,Todos),
    %write('Novos='),write(Novos),nl,
    sort(0,  @>, Todos,  TodosOrd),
    %write('TodosOrd='),write(TodosOrd),nl,
    aStar3_Mood(Dest,TodosOrd,NivelMax,NivelAtual1,ListaFMOrdenada,Cam,Custo).

aStar3_Mood(Dest,[(_,_,_,_)|Outros],NivelMax,NivelAtual,ListaOrdenada,Cam,Custo):-
    aStar3_Mood(Dest,Outros,NivelMax,NivelAtual,ListaOrdenada,Cam,Custo).


forcaMaximaMulticriterio_Mood(ListaFMOrdenada):-
    findall(FactorMult,
        ((ligacao(Act,X,ForcaX,RelacaoX),ligacao(X,Act,ForcaY,RelacaoY)),
         Forca is ForcaX+ForcaY,
         Relacao is RelacaoX + RelacaoY,
         opcoes_multicriterio(Forca,Relacao,FactorMult)),
        ListaTotal),
    sort(0,@>=,ListaTotal,ListaFMOrdenada).



% ------------------------------------------------------------------------


% Best First with Multicriterio + Mood




bestfs1_Mult_Mood(Orig,Dest,NivelMax,Cam,Custo):-
    bestfs12_Mult_Mood(Dest,[[Orig]],NivelMax,0,Cam,Custo).
    %write('Caminho='),write(Cam),nl.

bestfs12_Mult_Mood(Dest,[[Dest|T]|_],_,_,Cam,Custo):-
    reverse([Dest|T],Cam),
    calcula_custo(Cam,Custo).

bestfs12_Mult_Mood(Dest,[[Dest|_]|LLA2],NivelMax,NivelAtual,Cam,Custo):-
    !,
    bestfs12_Mult_Mood(Dest,LLA2,NivelMax,NivelAtual,Cam,Custo).


bestfs12_Mult_Mood(Dest,LLA,NivelMax,NivelAtual,Cam,Custo):-
    NivelAtual=<NivelMax,
    LA=[Act|_],
    member1(LA,LLA,LLA1),

    length(LA,NumUsers),
    NivelAtual1 is NumUsers-1,

    ((Act==Dest,!,bestfs12_Mult_Mood(Dest,[LA|LLA1],NivelMax,NivelAtual,Cam,Custo));
    (NivelAtual1<NivelMax,
     findall((FatorMult,[X|LA]),
         (ligacao(Act,X,FLX,FRX),ligacao(X,Act,FLY,FRY),

                 mood(X,Mood1,_,_,_,_,_),Mood1>=0.5,
                 mood(X,_,Mood2,_,_,_,_),Mood2>=0.5,
                 mood(X,_,_,Mood3,_,_,_),Mood3>=0.5,
                 mood(X,_,_,_,Mood4,_,_),Mood4>=0.5,
                 mood(X,_,_,_,_,Mood5,_),Mood5>=0.5,

          Ligacao is FLX + FLY,
          Relacao is FRX + FRY,
          opcoes_multicriterio(Ligacao,Relacao,FatorMult),
          \+member(X,LA)),
         Novos),
     Novos\==[],!,
     %nl, write('Novos= '), write(Novos),nl,
     sort(0,@>=,Novos,NovosOrd),
     %nl, write('Novos Ord= '), write(NovosOrd),nl,

     retira_custos(NovosOrd,NovosOrd1),
     append(NovosOrd1,LLA1,LLA2),
     %nl,write('LLA2='),write(LLA2),nl,
     bestfs12_Mult_Mood(Dest,LLA2,NivelMax,NivelAtual1,Cam,Custo))).



% ------------------------------------------------------------------------


% Esperanca/Medo e Alivio/Dececao
% --------------------------------



moodUpdate_EM_AD(User, ListSuggestion,ListWantedUsers,ListUnwantedUsers,MoodUpdate_Esp,MoodUpdate_Med, MoodUpdate_Ali,MoodUpdate_Dec):-
                   get_UserMood_EspMed(User, UserMood_EspMed),
                   get_UserMood_AliDec(User, UserMood_AliDec),
                   intercecao(ListSuggestion, ListWantedUsers, ListWanted_Included),                 %Lista de users desejados incluidos
                   intercecao(ListSuggestion, ListUnwantedUsers, ListUnwanted_Included),             %Lista de users indesejados incluidos
                   get_UsersExluded(ListWanted_Included, ListWantedUsers, ListWanted_Exluded),       %Lista de users desejados excluidos ()
                   get_UsersExluded(ListUnwanted_Included, ListUnwantedUsers, ListUnwanted_Exluded), %Lista de users indesejados excluidos

                   %Variaveis
                   length(ListWantedUsers,A), Num_AllWantedUsers is A,
                   length(ListUnwantedUsers,B), Num_AllUnwantedUsers is B,
                   length(ListWanted_Included,C),Num_WantedUsers_Included is C,           % Esperanca
                   length(ListWanted_Exluded,D),Num_WantedUsers_Excluded is D,            % Dececao
                   length(ListUnwanted_Included,E),Num_UnwantedUsers_Included is E,       % Medo
                   length(ListUnwanted_Exluded,F),Num_UnwantedUsers_Excluded is F,        % Alivio

                   %Media
                   Media_EspDec is (Num_AllWantedUsers/2),
                   Media_AliMed is (Num_AllUnwantedUsers/2),

                   %Ratios (V/Max.V)
                   Esperanca_Ratio is (Num_WantedUsers_Included/Num_AllWantedUsers),
                   Medo_Ratio is (Num_UnwantedUsers_Included/Num_AllUnwantedUsers),
                   Alivio_Ratio is (Num_UnwantedUsers_Excluded/Num_AllUnwantedUsers),
                   Dececao_Ratio is (Num_WantedUsers_Excluded/Num_AllWantedUsers),

                   % Calculos Part I: Esperanca e Dececao
                   % Esperanca
                   (   (Num_WantedUsers_Included > Media_EspDec, moodUpdate_Up(UserMood_EspMed,Esperanca_Ratio, MoodUpdate_EspMed_1));
                       (Num_WantedUsers_Included < Media_EspDec, moodUpdate_Down(UserMood_EspMed,Esperanca_Ratio, MoodUpdate_EspMed_1));
                       (MoodUpdate_EspMed_1 is UserMood_EspMed)),
                   % Dececao
                   (   (Num_WantedUsers_Excluded > Media_EspDec, moodUpdate_Down(UserMood_AliDec,Dececao_Ratio, MoodUpdate_AliDec_1));
                       (Num_WantedUsers_Excluded < Media_EspDec, moodUpdate_Up(UserMood_AliDec,Dececao_Ratio,MoodUpdate_AliDec_1));
                       (MoodUpdate_AliDec_1 is UserMood_EspMed)),

                   % Calculos Part II: Alivio e Medo
                   % Alivio
                   (   (Num_UnwantedUsers_Excluded > Media_AliMed, moodUpdate_Up(MoodUpdate_AliDec_1,Alivio_Ratio,MoodUpdate_AliDec));
                       (Num_UnwantedUsers_Excluded < Media_AliMed, moodUpdate_Down(MoodUpdate_AliDec_1,Alivio_Ratio,MoodUpdate_AliDec));
                       (MoodUpdate_AliDec is MoodUpdate_AliDec_1)),
                   % Medo
                   (   (Num_UnwantedUsers_Included > Media_AliMed, moodUpdate_Down(MoodUpdate_EspMed_1,Medo_Ratio,MoodUpdate_EspMed));
                       (Num_UnwantedUsers_Included < Media_AliMed, moodUpdate_Up(MoodUpdate_EspMed_1,Medo_Ratio,MoodUpdate_EspMed));
                       (MoodUpdate_EspMed is MoodUpdate_EspMed_1)),
                   % ver os valores por emocao
                   MoodUpdate_Esp is (MoodUpdate_EspMed),
                   MoodUpdate_Med is (1-MoodUpdate_EspMed),
                   MoodUpdate_Ali is (MoodUpdate_AliDec),
                   MoodUpdate_Dec is (1-MoodUpdate_AliDec).



moodUpdate_Up(Emotion_T0, Ratio, Emotion_T1):-
                    Emotion_T1 is (Emotion_T0 + ((1-Emotion_T0)*Ratio)).


moodUpdate_Down(Emotion_T0,Ratio, Emotion_T1):-
                    Emotion_T1 is (Emotion_T0 * (1-Ratio)).



get_UsersExluded(ListIncluded,ListUsers,ListExcludedUsers):-
                    removeElements(ListIncluded,ListUsers,ListExcludedUsers).

get_UserMood_EspMed(User,EspMed):-
                    mood(User,_,EspMed,_,_,_,_).
get_UserMood_AliDec(User,AliDec):-
                    mood(User,_,_,AliDec,_,_,_).




% Orgulho/Remorso e Gratidao/Raiva
% ----------------------------------


moodUpdate_OR_GR(User,NumCommonTags,MinNumberUsers,MandatoryListTags,ListWantedUsers,ListUnwantedUsers,MoodUpdate_Org,MoodUpdate_Rem, MoodUpdate_Gra,MoodUpdate_Rai):-

                    suggestGroups(User,NumCommonTags,MinNumberUsers,MandatoryListTags, ListSuggestion),
                    %nl,nl,write('Grupo com tag: '), write(ListSuggestion),

                    suggestGroups(User,NumCommonTags,MinNumberUsers,[],ListSuggestion_NoTags),!,
                    %nl,nl,write('Grupo Sem tags: '), write(ListSuggestion_NoTags),


                    get_UserMood_OrgRem(User, UserMood_OrgRem),
                    %nl,nl,write('UserMood_OrgRem: '), write(UserMood_OrgRem),
                    get_UserMood_GraRai(User, UserMood_GraRai),
                    %nl,write('UserMood_GraRai'), write(UserMood_GraRai),


                    get_UsersIncluded(ListSuggestion_NoTags,ListSuggestion, ListNewUsersIncluded),%obter lista com users que nao estavam na lista mas que forma incluidos devido à tag
                    %nl,nl,write('Users que apareceram: '), write(ListNewUsersIncluded),
                    get_UsersExcluded(ListSuggestion_NoTags,ListSuggestion, ListNewUsersExcluded),%obter lista de users desejados que sairam devido a tag
                    %nl,write('Users que desapareceram:'), write(ListNewUsersExcluded),


                    get_WantedUsers_Included(ListNewUsersIncluded,ListWantedUsers,ListWanted_Included),
                    %nl,nl,write('Users Wanted incluidos: '), write(ListWanted_Included),

                    get_WantedUsers_Excluded(ListNewUsersExcluded,ListWantedUsers,ListWanted_Exluded),
                    %nl,nl,write('Users Wanted excluidos: '), write(ListWanted_Exluded),

                    get_UnwantedUsers_Included(ListNewUsersIncluded,ListUnwantedUsers,ListUnwanted_Included),
                    %nl,nl,write('Users Unwanted incluidos: '), write(ListUnwanted_Included),

                    get_UnwantedUsers_Excluded(ListNewUsersExcluded,ListUnwantedUsers,ListUnwanted_Exluded),
                    %nl,nl,write('Users Unwanted excluidos: '), write(ListUnwanted_Exluded),






                    %Variaveis

                    length(ListWantedUsers,A), Num_AllWantedUsers is A,                    % num. total de users desejados
                    %nl,nl,write('Num_AllWantedUsers: '), write(Num_AllWantedUsers),

                    length(ListUnwantedUsers,B), Num_AllUnwantedUsers is B,                % num. total de users indesejados
                    %nl,nl,write('Num_AllUnwantedUsers: '), write(Num_AllUnwantedUsers),


                    length(ListWanted_Included,C),Num_WantedUsers_Included is C,           % Orgulho
                    %nl,nl,write('Num_WantedUsers_Included: '), write(Num_WantedUsers_Included),

                    length(ListWanted_Exluded,D),Num_WantedUsers_Excluded is D,            % Raiva
                    %nl,nl,write('Num_WantedUsers_Excluded: '), write(Num_WantedUsers_Excluded),

                    length(ListUnwanted_Included,E),Num_UnwantedUsers_Included is E,       % Remorso
                    %nl,nl,write('Num_UnwantedUsers_Included: '), write(Num_UnwantedUsers_Included),

                    length(ListUnwanted_Exluded,F),Num_UnwantedUsers_Excluded is F,        % Gratidao
                    %nl,nl,write('Num_UnwantedUsers_Excluded: '), write(Num_UnwantedUsers_Excluded),



                     %Media
                     Media_OrgRai is (Num_AllWantedUsers/2),
                     Media_GraRem is (Num_AllUnwantedUsers/2),


                      %Ratios (V/Max.V)
                      Orgulho_Ratio is (Num_WantedUsers_Included/Num_AllWantedUsers),
                      %nl,nl,write('Orgulho_Ratio: '), write(Orgulho_Ratio),

                      Remorso_Ratio is (Num_UnwantedUsers_Included/Num_AllUnwantedUsers),
                      %nl,nl,write('Remorso_Ratio: '), write(Remorso_Ratio),


                      Gratidao_Ratio is (Num_UnwantedUsers_Excluded/Num_AllUnwantedUsers),
                      %nl,nl,write('Gratidao_Ratio: '), write(Gratidao_Ratio),

                      Raiva_Ratio is (Num_WantedUsers_Excluded/Num_AllWantedUsers),
                      %nl,nl,write('Raiva_Ratio: '), write(Raiva_Ratio),




                       % Calculos Part I: Orgulho e Raiva

                       % Orgulho
                       (   (Num_WantedUsers_Included > Media_OrgRai, moodUpdate_Up(UserMood_OrgRem,Orgulho_Ratio, MoodUpdate_OrgRem_1));
                           (Num_WantedUsers_Included < Media_OrgRai, moodUpdate_Down(UserMood_OrgRem,Orgulho_Ratio, MoodUpdate_OrgRem_1));
                           (MoodUpdate_OrgRem_1 is UserMood_OrgRem)),

                       % Raiva
                       (   (Num_WantedUsers_Excluded > Media_OrgRai, moodUpdate_Down(UserMood_GraRai,Raiva_Ratio, MoodUpdate_GraRai_1));
                           (Num_WantedUsers_Excluded < Media_OrgRai, moodUpdate_Up(UserMood_GraRai,Raiva_Ratio,MoodUpdate_GraRai_1));
                           (MoodUpdate_GraRai_1 is UserMood_GraRai)),


                       % Calculos Part II: Gratidao e Remorso

                       % Gratidao
                       (   (Num_UnwantedUsers_Excluded > Media_GraRem, moodUpdate_Up(MoodUpdate_GraRai_1,Gratidao_Ratio,MoodUpdate_GraRai));
                           (Num_UnwantedUsers_Excluded < Media_GraRem, moodUpdate_Down(MoodUpdate_GraRai_1,Gratidao_Ratio,MoodUpdate_GraRai));
                           (MoodUpdate_GraRai is MoodUpdate_GraRai_1)),

                       % Remorso
                       (   (Num_UnwantedUsers_Included > Media_GraRem, moodUpdate_Down(MoodUpdate_OrgRem_1,Remorso_Ratio,MoodUpdate_OrgRem));
                           (Num_UnwantedUsers_Included < Media_GraRem, moodUpdate_Up(MoodUpdate_OrgRem_1,Remorso_Ratio,MoodUpdate_OrgRem));
                           (MoodUpdate_OrgRem is MoodUpdate_OrgRem_1)),

                   % ver os valores por emocao
                   MoodUpdate_Org is (MoodUpdate_OrgRem),
                   MoodUpdate_Rem is (1-MoodUpdate_OrgRem),
                   MoodUpdate_Gra is (MoodUpdate_GraRai),
                   MoodUpdate_Rai is (1-MoodUpdate_GraRai).











get_UserMood_OrgRem(User,OrgMer):-
                    mood(User,_,_,_,OrgMer,_,_).
get_UserMood_GraRai(User,GraRai):-
                    mood(User,_,_,_,_,GraRai,_).



get_UsersIncluded(ListSuggestion_NoTags,ListSuggestion, ListNewUsersIncluded):-
                    removeElements(ListSuggestion_NoTags,ListSuggestion,ListNewUsersIncluded).


get_UsersExcluded(ListSuggestion_NoTags,ListSuggestion, ListNewUsersExcluded):-
                    removeElements(ListSuggestion,ListSuggestion_NoTags,ListNewUsersExcluded).



get_WantedUsers_Included(ListNewUsersIncluded,ListWantedUsers,ListWanted_Included):-
                    intercecao(ListNewUsersIncluded,ListWantedUsers,ListWanted_Included).

get_WantedUsers_Excluded(ListNewUsersExcluded,ListWantedUsers,ListWanted_Exluded):-
                    intercecao(ListNewUsersExcluded,ListWantedUsers,ListWanted_Exluded).

get_UnwantedUsers_Included(ListNewUsersIncluded,ListUnwantedUsers,ListUnwanted_Included):-
                    intercecao(ListNewUsersIncluded,ListUnwantedUsers,ListUnwanted_Included).

get_UnwantedUsers_Excluded(ListNewUsersExcluded,ListUnwantedUsers,ListUnwanted_Exluded):-
                    intercecao(ListNewUsersExcluded,ListUnwantedUsers,ListUnwanted_Exluded).
