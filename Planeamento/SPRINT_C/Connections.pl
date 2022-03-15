%------------------
% CONNECTIONS
%------------------


% parameters:
%	User 1
%	User 2
%	Connection strengh
%		- 1: Colleagues
%		- 2: Friends
%		- 3: Family
%	Connection Tag


%--------------------------------


:-dynamic ligacao/4.


% Teste com ligação direta entre o nó inicial e final

%ligacao('Sarah Silva', 'Pedro Mourao',2,31).
%ligacao('Pedro Mourao', 'Sarah Silva',3,11).



ligacao('Sarah Silva', 'Rafael Soares', 1, -43).
%ligacao('Sarah Silva', 'Rafael Soares', 3, -43).
ligacao('Sarah Silva', 'Dario Ornelas', 3, 4).
ligacao('Pedro Mourao', 'Fabio Silva', 3, 4).
ligacao('Pedro Mourao', 'Jonatas Granjeiro', 1, -2).
ligacao('Rafael Soares', 'Sarah Silva', 1, 7).
ligacao('Rafael Soares', 'Fabio Silva', 2, 23).
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 10).
ligacao('Dario Ornelas', 'Sarah Silva', 3, -8).
ligacao('Dario Ornelas', 'Fabio Silva', 2, 47).
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 28).
ligacao('Fabio Silva', 'Pedro Mourao', 3, 46).
ligacao('Fabio Silva', 'Rafael Soares', 1, 5).
ligacao('Fabio Silva', 'Dario Ornelas', 2, 23).
ligacao('Jonatas Granjeiro', 'Pedro Mourao', 1, 46).
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 41).
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 8).



ligacao('Rafael Soares', 'Pedro Mourao', 3, 7).
ligacao('Pedro Mourao', 'Rafael Soares', 1, -7).




% teste com grafo com becos sem saíd

ligacao('Sarah Silva', 'Rui Mariske', 3, -141).
ligacao('Rui Mariske', 'Sarah Silva', 3, 8).
ligacao('Rui Mariske', 'Carlos Moutinho', 2, 41).
ligacao('Carlos Moutinho', 'Rui Mariske', 1, 8).

