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
ligacao('Sarah Silva', 'Nancy Sodre', 3, 'rap').
ligacao('Pedro Mourao', 'Rosa Machado', 3, 'photo').
ligacao('Pedro Mourao', 'Guilherme Araujo', 3, 'sport').
ligacao('Pedro Mourao', 'Joana Araujo', 2, 'volunteering').
ligacao('Pedro Mourao', 'Alberto Estrela', 1, 'swim').
ligacao('Pedro Mourao', 'Alberto Camara', 1, 'photo').
ligacao('Rafael Soares', 'Sarah Silva', 1, 'rap').
ligacao('Rafael Soares', 'Fabio Silva', 2, 'rap').
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 'run').
ligacao('Rafael Soares', 'Marco Gravato', 1, 'surf').
ligacao('Rafael Soares', 'Denzel Rufino', 2, 'nature').
ligacao('Rafael Soares', 'Joao Bulhosa', 2, 'tour').
ligacao('Dario Ornelas', 'Sarah Silva', 3, 'photo').
ligacao('Dario Ornelas', 'Fabio Silva', 2, 'meditation').
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Dario Ornelas', 'Marco Gravato', 2, 'tour').
ligacao('Dario Ornelas', 'Denzel Rufino', 3, 'tour').
ligacao('Dario Ornelas', 'Joao Bulhosa', 1, 'trip').
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, 'outdoors').
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 'sport').
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, 'video game').
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 'folk').
ligacao('Yuri Serralheiro', 'Denzel Rufino', 1, 'folk').
ligacao('Yuri Serralheiro', 'Joao Bulhosa', 2, 'meditation').
ligacao('Francisco Vilar', 'Sarah Silva', 3, 'baseball').
ligacao('Francisco Vilar', 'Fabio Silva', 2, 'rock').
ligacao('Francisco Vilar', 'Jonatas Granjeiro', 3, 'travel').
ligacao('Francisco Vilar', 'Marco Gravato', 3, 'run').
ligacao('Francisco Vilar', 'Denzel Rufino', 1, 'football').
ligacao('Francisco Vilar', 'Joao Bulhosa', 3, 'baseball').
ligacao('Nancy Sodre', 'Sarah Silva', 2, 'rap').
ligacao('Nancy Sodre', 'Fabio Silva', 1, 'introspection').
ligacao('Nancy Sodre', 'Jonatas Granjeiro', 3, 'volunteering').
ligacao('Nancy Sodre', 'Marco Gravato', 1, 'folk').
ligacao('Nancy Sodre', 'Denzel Rufino', 2, 'folk').
ligacao('Nancy Sodre', 'Joao Bulhosa', 1, 'run').
ligacao('Fabio Silva', 'Rafael Soares', 1, 'rap').
ligacao('Fabio Silva', 'Dario Ornelas', 2, 'meditation').
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 'sport').
ligacao('Fabio Silva', 'Francisco Vilar', 1, 'rock').
ligacao('Fabio Silva', 'Nancy Sodre', 2, 'introspection').
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 'travel').
ligacao('Fabio Silva', 'Breno Granja', 3, 'video game').
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 'tour').
ligacao('Fabio Silva', 'Andreia Sousa', 3, 'football').
ligacao('Fabio Silva', 'Deolinda Varzeas', 3, 'baseball').
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 'run').
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 'volunteering').
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, 'video game').
ligacao('Jonatas Granjeiro', 'Francisco Vilar', 1, 'travel').
ligacao('Jonatas Granjeiro', 'Nancy Sodre', 2, 'volunteering').
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 'backing').
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 'volunteering').
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 'introspection').
ligacao('Jonatas Granjeiro', 'Andreia Sousa', 2, 'run').
ligacao('Jonatas Granjeiro', 'Deolinda Varzeas', 2, 'backing').
ligacao('Marco Gravato', 'Rafael Soares', 3, 'surf').
ligacao('Marco Gravato', 'Dario Ornelas', 3, 'tour').
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 'folk').
ligacao('Marco Gravato', 'Francisco Vilar', 2, 'run').
ligacao('Marco Gravato', 'Nancy Sodre', 2, 'folk').
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 'video game').
ligacao('Marco Gravato', 'Breno Granja', 3, 'swim').
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 'handball').
ligacao('Marco Gravato', 'Andreia Sousa', 2, 'run').
ligacao('Marco Gravato', 'Deolinda Varzeas', 1, 'video game').
ligacao('Denzel Rufino', 'Rafael Soares', 2, 'nature').
ligacao('Denzel Rufino', 'Dario Ornelas', 2, 'tour').
ligacao('Denzel Rufino', 'Yuri Serralheiro', 3, 'folk').
ligacao('Denzel Rufino', 'Francisco Vilar', 1, 'football').
ligacao('Denzel Rufino', 'Nancy Sodre', 2, 'folk').
ligacao('Denzel Rufino', 'Carlos Moutinho', 2, 'folk').
ligacao('Denzel Rufino', 'Breno Granja', 3, 'tour').
ligacao('Denzel Rufino', 'Rodrigo Sousa', 3, 'baseball').
ligacao('Denzel Rufino', 'Andreia Sousa', 1, 'rap').
ligacao('Denzel Rufino', 'Deolinda Varzeas', 1, 'folk').
ligacao('Joao Bulhosa', 'Rafael Soares', 2, 'tour').
ligacao('Joao Bulhosa', 'Dario Ornelas', 1, 'trip').
ligacao('Joao Bulhosa', 'Yuri Serralheiro', 2, 'meditation').
ligacao('Joao Bulhosa', 'Francisco Vilar', 1, 'baseball').
ligacao('Joao Bulhosa', 'Nancy Sodre', 1, 'run').
ligacao('Joao Bulhosa', 'Carlos Moutinho', 3, 'folk').
ligacao('Joao Bulhosa', 'Breno Granja', 1, 'folk').
ligacao('Joao Bulhosa', 'Rodrigo Sousa', 3, 'run').
ligacao('Joao Bulhosa', 'Andreia Sousa', 3, 'cooking').
ligacao('Joao Bulhosa', 'Deolinda Varzeas', 1, 'rock').
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 'travel').
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 'backing').
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 'video game').
ligacao('Carlos Moutinho', 'Denzel Rufino', 3, 'folk').
ligacao('Carlos Moutinho', 'Joao Bulhosa', 3, 'folk').
ligacao('Carlos Moutinho', 'Rui Mariske', 3, 'baseball').
ligacao('Carlos Moutinho', 'Lisandra Batata', 1, 'tour').
ligacao('Carlos Moutinho', 'Alma Velasco', 3, 'cooking').
ligacao('Carlos Moutinho', 'Zavier Salomao', 3, 'meditation').
ligacao('Carlos Moutinho', 'Xavier Alcaide', 3, 'outdoors').
ligacao('Breno Granja', 'Fabio Silva', 3, 'video game').
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Breno Granja', 'Marco Gravato', 2, 'swim').
ligacao('Breno Granja', 'Denzel Rufino', 1, 'tour').
ligacao('Breno Granja', 'Joao Bulhosa', 2, 'folk').
ligacao('Breno Granja', 'Rui Mariske', 3, 'video game').
ligacao('Breno Granja', 'Lisandra Batata', 3, 'trip').
ligacao('Breno Granja', 'Alma Velasco', 1, 'swim').
ligacao('Breno Granja', 'Zavier Salomao', 3, 'rap').
ligacao('Breno Granja', 'Xavier Alcaide', 1, 'folk').
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 'tour').
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 'introspection').
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 'handball').
ligacao('Rodrigo Sousa', 'Denzel Rufino', 2, 'baseball').
ligacao('Rodrigo Sousa', 'Joao Bulhosa', 2, 'run').
ligacao('Rodrigo Sousa', 'Rui Mariske', 3, 'football').
ligacao('Rodrigo Sousa', 'Lisandra Batata', 2, 'run').
ligacao('Rodrigo Sousa', 'Alma Velasco', 1, 'baseball').
ligacao('Rodrigo Sousa', 'Zavier Salomao', 2, 'backing').
ligacao('Rodrigo Sousa', 'Xavier Alcaide', 1, 'football').
ligacao('Andreia Sousa', 'Fabio Silva', 2, 'football').
ligacao('Andreia Sousa', 'Jonatas Granjeiro', 3, 'run').
ligacao('Andreia Sousa', 'Marco Gravato', 3, 'run').
ligacao('Andreia Sousa', 'Denzel Rufino', 3, 'rap').
ligacao('Andreia Sousa', 'Joao Bulhosa', 1, 'cooking').
ligacao('Andreia Sousa', 'Rui Mariske', 2, 'music').
ligacao('Andreia Sousa', 'Lisandra Batata', 2, 'introspection').
ligacao('Andreia Sousa', 'Alma Velasco', 1, 'travel').
ligacao('Andreia Sousa', 'Zavier Salomao', 1, 'cooking').
ligacao('Andreia Sousa', 'Xavier Alcaide', 1, 'video game').
ligacao('Deolinda Varzeas', 'Fabio Silva', 2, 'baseball').
ligacao('Deolinda Varzeas', 'Jonatas Granjeiro', 1, 'backing').
ligacao('Deolinda Varzeas', 'Marco Gravato', 1, 'video game').
ligacao('Deolinda Varzeas', 'Denzel Rufino', 2, 'folk').
ligacao('Deolinda Varzeas', 'Joao Bulhosa', 3, 'rock').
ligacao('Deolinda Varzeas', 'Rui Mariske', 3, 'cooking').
ligacao('Deolinda Varzeas', 'Lisandra Batata', 3, 'meditation').
ligacao('Deolinda Varzeas', 'Alma Velasco', 1, 'football').
ligacao('Deolinda Varzeas', 'Zavier Salomao', 1, 'sport').
ligacao('Deolinda Varzeas', 'Xavier Alcaide', 1, 'baseball').
ligacao('Rui Mariske', 'Carlos Moutinho', 1, 'baseball').
ligacao('Rui Mariske', 'Breno Granja', 1, 'video game').
ligacao('Rui Mariske', 'Rodrigo Sousa', 3, 'football').
ligacao('Rui Mariske', 'Andreia Sousa', 1, 'music').
ligacao('Rui Mariske', 'Deolinda Varzeas', 2, 'cooking').
ligacao('Rui Mariske', 'Rosa Machado', 1, 'photography').
ligacao('Rui Mariske', 'Guilherme Araujo', 3, 'swim').
ligacao('Rui Mariske', 'Joana Araujo', 1, 'handball').
ligacao('Rui Mariske', 'Alberto Estrela', 1, 'photo').
ligacao('Rui Mariske', 'Alberto Camara', 1, 'tour').
ligacao('Lisandra Batata', 'Carlos Moutinho', 3, 'tour').
ligacao('Lisandra Batata', 'Breno Granja', 2, 'trip').
ligacao('Lisandra Batata', 'Rodrigo Sousa', 3, 'run').
ligacao('Lisandra Batata', 'Andreia Sousa', 2, 'introspection').
ligacao('Lisandra Batata', 'Deolinda Varzeas', 2, 'meditation').
ligacao('Lisandra Batata', 'Rosa Machado', 1, 'photo').
ligacao('Lisandra Batata', 'Guilherme Araujo', 2, 'meditation').
ligacao('Lisandra Batata', 'Joana Araujo', 3, 'photo').
ligacao('Lisandra Batata', 'Alberto Estrela', 1, 'trip').
ligacao('Lisandra Batata', 'Alberto Camara', 1, 'rap').
ligacao('Alma Velasco', 'Carlos Moutinho', 1, 'cooking').
ligacao('Alma Velasco', 'Breno Granja', 2, 'swim').
ligacao('Alma Velasco', 'Rodrigo Sousa', 3, 'baseball').
ligacao('Alma Velasco', 'Andreia Sousa', 2, 'travel').
ligacao('Alma Velasco', 'Deolinda Varzeas', 2, 'football').
ligacao('Alma Velasco', 'Rosa Machado', 3, 'outdoors').
ligacao('Alma Velasco', 'Guilherme Araujo', 2, 'video game').
ligacao('Alma Velasco', 'Joana Araujo', 2, 'nature').
ligacao('Alma Velasco', 'Alberto Estrela', 1, 'tour').
ligacao('Alma Velasco', 'Alberto Camara', 2, 'tour').
ligacao('Zavier Salomao', 'Carlos Moutinho', 1, 'meditation').
ligacao('Zavier Salomao', 'Breno Granja', 3, 'rap').
ligacao('Zavier Salomao', 'Rodrigo Sousa', 1, 'backing').
ligacao('Zavier Salomao', 'Andreia Sousa', 3, 'cooking').
ligacao('Zavier Salomao', 'Deolinda Varzeas', 3, 'sport').
ligacao('Zavier Salomao', 'Rosa Machado', 2, 'photo').
ligacao('Zavier Salomao', 'Guilherme Araujo', 3, 'nature').
ligacao('Zavier Salomao', 'Joana Araujo', 2, 'run').
ligacao('Zavier Salomao', 'Alberto Estrela', 1, 'cooking').
ligacao('Zavier Salomao', 'Alberto Camara', 1, 'tour').
ligacao('Xavier Alcaide', 'Carlos Moutinho', 3, 'outdoors').
ligacao('Xavier Alcaide', 'Breno Granja', 2, 'folk').
ligacao('Xavier Alcaide', 'Rodrigo Sousa', 3, 'football').
ligacao('Xavier Alcaide', 'Andreia Sousa', 3, 'video game').
ligacao('Xavier Alcaide', 'Deolinda Varzeas', 1, 'baseball').
ligacao('Xavier Alcaide', 'Rosa Machado', 1, 'trip').
ligacao('Xavier Alcaide', 'Guilherme Araujo', 3, 'music').
ligacao('Xavier Alcaide', 'Joana Araujo', 2, 'photo').
ligacao('Xavier Alcaide', 'Alberto Estrela', 3, 'sport').
ligacao('Xavier Alcaide', 'Alberto Camara', 2, 'tour').
ligacao('Rosa Machado', 'Pedro Mourao', 2, 'photo').
ligacao('Rosa Machado', 'Rui Mariske', 3, 'photography').
ligacao('Rosa Machado', 'Lisandra Batata', 1, 'photo').
ligacao('Rosa Machado', 'Alma Velasco', 3, 'outdoors').
ligacao('Rosa Machado', 'Zavier Salomao', 1, 'photo').
ligacao('Rosa Machado', 'Xavier Alcaide', 2, 'trip').
ligacao('Guilherme Araujo', 'Pedro Mourao', 1, 'sport').
ligacao('Guilherme Araujo', 'Rui Mariske', 1, 'swim').
ligacao('Guilherme Araujo', 'Lisandra Batata', 2, 'meditation').
ligacao('Guilherme Araujo', 'Alma Velasco', 1, 'video game').
ligacao('Guilherme Araujo', 'Zavier Salomao', 3, 'nature').
ligacao('Guilherme Araujo', 'Xavier Alcaide', 2, 'music').
ligacao('Joana Araujo', 'Pedro Mourao', 1, 'volunteering').
ligacao('Joana Araujo', 'Rui Mariske', 2, 'handball').
ligacao('Joana Araujo', 'Lisandra Batata', 3, 'photo').
ligacao('Joana Araujo', 'Alma Velasco', 3, 'nature').
ligacao('Joana Araujo', 'Zavier Salomao', 1, 'run').
ligacao('Joana Araujo', 'Xavier Alcaide', 1, 'photo').
ligacao('Alberto Estrela', 'Pedro Mourao', 2, 'swim').
ligacao('Alberto Estrela', 'Rui Mariske', 1, 'photo').
ligacao('Alberto Estrela', 'Lisandra Batata', 2, 'trip').
ligacao('Alberto Estrela', 'Alma Velasco', 3, 'tour').
ligacao('Alberto Estrela', 'Zavier Salomao', 2, 'cooking').
ligacao('Alberto Estrela', 'Xavier Alcaide', 3, 'sport').
ligacao('Alberto Camara', 'Pedro Mourao', 3, 'photo').
ligacao('Alberto Camara', 'Rui Mariske', 3, 'tour').
ligacao('Alberto Camara', 'Lisandra Batata', 3, 'rap').
ligacao('Alberto Camara', 'Alma Velasco', 2, 'tour').
ligacao('Alberto Camara', 'Zavier Salomao', 2, 'tour').
ligacao('Alberto Camara', 'Xavier Alcaide', 1, 'tour').
