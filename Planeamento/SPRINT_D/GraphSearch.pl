

%---------------------------------------
% SPRINT C
%---------------------------------------


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%                    NO ESTIMATION
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%




% Adaptação do A* ao problema da determinação do caminho mais forte (máximo de N ligações)
% -----------------------------------------------------------------------



aStar_NoEstimation(Orig,Dest,Nivel,Cam,Custo):-
	aStar1_NoEstimation(Dest,[(_,0,[Orig])],Nivel,0,Cam,Custo).

aStar1_NoEstimation(Dest,[(_,Custo,[Dest|T])|_],_,_,Cam,Custo):-
	reverse([Dest|T],Cam).

aStar1_NoEstimation(Dest,[(_,Ca,LA)|Outros],NivelMax,NivelAtual,Cam,Custo):-
	NivelAtual =< NivelMax,                                                % Nivel atual inferior ao limite imposto
	member(Act,LA),							       % Novo nó
	length(LA,NumUsers),						       % Tamanho da lista
	NivelAtual1 is NumUsers-1,                                             % Nivel atual = tamanho da lista -1 (retiramos o UserOrig)
	NivelAtual1 < NivelMax,						       % Nivel atual inferior ao limite imposto

	findall((CEX,CaX,[X|LA]),                                              % Findall que retorna uma lista com o Custo acumulado+estimativa, custo acumulado e caminho
		(Dest\==Act,						       % Destino diferente do nó atual
		 (ligacao(Act,X,ForcaX,_),ligacao(X,Act,ForcaY,_)),            % Procura um proximo nó
		 \+ member(X,LA),                                              % Verifica se já se encontra na lista final
		 CaX is ForcaX + ForcaY + Ca,				       % Calcula o valor custo acumulado
		 estimativa0(CaX,NivelMax,NivelAtual1,EstX),                   % Calcula a estimativa (igual a 0 neste exercicio)
		 CEX is CaX +EstX),                                            % CEX: custo acumulado + estimativa
		Novos),                                                        % Resultado do findAll na lista Novos~

	append(Outros,Novos,Todos),                                            % Append na lista Outros e da lista Novos -> Lista Todos
	%write('Novos='),write(Novos),nl,
	sort(0,  @>, Todos,  TodosOrd),                                        % Ordenar a lista Todos
	%nl,write('TodosOrd='),write(TodosOrd),nl,
	aStar1_NoEstimation(Dest,TodosOrd,NivelMax,NivelAtual1,Cam,Custo).

aStar1_NoEstimation(Dest,[(_,_,_)|Outros],NivelMax,NivelAtual,Cam,Custo):-     % Quando falha em cima, muda o caminho a analisar
	aStar1_NoEstimation(Dest,Outros,NivelMax,NivelAtual,Cam,Custo).

estimativa0(_,_,_,0).							       % Calculo da estimativa colocada a 0.



% ------------------------------------------------------------------------



%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%		     FORÇAS DE LIGAÇÃO
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%







% A* com estimativa (Forca de Ligacao)
% -----------------------------------
%
% Implementado a o A*  considerando o máximo N ligações (ou seja vamos
% do utilizador de início ao utilizador final pretendido no máximo com
% N-1 utilizadores intermediários conectados em série)



:-dynamic conta_sol/1.



aStar(Orig,Dest,NivelMax,Cam,Custo):-
	%get_time(Ti),
	get_ForcasLigacao(ListaOrdenadaFL),                                        % Obter uma lista ordenada com todas as forcas de ligacao
	%asserta(conta_sol(0)),
	aStar2(Dest,[(_,0,[Orig])],NivelMax,0,ListaOrdenadaFL,Cam,Custo).
	%retract(conta_sol(Sol)),
	%get_time(Tf),
	%T is Tf-Ti,
	%nl, write('Numero de solucoes encontradas: '),write(Sol),
	%nl, write('Tempo de geracao da solucao:'),write(T),nl.


aStar2(Dest,[(_,Custo,[Dest|T])|_],_,_,_,Cam,Custo):-
	reverse([Dest|T],Cam).

