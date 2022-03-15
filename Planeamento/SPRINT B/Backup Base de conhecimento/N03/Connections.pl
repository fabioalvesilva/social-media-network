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
ligacao('Pedro Mourao', 'Carlos Moutinho', 2, 'meditation').
ligacao('Pedro Mourao', 'Breno Granja', 1, 'video game').
ligacao('Pedro Mourao', 'Rodrigo Sousa', 3, 'backing').
ligacao('Rafael Soares', 'Sarah Silva', 1, 'rap').
ligacao('Rafael Soares', 'Fabio Silva', 2, 'rap').
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 'run').
ligacao('Rafael Soares', 'Marco Gravato', 1, 'surf').
ligacao('Dario Ornelas', 'Sarah Silva', 3, 'photo').
ligacao('Dario Ornelas', 'Fabio Silva', 2, 'meditation').
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Dario Ornelas', 'Marco Gravato', 2, 'tour').
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, 'outdoors').
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 'sport').
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, 'video game').
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 'folk').
ligacao('Fabio Silva', 'Rafael Soares', 1, 'rap').
ligacao('Fabio Silva', 'Dario Ornelas', 2, 'meditation').
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 'sport').
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 'travel').
ligacao('Fabio Silva', 'Breno Granja', 3, 'video game').
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 'tour').
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 'run').
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 'volunteering').
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, 'video game').
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 'backing').
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 'volunteering').
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 'introspection').
ligacao('Marco Gravato', 'Rafael Soares', 3, 'surf').
ligacao('Marco Gravato', 'Dario Ornelas', 3, 'tour').
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 'folk').
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 'video game').
ligacao('Marco Gravato', 'Breno Granja', 3, 'swim').
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 'handball').
ligacao('Carlos Moutinho', 'Pedro Mourao', 3, 'meditation').
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 'travel').
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 'backing').
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 'video game').
ligacao('Breno Granja', 'Pedro Mourao', 3, 'video game').
ligacao('Breno Granja', 'Fabio Silva', 3, 'video game').
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Breno Granja', 'Marco Gravato', 2, 'swim').
ligacao('Rodrigo Sousa', 'Pedro Mourao', 2, 'backing').
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 'tour').
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 'introspection').
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 'handball').
