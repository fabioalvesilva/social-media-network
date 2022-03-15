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


ligacao('Sarah Silva', 'Pedro Mourao',2,'music').
ligacao('Pedro Mourao', 'Sarah Silva',3,'music').


ligacao('Sarah Silva', 'Rafael Soares', 3, 'rap').
ligacao('Sarah Silva', 'Dario Ornelas', 3, 'photo').
ligacao('Sarah Silva', 'Yuri Serralheiro', 3, 'outdoors').
ligacao('Sarah Silva', 'Francisco Vilar', 3, 'baseball').
ligacao('Pedro Mourao', 'Rui Mariske', 3, 'photography').
ligacao('Pedro Mourao', 'Lisandra Batata', 3, 'rap').
ligacao('Pedro Mourao', 'Alma Velasco', 1, 'outdoors').
ligacao('Pedro Mourao', 'Zavier Salomao', 1, 'tour').
ligacao('Rafael Soares', 'Sarah Silva', 1, 'rap').
ligacao('Rafael Soares', 'Fabio Silva', 2, 'rap').
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 'run').
ligacao('Rafael Soares', 'Marco Gravato', 1, 'surf').
ligacao('Rafael Soares', 'Denzel Rufino', 2, 'nature').
ligacao('Dario Ornelas', 'Sarah Silva', 3, 'photo').
ligacao('Dario Ornelas', 'Fabio Silva', 2, 'meditation').
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Dario Ornelas', 'Marco Gravato', 2, 'tour').
ligacao('Dario Ornelas', 'Denzel Rufino', 3, 'tour').
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, 'outdoors').
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 'sport').
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, 'video game').
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 'folk').
ligacao('Yuri Serralheiro', 'Denzel Rufino', 1, 'folk').
ligacao('Francisco Vilar', 'Sarah Silva', 3, 'baseball').
ligacao('Francisco Vilar', 'Fabio Silva', 2, 'rock').
ligacao('Francisco Vilar', 'Jonatas Granjeiro', 3, 'travel').
ligacao('Francisco Vilar', 'Marco Gravato', 3, 'run').
ligacao('Francisco Vilar', 'Denzel Rufino', 1, 'football').
ligacao('Fabio Silva', 'Rafael Soares', 1, 'rap').
ligacao('Fabio Silva', 'Dario Ornelas', 2, 'meditation').
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 'sport').
ligacao('Fabio Silva', 'Francisco Vilar', 1, 'rock').
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 'travel').
ligacao('Fabio Silva', 'Breno Granja', 3, 'video game').
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 'tour').
ligacao('Fabio Silva', 'Andreia Sousa', 3, 'football').
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 'run').
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 'volunteering').
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, 'video game').
ligacao('Jonatas Granjeiro', 'Francisco Vilar', 1, 'travel').
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 'backing').
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 'volunteering').
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 'introspection').
ligacao('Jonatas Granjeiro', 'Andreia Sousa', 2, 'run').
ligacao('Marco Gravato', 'Rafael Soares', 3, 'surf').
ligacao('Marco Gravato', 'Dario Ornelas', 3, 'tour').
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 'folk').
ligacao('Marco Gravato', 'Francisco Vilar', 2, 'run').
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 'video game').
ligacao('Marco Gravato', 'Breno Granja', 3, 'swim').
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 'handball').
ligacao('Marco Gravato', 'Andreia Sousa', 2, 'run').
ligacao('Denzel Rufino', 'Rafael Soares', 2, 'nature').
ligacao('Denzel Rufino', 'Dario Ornelas', 2, 'tour').
ligacao('Denzel Rufino', 'Yuri Serralheiro', 3, 'folk').
ligacao('Denzel Rufino', 'Francisco Vilar', 1, 'football').
ligacao('Denzel Rufino', 'Carlos Moutinho', 2, 'folk').
ligacao('Denzel Rufino', 'Breno Granja', 3, 'tour').
ligacao('Denzel Rufino', 'Rodrigo Sousa', 3, 'baseball').
ligacao('Denzel Rufino', 'Andreia Sousa', 1, 'rap').
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 'travel').
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 'backing').
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 'video game').
ligacao('Carlos Moutinho', 'Denzel Rufino', 3, 'folk').
ligacao('Carlos Moutinho', 'Rui Mariske', 3, 'baseball').
ligacao('Carlos Moutinho', 'Lisandra Batata', 1, 'tour').
ligacao('Carlos Moutinho', 'Alma Velasco', 3, 'cooking').
ligacao('Carlos Moutinho', 'Zavier Salomao', 3, 'meditation').
ligacao('Breno Granja', 'Fabio Silva', 3, 'video game').
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Breno Granja', 'Marco Gravato', 2, 'swim').
ligacao('Breno Granja', 'Denzel Rufino', 1, 'tour').
ligacao('Breno Granja', 'Rui Mariske', 3, 'video game').
ligacao('Breno Granja', 'Lisandra Batata', 3, 'trip').
ligacao('Breno Granja', 'Alma Velasco', 1, 'swim').
ligacao('Breno Granja', 'Zavier Salomao', 3, 'rap').
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 'tour').
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 'introspection').
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 'handball').
ligacao('Rodrigo Sousa', 'Denzel Rufino', 2, 'baseball').
ligacao('Rodrigo Sousa', 'Rui Mariske', 3, 'football').
ligacao('Rodrigo Sousa', 'Lisandra Batata', 2, 'run').
ligacao('Rodrigo Sousa', 'Alma Velasco', 1, 'baseball').
ligacao('Rodrigo Sousa', 'Zavier Salomao', 2, 'backing').
ligacao('Andreia Sousa', 'Fabio Silva', 2, 'football').
ligacao('Andreia Sousa', 'Jonatas Granjeiro', 3, 'run').
ligacao('Andreia Sousa', 'Marco Gravato', 3, 'run').
ligacao('Andreia Sousa', 'Denzel Rufino', 3, 'rap').
ligacao('Andreia Sousa', 'Rui Mariske', 2, 'music').
ligacao('Andreia Sousa', 'Lisandra Batata', 2, 'introspection').
ligacao('Andreia Sousa', 'Alma Velasco', 1, 'travel').
ligacao('Andreia Sousa', 'Zavier Salomao', 1, 'cooking').
ligacao('Rui Mariske', 'Pedro Mourao', 1, 'photography').
ligacao('Rui Mariske', 'Carlos Moutinho', 1, 'baseball').
ligacao('Rui Mariske', 'Breno Granja', 1, 'video game').
ligacao('Rui Mariske', 'Rodrigo Sousa', 3, 'football').
ligacao('Rui Mariske', 'Andreia Sousa', 1, 'music').
ligacao('Lisandra Batata', 'Pedro Mourao', 1, 'rap').
ligacao('Lisandra Batata', 'Carlos Moutinho', 3, 'tour').
ligacao('Lisandra Batata', 'Breno Granja', 2, 'trip').
ligacao('Lisandra Batata', 'Rodrigo Sousa', 3, 'run').
ligacao('Lisandra Batata', 'Andreia Sousa', 2, 'introspection').
ligacao('Alma Velasco', 'Pedro Mourao', 3, 'outdoors').
ligacao('Alma Velasco', 'Carlos Moutinho', 1, 'cooking').
ligacao('Alma Velasco', 'Breno Granja', 2, 'swim').
ligacao('Alma Velasco', 'Rodrigo Sousa', 3, 'baseball').
ligacao('Alma Velasco', 'Andreia Sousa', 2, 'travel').
ligacao('Zavier Salomao', 'Pedro Mourao', 1, 'tour').
ligacao('Zavier Salomao', 'Carlos Moutinho', 1, 'meditation').
ligacao('Zavier Salomao', 'Breno Granja', 3, 'rap').
ligacao('Zavier Salomao', 'Rodrigo Sousa', 1, 'backing').
ligacao('Zavier Salomao', 'Andreia Sousa', 3, 'cooking').