aStar2(Dest,[(_,Ca,LA)|Outros],NivelMax,NivelAtual,ListaOrdenadaFL,Cam,Custo):-
	NivelAtual =< NivelMax,                                                    % Nivel atual <= Nivel Maximo imposto
	member(Act,LA),                                                            % Nó presente na lista de caminhos
	length(LA,NumUsers),							   % Tamanho da lista -> numero de users
	NivelAtual1 is NumUsers-1,						   % NivelAtual1 = numero de users -1 (retiramos o userOrig)
	NivelAtual1 < NivelMax,                                                    % NivelAtual < Nivel Maximo imposto
	nth0(NivelAtual1,ListaOrdenadaFL, ForcaMax),				   % Obter a Forca de Ligacao na posicao correspondente ao nivel atual

	findall((CEX,CaX,[X|LA]),                                                  % FindAll com a Estimativa+FLacumulado, Custo acumulado, lista com o caminho
		(Dest\==Act,                                                       % Destino diferente ao no atual
		 (ligacao(Act,X,ForcaX,_),ligacao(X,Act,ForcaY,_)),		   % Obter um novo user
		 \+ member(X,LA),						   % Verifica se o novo nó nao se encontra na lista
		 CaX is ForcaX + ForcaY + Ca,                                      % Calculo da FL acumulada
		 estimativa(ForcaMax,NivelMax,NivelAtual1,EstX),                   % Calculo da Estimativa
		 CEX is CaX +EstX),                                                % Calculo do Custo e estimativa
		Novos),

	append(Outros,Novos,Todos),						   % Append as listas Outros e Novos -> lista Todos
	%write('Novos='),write(Novos),nl,
	sort(0, @>, Todos,  TodosOrd),						   % Sort do maior ao mais pequeno
	%nl,write('TodosOrd='),write(TodosOrd),nl,nl,
	aStar2(Dest,TodosOrd,NivelMax,NivelAtual1,ListaOrdenadaFL,Cam,Custo).

aStar2(Dest,[(_,_,_)|Outros],NivelMax,NivelAtual,ListaOrdenadaFL,Cam,Custo):-      % Quando falha em cima, muda o caminho a analisar
	aStar2(Dest,Outros,NivelMax,NivelAtual,ListaOrdenadaFL,Cam,Custo).


estimativa(ForcaMax,Nivel,NivelAtual,Estimativa):-                                 % Calculo da estimativa
	Estimativa is ForcaMax *(Nivel-NivelAtual).				   % Forca de ligacao Maxima * (NivelMax-Nivel Atual).


get_ForcasLigacao(ListaOrdenadaFL):-
	findall(ForcaLigacao,                                                      % Colocar na lista ListaForcasLigacao todas as forcas de ligacao do grafo
		(ligacao(A,B,FL1,_),ligacao(B,A,FL2,_),	ForcaLigacao is FL1+FL2),
		ListaForcasLigacao),
	sort(0,@>=,ListaForcasLigacao, ListaOrdenadaFL).			   % Ordenar a lista do maior à mais pequena forca.




% ------------------------------------------------------------------------




% Adaptação do Best First ao problema da determinação do caminho mais forte
% (máximo de N ligações)
% -----------------------------------------------------------------------




bestfs1(Orig,Dest,Nivel,Cam,Custo):-
	%get_time(Ti),
	bestfs12(Dest,[[Orig]],Nivel,0,Cam,Custo).
	%get_time(Tf),
	%T is Tf-Ti,
	%nl, write('Tempo de geracao da solucao:'),write(T),nl.
	%write('Caminho='),write(Cam),nl.

bestfs12(Dest,[[Dest|T]|_],_,_,Cam,Custo):-
	reverse([Dest|T],Cam),
	calcula_custo(Cam,Custo).

bestfs12(Dest,[[Dest|_]|LLA2],NivelMax,NivelAtual,Cam,Custo):-
	!,bestfs12(Dest,LLA2,NivelMax,NivelAtual,Cam,Custo).


