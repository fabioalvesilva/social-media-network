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
ligacao('Pedro Mourao', 'Fabio Silva', 3, 'tour').
ligacao('Pedro Mourao', 'Jonatas Granjeiro', 1, 'backing').
ligacao('Rafael Soares', 'Sarah Silva', 1, 'rap').
ligacao('Rafael Soares', 'Fabio Silva', 2, 'rap').
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 'run').
ligacao('Dario Ornelas', 'Sarah Silva', 3, 'photo').
ligacao('Dario Ornelas', 'Fabio Silva', 2, 'meditation').
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Fabio Silva', 'Pedro Mourao', 3, 'tour').
ligacao('Fabio Silva', 'Rafael Soares', 1, 'rap').
ligacao('Fabio Silva', 'Dario Ornelas', 2, 'meditation').
ligacao('Jonatas Granjeiro', 'Pedro Mourao', 1, 'backing').
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 'run').
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 'volunteering').
