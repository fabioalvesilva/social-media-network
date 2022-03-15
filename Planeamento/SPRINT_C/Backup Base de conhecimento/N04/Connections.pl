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
ligacao('Sarah Silva', 'Francisco Vilar', 3, 11).
ligacao('Pedro Mourao', 'Rui Mariske', 3, 13).
ligacao('Pedro Mourao', 'Lisandra Batata', 3, 7).
ligacao('Pedro Mourao', 'Alma Velasco', 1, -6).
ligacao('Pedro Mourao', 'Zavier Salomao', 1, -8).
ligacao('Rafael Soares', 'Sarah Silva', 1, 7).
ligacao('Rafael Soares', 'Fabio Silva', 2, 23).
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 10).
ligacao('Rafael Soares', 'Marco Gravato', 1, 19).
ligacao('Rafael Soares', 'Denzel Rufino', 2, 8).
ligacao('Dario Ornelas', 'Sarah Silva', 3, -8).
ligacao('Dario Ornelas', 'Fabio Silva', 2, 47).
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 28).
ligacao('Dario Ornelas', 'Marco Gravato', 2, 46).
ligacao('Dario Ornelas', 'Denzel Rufino', 3, 17).
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, -10).
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 27).
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, -7).
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 0).
ligacao('Yuri Serralheiro', 'Denzel Rufino', 1, 38).
ligacao('Francisco Vilar', 'Sarah Silva', 3, 16).
ligacao('Francisco Vilar', 'Fabio Silva', 2, -4).
ligacao('Francisco Vilar', 'Jonatas Granjeiro', 3, 9).
ligacao('Francisco Vilar', 'Marco Gravato', 3, -1).
ligacao('Francisco Vilar', 'Denzel Rufino', 1, 7).
ligacao('Fabio Silva', 'Rafael Soares', 1, 5).
ligacao('Fabio Silva', 'Dario Ornelas', 2, 23).
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 24).
ligacao('Fabio Silva', 'Francisco Vilar', 1, 45).
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 31).
ligacao('Fabio Silva', 'Breno Granja', 3, 13).
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 47).
ligacao('Fabio Silva', 'Andreia Sousa', 3, 35).
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 41).
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 8).
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, -3).
ligacao('Jonatas Granjeiro', 'Francisco Vilar', 1, 50).
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 11).
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 46).
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 45).
ligacao('Jonatas Granjeiro', 'Andreia Sousa', 2, 30).
ligacao('Marco Gravato', 'Rafael Soares', 3, 23).
ligacao('Marco Gravato', 'Dario Ornelas', 3, 12).
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 14).
ligacao('Marco Gravato', 'Francisco Vilar', 2, -3).
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 0).
ligacao('Marco Gravato', 'Breno Granja', 3, 13).
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 26).
ligacao('Marco Gravato', 'Andreia Sousa', 2, 33).
ligacao('Denzel Rufino', 'Rafael Soares', 2, 13).
ligacao('Denzel Rufino', 'Dario Ornelas', 2, -8).
ligacao('Denzel Rufino', 'Yuri Serralheiro', 3, 25).
ligacao('Denzel Rufino', 'Francisco Vilar', 1, 25).
ligacao('Denzel Rufino', 'Carlos Moutinho', 2, 29).
ligacao('Denzel Rufino', 'Breno Granja', 3, 15).
ligacao('Denzel Rufino', 'Rodrigo Sousa', 3, 45).
ligacao('Denzel Rufino', 'Andreia Sousa', 1, 30).
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 27).
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 32).
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 16).
ligacao('Carlos Moutinho', 'Denzel Rufino', 3, 35).
ligacao('Carlos Moutinho', 'Rui Mariske', 3, 48).
ligacao('Carlos Moutinho', 'Lisandra Batata', 1, 6).
ligacao('Carlos Moutinho', 'Alma Velasco', 3, 47).
ligacao('Carlos Moutinho', 'Zavier Salomao', 3, 16).
ligacao('Breno Granja', 'Fabio Silva', 3, -6).
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, -9).
ligacao('Breno Granja', 'Marco Gravato', 2, 46).
ligacao('Breno Granja', 'Denzel Rufino', 1, 46).
ligacao('Breno Granja', 'Rui Mariske', 3, 20).
ligacao('Breno Granja', 'Lisandra Batata', 3, -1).
ligacao('Breno Granja', 'Alma Velasco', 1, 3).
ligacao('Breno Granja', 'Zavier Salomao', 3, 1).
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 22).
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 11).
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 44).
ligacao('Rodrigo Sousa', 'Denzel Rufino', 2, 15).
ligacao('Rodrigo Sousa', 'Rui Mariske', 3, -4).
ligacao('Rodrigo Sousa', 'Lisandra Batata', 2, 23).
ligacao('Rodrigo Sousa', 'Alma Velasco', 1, -3).
ligacao('Rodrigo Sousa', 'Zavier Salomao', 2, 1).
ligacao('Andreia Sousa', 'Fabio Silva', 2, 22).
ligacao('Andreia Sousa', 'Jonatas Granjeiro', 3, 0).
ligacao('Andreia Sousa', 'Marco Gravato', 3, 35).
ligacao('Andreia Sousa', 'Denzel Rufino', 3, 8).
ligacao('Andreia Sousa', 'Rui Mariske', 2, 20).
ligacao('Andreia Sousa', 'Lisandra Batata', 2, -6).
ligacao('Andreia Sousa', 'Alma Velasco', 1, -10).
ligacao('Andreia Sousa', 'Zavier Salomao', 1, 3).
ligacao('Rui Mariske', 'Pedro Mourao', 1, 49).
ligacao('Rui Mariske', 'Carlos Moutinho', 1, -10).
ligacao('Rui Mariske', 'Breno Granja', 1, -7).
ligacao('Rui Mariske', 'Rodrigo Sousa', 3, 43).
ligacao('Rui Mariske', 'Andreia Sousa', 1, 7).
ligacao('Lisandra Batata', 'Pedro Mourao', 1, 46).
ligacao('Lisandra Batata', 'Carlos Moutinho', 3, 10).
ligacao('Lisandra Batata', 'Breno Granja', 2, 6).
ligacao('Lisandra Batata', 'Rodrigo Sousa', 3, 4).
ligacao('Lisandra Batata', 'Andreia Sousa', 2, 1).
ligacao('Alma Velasco', 'Pedro Mourao', 3, 22).
ligacao('Alma Velasco', 'Carlos Moutinho', 1, 28).
ligacao('Alma Velasco', 'Breno Granja', 2, 34).
ligacao('Alma Velasco', 'Rodrigo Sousa', 3, 41).
ligacao('Alma Velasco', 'Andreia Sousa', 2, 46).
ligacao('Zavier Salomao', 'Pedro Mourao', 1, 5).
ligacao('Zavier Salomao', 'Carlos Moutinho', 1, 50).
ligacao('Zavier Salomao', 'Breno Granja', 3, 12).
ligacao('Zavier Salomao', 'Rodrigo Sousa', 1, 14).
ligacao('Zavier Salomao', 'Andreia Sousa', 3, -10).