bestfs12(Dest,LLA,NivelMax,NivelAtual,Cam,Custo):-
	NivelAtual =< NivelMax,
	LA=[Act|_],
	member1(LA,LLA,LLA1),
	length(LA,NumUsers),
	NivelAtual1 is NumUsers-1,
	((Act==Dest,!,bestfs12(Dest,[LA|LLA1],NivelMax,NivelAtual,Cam,Custo));
	 (NivelAtual1 < NivelMax,
	  findall((CX,[X|LA]),
		  (ligacao(Act,X,FLX,_),ligacao(X,Act,FLY,_),
		   CX is FLX+FLY,
		   \+member(X,LA)),Novos),
	  Novos\==[],!,
	  sort(0,@>=,Novos,NovosOrd),
	  retira_custos(NovosOrd,NovosOrd1),
	  append(NovosOrd1,LLA1,LLA2),
	  %nl,write('LLA2='),write(LLA2),nl,nl,
	  bestfs12(Dest,LLA2,NivelMax,NivelAtual1,Cam,Custo))).

member1(LA,[LA|LAA],LAA).
member1(LA,[_|LAA],LAA1):-
	member1(LA,LAA,LAA1).

retira_custos([],[]).
retira_custos([(_,LA)|L],[LA|L1]):-
	retira_custos(L,L1).

calcula_custo([Act,X],C):-!,
	ligacao(Act,X,FLx,_),
	ligacao(X,Act,FLy,_),
	C is FLx + FLy.
calcula_custo([Act,X|L],S):-
	calcula_custo([X|L],S1),
	ligacao(Act,X,C,_),
	ligacao(X,Act,C1,_),
	S is S1+C+C1.







%------------------------------------------------------
%
% DFS com limite de ligacoes
%



:-dynamic melhor_sol_maisForte/2.
:-dynamic conta_sol_maisForte/1.


caminho_maisForte2(Orig,Dest,Nivel,LCaminho_maisForte,Forca):-
                   %get_time(Ti),
                  (melhor_caminho_maisForte2(Orig,Dest,Nivel);true),
                   retract(melhor_sol_maisForte(LCaminho_maisForte,Forca)).
                   %retract(conta_sol_maisForte(NS1)),
                   %get_time(Tf),
                   %T is Tf-Ti,
                   %nl, write('Número de soluções encontradas: '),write(NS1),nl,
                   %nl, write('Tempo de geracao da solucao:'),write(T),nl.


melhor_caminho_maisForte2(Orig,Dest,Nivel):-
                   asserta(melhor_sol_maisForte(_,0)),
                   asserta(conta_sol_maisForte(0)),
                   dfs(Orig,Dest,LCaminho),
                   atualiza_melhor_maisForte2(LCaminho,Nivel),
                   fail.

atualiza_melhor_maisForte2(LCaminho,Nivel):-
                   retract(conta_sol_maisForte(NS)),
                   NS1 is NS+1,
                   asserta(conta_sol_maisForte(NS1)),
                   melhor_sol_maisForte(_,N),
                   calculateStrength2(LCaminho,[],SumStrength) ,
		   length(LCaminho,C),
		   %nl, write(LCaminho), nl,
		   C1 is C-1,
                   C1=<Nivel, !,
                   %write(SumStrength),
                   %nl, write("Caminho: "), write(LCaminho), nl,
                   SumStrength>N,
                   retract(melhor_sol_maisForte(_,_)),
                   asserta(melhor_sol_maisForte(LCaminho,SumStrength)).


calculateStrength2([_],Temp,SumStrength):-
	sumList(Temp,SumStrength),!.

calculateStrength2([A,B|T], Temp, Strength):-
                   ligacao(A,B,C1,_),
                   ligacao(B,A,C2,_),
                   Soma is C1+C2,

                   removeElement([A,B|T],A,List),

                   calculateStrength2(List,[Soma|Temp],Strength).



% -----------------------------------------------------------------------

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%		     MULTICRITÉRIO
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%





% Funcao multicriterio


estimativa_multicriterio(FatorMult,NivelMax,NivelAtual,Estimativa):-
	Estimativa is FatorMult * (NivelMax-NivelAtual).

