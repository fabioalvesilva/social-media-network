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


%ligacao('Sarah Silva', 'Pedro Mourao',2,31).
%ligacao('Pedro Mourao', 'Sarah Silva',3,11).

ligacao('Sarah Silva', 'Rafael Soares', 3, -43).
ligacao('Sarah Silva', 'Dario Ornelas', 3, 4).
ligacao('Sarah Silva', 'Yuri Serralheiro', 3, 25).
ligacao('Pedro Mourao', 'Carlos Moutinho', 2, 38).
ligacao('Pedro Mourao', 'Breno Granja', 1, 20).
ligacao('Pedro Mourao', 'Rodrigo Sousa', 3, 43).
ligacao('Rafael Soares', 'Sarah Silva', 1, 7).
ligacao('Rafael Soares', 'Fabio Silva', 2, 23).
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 10).
ligacao('Rafael Soares', 'Marco Gravato', 1, 19).
ligacao('Dario Ornelas', 'Sarah Silva', 3, -8).
ligacao('Dario Ornelas', 'Fabio Silva', 2, 47).
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 28).
ligacao('Dario Ornelas', 'Marco Gravato', 2, 46).
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, -10).
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 27).
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, -7).
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 0).
ligacao('Fabio Silva', 'Rafael Soares', 1, 5).
ligacao('Fabio Silva', 'Dario Ornelas', 2, 23).
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 24).
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 31).
ligacao('Fabio Silva', 'Breno Granja', 3, 13).
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 47).
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 41).
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 8).
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, -3).
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 11).
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 46).
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 45).
ligacao('Marco Gravato', 'Rafael Soares', 3, 23).
ligacao('Marco Gravato', 'Dario Ornelas', 3, 12).
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 14).
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 0).
ligacao('Marco Gravato', 'Breno Granja', 3, 13).
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 26).
ligacao('Carlos Moutinho', 'Pedro Mourao', 3, 27).
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 27).
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 32).
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 16).
ligacao('Breno Granja', 'Pedro Mourao', 3, 37).
ligacao('Breno Granja', 'Fabio Silva', 3, -6).
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, -9).
ligacao('Breno Granja', 'Marco Gravato', 2, 46).
ligacao('Rodrigo Sousa', 'Pedro Mourao', 2, 26).
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 22).
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 11).
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 44).