opcoes_multicriterio(Ligacao,Relacao,FatorMult):-
	(Ligacao =2,Relacao =< 0,FatorMult is 0);
	(Ligacao =2,between(1,49,Relacao),FatorMult is 25);
	(Ligacao =2,Relacao >= 50,FatorMult is 50);
	(between(3,5,Ligacao),Relacao =< 0,FatorMult is 25);
	(between(3,5,Ligacao),between(1,49,Relacao),FatorMult is 50);
	(between(3,5,Ligacao),Relacao >= 50,FatorMult is 75);
	(Ligacao =6,Relacao =< 0,FatorMult is 50);
	(Ligacao =6,between(1,49,Relacao),FatorMult is 75);
	(Ligacao =6,Relacao >= 50,FatorMult is 100).



% ------------------------------------------------------------------------


% A* With Estimation com Multicritério
%
% Implementado a o A*  considerando o máximo N ligações (ou seja vamos
% do utilizador de início ao utilizador final pretendido no máximo com
% N-1 utilizadores intermediários conectados em série)



aStar_Multicriterio(Orig,Dest,NivelMax,Cam,Custo):-
	%get_time(Ti),
	forcaMaximaMulticriterio(ListaOrdenada),
	aStar3(Dest,[(_,0,0,[Orig])],NivelMax,0,ListaOrdenada,Cam,Custo).
	%get_time(Tf),
	%T is Tf-Ti,
	%nl, write('Tempo de geracao da solucao:'),write(T),nl.

aStar3(Dest,[(_,Custo,_,[Dest|T])|_],_,_,_,Cam,Custo):-
	reverse([Dest|T],Cam).

aStar3(Dest,[(_,Ca,Ra,LA)|Outros],NivelMax,NivelAtual,ListaFMOrdenada,Cam,Custo):-

	NivelAtual =< NivelMax,								  % Numero de ligacoes atuais < ao valor maximo de ligacoes?
	member(Act,LA),
	%LA=[Act|_],

	length(LA,NumUsers),								  % Tamanho da lista atual
	NivelAtual1 is NumUsers-1,                                                        % Tamanho -1 (retirar origem)
	NivelAtual1 < NivelMax,                                                           % Numero de nós adicionados < ao nº de ligacoes maximas?
	nth0(NivelAtual1,ListaFMOrdenada,ValorEstimadoMax),

	findall((CEX,CaX,RaX,[X|LA]),
		(Dest\==Act,
		 (ligacao(Act,X,ForcaX,RelacaoX),ligacao(X,Act,ForcaY,RelacaoY)),         % Seleciona um novo nó
		 \+ member(X,LA),                                                         % Verifica se o novo nó está ou nao na lista
		 CaX is ForcaX + ForcaY + Ca,                                             % Cax (custo das ligacoes): soma das ligacoes + o que está para tras
		 RaX is RelacaoX + RelacaoY + Ra,					  % Rax (custo das relacoes): soma das relacoes + o que esta para tras
		 estimativa_multicriterio(ValorEstimadoMax,NivelMax,NivelAtual1,EstX),	  % Calculo da estimativa
		 %write('Estimativa= '), write(EstX),nl,
		 CEX is EstX),
		Novos),
	append(Outros,Novos,Todos),
	%write('Novos='),write(Novos),nl,
	sort(0,  @>, Todos,  TodosOrd),
	%nl,write('TodosOrd='),write(TodosOrd),nl,
	aStar3(Dest,TodosOrd,NivelMax,NivelAtual1,ListaFMOrdenada,Cam,Custo).

aStar3(Dest,[(_,_,_,_)|Outros],NivelMax,NivelAtual,ListaOrdenada,Cam,Custo):-
	aStar3(Dest,Outros,NivelMax,NivelAtual,ListaOrdenada,Cam,Custo).


forcaMaximaMulticriterio(ListaFMOrdenada):-
	findall(FactorMult,
		((ligacao(Act,X,ForcaX,RelacaoX),ligacao(X,Act,ForcaY,RelacaoY)),
		 Forca is ForcaX+ForcaY,
		 Relacao is RelacaoX + RelacaoY,
		 opcoes_multicriterio(Forca,Relacao,FactorMult)),
		ListaTotal),
	sort(0,@>=,ListaTotal,ListaFMOrdenada).

% ------------------------------------------------------------------------




% Best First with Multicriterio




bestfs1_Mult(Orig,Dest,NivelMax,Cam,Custo):-
	%get_time(Ti),
	bestfs12_Mult(Dest,[[Orig]],NivelMax,0,Cam,Custo).
	%get_time(Tf),
	%T is Tf-Ti,
	%nl, write('Tempo de geracao da solucao:'),write(T),nl.
	%write('Caminho='),write(Cam),nl.

bestfs12_Mult(Dest,[[Dest|T]|_],_,_,Cam,Custo):-
	reverse([Dest|T],Cam),
	calcula_custo(Cam,Custo).

bestfs12_Mult(Dest,[[Dest|_]|LLA2],NivelMax,NivelAtual,Cam,Custo):-
	!,
	bestfs12_Mult(Dest,LLA2,NivelMax,NivelAtual,Cam,Custo).


bestfs12_Mult(Dest,LLA,NivelMax,NivelAtual,Cam,Custo):-
	NivelAtual=<NivelMax,
	LA=[Act|_],
	member1(LA,LLA,LLA1),

	length(LA,NumUsers),
	NivelAtual1 is NumUsers-1,

	((Act==Dest,!,bestfs12_Mult(Dest,[LA|LLA1],NivelMax,NivelAtual,Cam,Custo));
	(NivelAtual1<NivelMax,
	 findall((FatorMult,[X|LA]),
		 (ligacao(Act,X,FLX,FRX),ligacao(X,Act,FLY,FRY),
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
	 bestfs12_Mult(Dest,LLA2,NivelMax,NivelAtual1,Cam,Custo))).





% ------------------------------------------------------------------------




%DFS with Multicritério
%
%



:-dynamic melhor_sol_maisForte_Mult/2.
:-dynamic conta_sol_maisForte_Mult/1.


caminho_maisForte2_Mult(Orig,Dest,Nivel,LCaminho_maisForte,Forca):-
	%get_time(Ti),
	(melhor_caminho_maisForte2_Mult(Orig,Dest,Nivel);true),
	retract(melhor_sol_maisForte_Mult(LCaminho_maisForte,Forca)).
	%retract(conta_sol_maisForte_Mult(NS1)),
	%get_time(Tf),
	%T is Tf-Ti,
	%nl, write('Número de soluções encontradas: '),write(NS1),nl,
	%nl, write('Tempo de geracao da solucao:'),write(T),nl.

melhor_caminho_maisForte2_Mult(Orig,Dest,Nivel):-
	asserta(melhor_sol_maisForte_Mult(_,0)),
	asserta(conta_sol_maisForte_Mult(0)),
	dfs(Orig,Dest,LCaminho),
	atualiza_melhor_maisForte2_Mult(LCaminho,Nivel),
	fail.

atualiza_melhor_maisForte2_Mult(LCaminho,Nivel):-
	retract(conta_sol_maisForte_Mult(NS)),
	NS1 is NS+1,
	asserta(conta_sol_maisForte_Mult(NS1)),
	melhor_sol_maisForte_Mult(_,N),
	calculateStrength2_Mult(LCaminho,[],SumStrength),
	length(LCaminho,C),
	%nl, write(LCaminho), nl,
	C1 is C-1,
	C1=<Nivel, !,
	%write(SumStrength),
	%nl, write("Caminho: "), write(LCaminho), nl,
	SumStrength>N,
	retract(melhor_sol_maisForte_Mult(_,_)),
	asserta(melhor_sol_maisForte_Mult(LCaminho,SumStrength)).


calculateStrength2_Mult([_],Temp,SumStrength):-
	sumList(Temp,SumStrength),!.

calculateStrength2_Mult([A,B|T], Temp, Strength):-
	ligacao(A,B,FL1,FR1),
	ligacao(B,A,FL2,FR2),
	Forca is FL1+FL2,
	Relacao is FR1+FR2,
	opcoes_multicriterio(Forca,Relacao,Soma),
	removeElement([A,B|T],A,List),
	calculateStrength2_Mult(List,[Soma|Temp],Strength).



% ------------------------------------------------------------------------


% gerenciador de forças

:-dynamic ligacao/4.

generate_ForcasLigacao(Novos):-

	findall((A,B,L,C),
		( random(1,3,L),
		  ligacao(A,B,_,C),
		  retract(ligacao(_,_,_,_)),
		  asserta(ligacao(A,B,L,C)))
	       ,Novos).









