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
ligacao('Sarah Silva', 'David Correia', 1, 'surf').
ligacao('Sarah Silva', 'Flora Quental', 3, 'run').
ligacao('Pedro Mourao', 'Maria Francisca', 3, 'nature').
ligacao('Pedro Mourao', 'Rui Duraes', 3, 'run').
ligacao('Pedro Mourao', 'Rui Pedro', 2, 'trip').
ligacao('Pedro Mourao', 'Alice Monforte', 2, 'handball').
ligacao('Pedro Mourao', 'Antero Ouro', 2, 'video game').
ligacao('Pedro Mourao', 'Rafaela Uria', 2, 'outdoors').
ligacao('Pedro Mourao', 'Liliana Infante', 1, 'swim').
ligacao('Rafael Soares', 'Sarah Silva', 1, 'rap').
ligacao('Rafael Soares', 'Fabio Silva', 2, 'rap').
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 'run').
ligacao('Rafael Soares', 'Marco Gravato', 1, 'surf').
ligacao('Rafael Soares', 'Denzel Rufino', 2, 'nature').
ligacao('Rafael Soares', 'Joao Bulhosa', 2, 'tour').
ligacao('Rafael Soares', 'Ana Camarinho', 1, 'meditation').
ligacao('Rafael Soares', 'Mia Carvalho', 1, 'rap').
ligacao('Dario Ornelas', 'Sarah Silva', 3, 'photo').
ligacao('Dario Ornelas', 'Fabio Silva', 2, 'meditation').
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Dario Ornelas', 'Marco Gravato', 2, 'tour').
ligacao('Dario Ornelas', 'Denzel Rufino', 3, 'tour').
ligacao('Dario Ornelas', 'Joao Bulhosa', 1, 'trip').
ligacao('Dario Ornelas', 'Ana Camarinho', 1, 'video game').
ligacao('Dario Ornelas', 'Mia Carvalho', 2, 'trip').
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, 'outdoors').
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 'sport').
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, 'video game').
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 'folk').
ligacao('Yuri Serralheiro', 'Denzel Rufino', 1, 'folk').
ligacao('Yuri Serralheiro', 'Joao Bulhosa', 2, 'meditation').
ligacao('Yuri Serralheiro', 'Ana Camarinho', 1, 'trip').
ligacao('Yuri Serralheiro', 'Mia Carvalho', 3, 'meditation').
ligacao('Francisco Vilar', 'Sarah Silva', 3, 'baseball').
ligacao('Francisco Vilar', 'Fabio Silva', 2, 'rock').
ligacao('Francisco Vilar', 'Jonatas Granjeiro', 3, 'travel').
ligacao('Francisco Vilar', 'Marco Gravato', 3, 'run').
ligacao('Francisco Vilar', 'Denzel Rufino', 1, 'football').
ligacao('Francisco Vilar', 'Joao Bulhosa', 3, 'baseball').
ligacao('Francisco Vilar', 'Ana Camarinho', 3, 'football').
ligacao('Francisco Vilar', 'Mia Carvalho', 1, 'trip').
ligacao('Nancy Sodre', 'Sarah Silva', 2, 'rap').
ligacao('Nancy Sodre', 'Fabio Silva', 1, 'introspection').
ligacao('Nancy Sodre', 'Jonatas Granjeiro', 3, 'volunteering').
ligacao('Nancy Sodre', 'Marco Gravato', 1, 'folk').
ligacao('Nancy Sodre', 'Denzel Rufino', 2, 'folk').
ligacao('Nancy Sodre', 'Joao Bulhosa', 1, 'run').
ligacao('Nancy Sodre', 'Ana Camarinho', 3, 'rock').
ligacao('Nancy Sodre', 'Mia Carvalho', 1, 'music').
ligacao('David Correia', 'Sarah Silva', 1, 'surf').
ligacao('David Correia', 'Fabio Silva', 1, 'rap').
ligacao('David Correia', 'Jonatas Granjeiro', 3, 'volunteering').
ligacao('David Correia', 'Marco Gravato', 2, 'introspection').
ligacao('David Correia', 'Denzel Rufino', 3, 'sport').
ligacao('David Correia', 'Joao Bulhosa', 2, 'nature').
ligacao('David Correia', 'Ana Camarinho', 1, 'baseball').
ligacao('David Correia', 'Mia Carvalho', 3, 'travel').
ligacao('Flora Quental', 'Sarah Silva', 3, 'music').
ligacao('Flora Quental', 'Fabio Silva', 3, 'run').
ligacao('Flora Quental', 'Jonatas Granjeiro', 1, 'run').
ligacao('Flora Quental', 'Marco Gravato', 2, 'cooking').
ligacao('Flora Quental', 'Denzel Rufino', 1, 'video game').
ligacao('Flora Quental', 'Joao Bulhosa', 2, 'rap').
ligacao('Flora Quental', 'Ana Camarinho', 2, 'photography').
ligacao('Flora Quental', 'Mia Carvalho', 1, 'introspection').
ligacao('Fabio Silva', 'Rafael Soares', 1, 'rap').
ligacao('Fabio Silva', 'Dario Ornelas', 2, 'meditation').
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 'sport').
ligacao('Fabio Silva', 'Francisco Vilar', 1, 'rock').
ligacao('Fabio Silva', 'Nancy Sodre', 2, 'introspection').
ligacao('Fabio Silva', 'David Correia', 3, 'rap').
ligacao('Fabio Silva', 'Flora Quental', 3, 'run').
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 'travel').
ligacao('Fabio Silva', 'Breno Granja', 3, 'video game').
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 'tour').
ligacao('Fabio Silva', 'Andreia Sousa', 3, 'football').
ligacao('Fabio Silva', 'Deolinda Varzeas', 3, 'baseball').
ligacao('Fabio Silva', 'Beatriz Varzeas', 1, 'nature').
ligacao('Fabio Silva', 'Antonio Morais', 3, 'photo').
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 'run').
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 'volunteering').
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, 'video game').
ligacao('Jonatas Granjeiro', 'Francisco Vilar', 1, 'travel').
ligacao('Jonatas Granjeiro', 'Nancy Sodre', 2, 'volunteering').
ligacao('Jonatas Granjeiro', 'David Correia', 2, 'volunteering').
ligacao('Jonatas Granjeiro', 'Flora Quental', 2, 'run').
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 'backing').
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 'volunteering').
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 'introspection').
ligacao('Jonatas Granjeiro', 'Andreia Sousa', 2, 'run').
ligacao('Jonatas Granjeiro', 'Deolinda Varzeas', 2, 'backing').
ligacao('Jonatas Granjeiro', 'Beatriz Varzeas', 2, 'travel').
ligacao('Jonatas Granjeiro', 'Antonio Morais', 1, 'travel').
ligacao('Marco Gravato', 'Rafael Soares', 3, 'surf').
ligacao('Marco Gravato', 'Dario Ornelas', 3, 'tour').
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 'folk').
ligacao('Marco Gravato', 'Francisco Vilar', 2, 'run').
ligacao('Marco Gravato', 'Nancy Sodre', 2, 'folk').
ligacao('Marco Gravato', 'David Correia', 2, 'introspection').
ligacao('Marco Gravato', 'Flora Quental', 3, 'cooking').
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 'video game').
ligacao('Marco Gravato', 'Breno Granja', 3, 'swim').
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 'handball').
ligacao('Marco Gravato', 'Andreia Sousa', 2, 'run').
ligacao('Marco Gravato', 'Deolinda Varzeas', 1, 'video game').
ligacao('Marco Gravato', 'Beatriz Varzeas', 2, 'trip').
ligacao('Marco Gravato', 'Antonio Morais', 3, 'tour').
ligacao('Denzel Rufino', 'Rafael Soares', 2, 'nature').
ligacao('Denzel Rufino', 'Dario Ornelas', 2, 'tour').
ligacao('Denzel Rufino', 'Yuri Serralheiro', 3, 'folk').
ligacao('Denzel Rufino', 'Francisco Vilar', 1, 'football').
ligacao('Denzel Rufino', 'Nancy Sodre', 2, 'folk').
ligacao('Denzel Rufino', 'David Correia', 3, 'sport').
ligacao('Denzel Rufino', 'Flora Quental', 3, 'video game').
ligacao('Denzel Rufino', 'Carlos Moutinho', 2, 'folk').
ligacao('Denzel Rufino', 'Breno Granja', 3, 'tour').
ligacao('Denzel Rufino', 'Rodrigo Sousa', 3, 'baseball').
ligacao('Denzel Rufino', 'Andreia Sousa', 1, 'rap').
ligacao('Denzel Rufino', 'Deolinda Varzeas', 1, 'folk').
ligacao('Denzel Rufino', 'Beatriz Varzeas', 3, 'travel').
ligacao('Denzel Rufino', 'Antonio Morais', 2, 'nature').
ligacao('Joao Bulhosa', 'Rafael Soares', 2, 'tour').
ligacao('Joao Bulhosa', 'Dario Ornelas', 1, 'trip').
ligacao('Joao Bulhosa', 'Yuri Serralheiro', 2, 'meditation').
ligacao('Joao Bulhosa', 'Francisco Vilar', 1, 'baseball').
ligacao('Joao Bulhosa', 'Nancy Sodre', 1, 'run').
ligacao('Joao Bulhosa', 'David Correia', 2, 'nature').
ligacao('Joao Bulhosa', 'Flora Quental', 3, 'rap').
ligacao('Joao Bulhosa', 'Carlos Moutinho', 3, 'folk').
ligacao('Joao Bulhosa', 'Breno Granja', 1, 'folk').
ligacao('Joao Bulhosa', 'Rodrigo Sousa', 3, 'run').
ligacao('Joao Bulhosa', 'Andreia Sousa', 3, 'cooking').
ligacao('Joao Bulhosa', 'Deolinda Varzeas', 1, 'rock').
ligacao('Joao Bulhosa', 'Beatriz Varzeas', 3, 'photography').
ligacao('Joao Bulhosa', 'Antonio Morais', 2, 'photo').
ligacao('Ana Camarinho', 'Rafael Soares', 1, 'meditation').
ligacao('Ana Camarinho', 'Dario Ornelas', 1, 'video game').
ligacao('Ana Camarinho', 'Yuri Serralheiro', 2, 'trip').
ligacao('Ana Camarinho', 'Francisco Vilar', 3, 'football').
ligacao('Ana Camarinho', 'Nancy Sodre', 1, 'rock').
ligacao('Ana Camarinho', 'David Correia', 1, 'baseball').
ligacao('Ana Camarinho', 'Flora Quental', 1, 'photography').
ligacao('Ana Camarinho', 'Carlos Moutinho', 2, 'rock').
ligacao('Ana Camarinho', 'Breno Granja', 2, 'introspection').
ligacao('Ana Camarinho', 'Rodrigo Sousa', 3, 'photo').
ligacao('Ana Camarinho', 'Andreia Sousa', 2, 'introspection').
ligacao('Ana Camarinho', 'Deolinda Varzeas', 1, 'baseball').
ligacao('Ana Camarinho', 'Beatriz Varzeas', 3, 'baseball').
ligacao('Ana Camarinho', 'Antonio Morais', 3, 'meditation').
ligacao('Mia Carvalho', 'Rafael Soares', 2, 'rap').
ligacao('Mia Carvalho', 'Dario Ornelas', 1, 'photo').
ligacao('Mia Carvalho', 'Yuri Serralheiro', 2, 'baseball').
ligacao('Mia Carvalho', 'Francisco Vilar', 1, 'nature').
ligacao('Mia Carvalho', 'Nancy Sodre', 1, 'music').
ligacao('Mia Carvalho', 'David Correia', 1, 'travel').
ligacao('Mia Carvalho', 'Flora Quental', 1, 'introspection').
ligacao('Mia Carvalho', 'Carlos Moutinho', 3, 'run').
ligacao('Mia Carvalho', 'Breno Granja', 3, 'rock').
ligacao('Mia Carvalho', 'Rodrigo Sousa', 3, 'volunteering').
ligacao('Mia Carvalho', 'Andreia Sousa', 1, 'tour').
ligacao('Mia Carvalho', 'Deolinda Varzeas', 1, 'football').
ligacao('Mia Carvalho', 'Beatriz Varzeas', 1, 'video game').
ligacao('Mia Carvalho', 'Antonio Morais', 3, 'volunteering').
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 'travel').
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 'backing').
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 'video game').
ligacao('Carlos Moutinho', 'Denzel Rufino', 3, 'folk').
ligacao('Carlos Moutinho', 'Joao Bulhosa', 3, 'folk').
ligacao('Carlos Moutinho', 'Ana Camarinho', 1, 'rock').
ligacao('Carlos Moutinho', 'Mia Carvalho', 3, 'run').
ligacao('Carlos Moutinho', 'Rui Mariske', 3, 'baseball').
ligacao('Carlos Moutinho', 'Lisandra Batata', 1, 'tour').
ligacao('Carlos Moutinho', 'Alma Velasco', 3, 'cooking').
ligacao('Carlos Moutinho', 'Zavier Salomao', 3, 'meditation').
ligacao('Carlos Moutinho', 'Xavier Alcaide', 3, 'outdoors').
ligacao('Carlos Moutinho', 'Teresa Barbosa', 2, 'photography').
ligacao('Carlos Moutinho', 'Helena Peixoto', 1, 'outdoors').
ligacao('Breno Granja', 'Fabio Silva', 3, 'video game').
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, 'volunteering').
ligacao('Breno Granja', 'Marco Gravato', 2, 'swim').
ligacao('Breno Granja', 'Denzel Rufino', 1, 'tour').
ligacao('Breno Granja', 'Joao Bulhosa', 2, 'folk').
ligacao('Breno Granja', 'Ana Camarinho', 1, 'introspection').
ligacao('Breno Granja', 'Mia Carvalho', 2, 'rock').
ligacao('Breno Granja', 'Rui Mariske', 3, 'video game').
ligacao('Breno Granja', 'Lisandra Batata', 3, 'trip').
ligacao('Breno Granja', 'Alma Velasco', 1, 'swim').
ligacao('Breno Granja', 'Zavier Salomao', 3, 'rap').
ligacao('Breno Granja', 'Xavier Alcaide', 1, 'folk').
ligacao('Breno Granja', 'Teresa Barbosa', 2, 'cooking').
ligacao('Breno Granja', 'Helena Peixoto', 2, 'swim').
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 'tour').
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 'introspection').
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 'handball').
ligacao('Rodrigo Sousa', 'Denzel Rufino', 2, 'baseball').
ligacao('Rodrigo Sousa', 'Joao Bulhosa', 2, 'run').
ligacao('Rodrigo Sousa', 'Ana Camarinho', 2, 'photo').
ligacao('Rodrigo Sousa', 'Mia Carvalho', 3, 'volunteering').
ligacao('Rodrigo Sousa', 'Rui Mariske', 3, 'football').
ligacao('Rodrigo Sousa', 'Lisandra Batata', 2, 'run').
ligacao('Rodrigo Sousa', 'Alma Velasco', 1, 'baseball').
ligacao('Rodrigo Sousa', 'Zavier Salomao', 2, 'backing').
ligacao('Rodrigo Sousa', 'Xavier Alcaide', 1, 'football').
ligacao('Rodrigo Sousa', 'Teresa Barbosa', 2, 'video game').
ligacao('Rodrigo Sousa', 'Helena Peixoto', 2, 'nature').
ligacao('Andreia Sousa', 'Fabio Silva', 2, 'football').
ligacao('Andreia Sousa', 'Jonatas Granjeiro', 3, 'run').
ligacao('Andreia Sousa', 'Marco Gravato', 3, 'run').
ligacao('Andreia Sousa', 'Denzel Rufino', 3, 'rap').
ligacao('Andreia Sousa', 'Joao Bulhosa', 1, 'cooking').
ligacao('Andreia Sousa', 'Ana Camarinho', 1, 'introspection').
ligacao('Andreia Sousa', 'Mia Carvalho', 2, 'tour').
ligacao('Andreia Sousa', 'Rui Mariske', 2, 'music').
ligacao('Andreia Sousa', 'Lisandra Batata', 2, 'introspection').
ligacao('Andreia Sousa', 'Alma Velasco', 1, 'travel').
ligacao('Andreia Sousa', 'Zavier Salomao', 1, 'cooking').
ligacao('Andreia Sousa', 'Xavier Alcaide', 1, 'video game').
ligacao('Andreia Sousa', 'Teresa Barbosa', 2, 'nature').
ligacao('Andreia Sousa', 'Helena Peixoto', 1, 'surf').
ligacao('Deolinda Varzeas', 'Fabio Silva', 2, 'baseball').
ligacao('Deolinda Varzeas', 'Jonatas Granjeiro', 1, 'backing').
ligacao('Deolinda Varzeas', 'Marco Gravato', 1, 'video game').
ligacao('Deolinda Varzeas', 'Denzel Rufino', 2, 'folk').
ligacao('Deolinda Varzeas', 'Joao Bulhosa', 3, 'rock').
ligacao('Deolinda Varzeas', 'Ana Camarinho', 2, 'baseball').
ligacao('Deolinda Varzeas', 'Mia Carvalho', 2, 'football').
ligacao('Deolinda Varzeas', 'Rui Mariske', 3, 'cooking').
ligacao('Deolinda Varzeas', 'Lisandra Batata', 3, 'meditation').
ligacao('Deolinda Varzeas', 'Alma Velasco', 1, 'football').
ligacao('Deolinda Varzeas', 'Zavier Salomao', 1, 'sport').
ligacao('Deolinda Varzeas', 'Xavier Alcaide', 1, 'baseball').
ligacao('Deolinda Varzeas', 'Teresa Barbosa', 1, 'music').
ligacao('Deolinda Varzeas', 'Helena Peixoto', 2, 'sport').
ligacao('Beatriz Varzeas', 'Fabio Silva', 3, 'nature').
ligacao('Beatriz Varzeas', 'Jonatas Granjeiro', 3, 'travel').
ligacao('Beatriz Varzeas', 'Marco Gravato', 2, 'trip').
ligacao('Beatriz Varzeas', 'Denzel Rufino', 2, 'travel').
ligacao('Beatriz Varzeas', 'Joao Bulhosa', 2, 'photography').
ligacao('Beatriz Varzeas', 'Ana Camarinho', 3, 'baseball').
ligacao('Beatriz Varzeas', 'Mia Carvalho', 1, 'video game').
ligacao('Beatriz Varzeas', 'Rui Mariske', 3, 'introspection').
ligacao('Beatriz Varzeas', 'Lisandra Batata', 1, 'photo').
ligacao('Beatriz Varzeas', 'Alma Velasco', 2, 'run').
ligacao('Beatriz Varzeas', 'Zavier Salomao', 3, 'cooking').
ligacao('Beatriz Varzeas', 'Xavier Alcaide', 2, 'introspection').
ligacao('Beatriz Varzeas', 'Teresa Barbosa', 3, 'run').
ligacao('Beatriz Varzeas', 'Helena Peixoto', 2, 'folk').
ligacao('Antonio Morais', 'Fabio Silva', 1, 'photo').
ligacao('Antonio Morais', 'Jonatas Granjeiro', 2, 'travel').
ligacao('Antonio Morais', 'Marco Gravato', 2, 'tour').
ligacao('Antonio Morais', 'Denzel Rufino', 1, 'nature').
ligacao('Antonio Morais', 'Joao Bulhosa', 1, 'photo').
ligacao('Antonio Morais', 'Ana Camarinho', 2, 'meditation').
ligacao('Antonio Morais', 'Mia Carvalho', 3, 'volunteering').
ligacao('Antonio Morais', 'Rui Mariske', 3, 'outdoors').
ligacao('Antonio Morais', 'Lisandra Batata', 2, 'rock').
ligacao('Antonio Morais', 'Alma Velasco', 3, 'handball').
ligacao('Antonio Morais', 'Zavier Salomao', 2, 'handball').
ligacao('Antonio Morais', 'Xavier Alcaide', 3, 'surf').
ligacao('Antonio Morais', 'Teresa Barbosa', 3, 'outdoors').
ligacao('Antonio Morais', 'Helena Peixoto', 2, 'sport').
ligacao('Rui Mariske', 'Carlos Moutinho', 1, 'baseball').
ligacao('Rui Mariske', 'Breno Granja', 1, 'video game').
ligacao('Rui Mariske', 'Rodrigo Sousa', 3, 'football').
ligacao('Rui Mariske', 'Andreia Sousa', 1, 'music').
ligacao('Rui Mariske', 'Deolinda Varzeas', 2, 'cooking').
ligacao('Rui Mariske', 'Beatriz Varzeas', 3, 'introspection').
ligacao('Rui Mariske', 'Antonio Morais', 1, 'outdoors').
ligacao('Rui Mariske', 'Rosa Machado', 1, 'photography').
ligacao('Rui Mariske', 'Guilherme Araujo', 3, 'swim').
ligacao('Rui Mariske', 'Joana Araujo', 1, 'handball').
ligacao('Rui Mariske', 'Alberto Estrela', 1, 'photo').
ligacao('Rui Mariske', 'Alberto Camara', 1, 'tour').
ligacao('Rui Mariske', 'Diana Chaves', 3, 'backing').
ligacao('Rui Mariske', 'Joao Prada', 2, 'rock').
ligacao('Lisandra Batata', 'Carlos Moutinho', 3, 'tour').
ligacao('Lisandra Batata', 'Breno Granja', 2, 'trip').
ligacao('Lisandra Batata', 'Rodrigo Sousa', 3, 'run').
ligacao('Lisandra Batata', 'Andreia Sousa', 2, 'introspection').
ligacao('Lisandra Batata', 'Deolinda Varzeas', 2, 'meditation').
ligacao('Lisandra Batata', 'Beatriz Varzeas', 1, 'photo').
ligacao('Lisandra Batata', 'Antonio Morais', 3, 'rock').
ligacao('Lisandra Batata', 'Rosa Machado', 1, 'photo').
ligacao('Lisandra Batata', 'Guilherme Araujo', 2, 'meditation').
ligacao('Lisandra Batata', 'Joana Araujo', 3, 'photo').
ligacao('Lisandra Batata', 'Alberto Estrela', 1, 'trip').
ligacao('Lisandra Batata', 'Alberto Camara', 1, 'rap').
ligacao('Lisandra Batata', 'Diana Chaves', 3, 'introspection').
ligacao('Lisandra Batata', 'Joao Prada', 2, 'video game').
ligacao('Alma Velasco', 'Carlos Moutinho', 1, 'cooking').
ligacao('Alma Velasco', 'Breno Granja', 2, 'swim').
ligacao('Alma Velasco', 'Rodrigo Sousa', 3, 'baseball').
ligacao('Alma Velasco', 'Andreia Sousa', 2, 'travel').
ligacao('Alma Velasco', 'Deolinda Varzeas', 2, 'football').
ligacao('Alma Velasco', 'Beatriz Varzeas', 3, 'run').
ligacao('Alma Velasco', 'Antonio Morais', 3, 'handball').
ligacao('Alma Velasco', 'Rosa Machado', 3, 'outdoors').
ligacao('Alma Velasco', 'Guilherme Araujo', 2, 'video game').
ligacao('Alma Velasco', 'Joana Araujo', 2, 'nature').
ligacao('Alma Velasco', 'Alberto Estrela', 1, 'tour').
ligacao('Alma Velasco', 'Alberto Camara', 2, 'tour').
ligacao('Alma Velasco', 'Diana Chaves', 3, 'football').
ligacao('Alma Velasco', 'Joao Prada', 1, 'music').
ligacao('Zavier Salomao', 'Carlos Moutinho', 1, 'meditation').
ligacao('Zavier Salomao', 'Breno Granja', 3, 'rap').
ligacao('Zavier Salomao', 'Rodrigo Sousa', 1, 'backing').
ligacao('Zavier Salomao', 'Andreia Sousa', 3, 'cooking').
ligacao('Zavier Salomao', 'Deolinda Varzeas', 3, 'sport').
ligacao('Zavier Salomao', 'Beatriz Varzeas', 3, 'cooking').
ligacao('Zavier Salomao', 'Antonio Morais', 1, 'handball').
ligacao('Zavier Salomao', 'Rosa Machado', 2, 'photo').
ligacao('Zavier Salomao', 'Guilherme Araujo', 3, 'nature').
ligacao('Zavier Salomao', 'Joana Araujo', 2, 'run').
ligacao('Zavier Salomao', 'Alberto Estrela', 1, 'cooking').
ligacao('Zavier Salomao', 'Alberto Camara', 1, 'tour').
ligacao('Zavier Salomao', 'Diana Chaves', 2, 'trip').
ligacao('Zavier Salomao', 'Joao Prada', 1, 'introspection').
ligacao('Xavier Alcaide', 'Carlos Moutinho', 3, 'outdoors').
ligacao('Xavier Alcaide', 'Breno Granja', 2, 'folk').
ligacao('Xavier Alcaide', 'Rodrigo Sousa', 3, 'football').
ligacao('Xavier Alcaide', 'Andreia Sousa', 3, 'video game').
ligacao('Xavier Alcaide', 'Deolinda Varzeas', 1, 'baseball').
ligacao('Xavier Alcaide', 'Beatriz Varzeas', 3, 'introspection').
ligacao('Xavier Alcaide', 'Antonio Morais', 1, 'surf').
ligacao('Xavier Alcaide', 'Rosa Machado', 1, 'trip').
ligacao('Xavier Alcaide', 'Guilherme Araujo', 3, 'music').
ligacao('Xavier Alcaide', 'Joana Araujo', 2, 'photo').
ligacao('Xavier Alcaide', 'Alberto Estrela', 3, 'sport').
ligacao('Xavier Alcaide', 'Alberto Camara', 2, 'tour').
ligacao('Xavier Alcaide', 'Diana Chaves', 3, 'photo').
ligacao('Xavier Alcaide', 'Joao Prada', 2, 'outdoors').
ligacao('Teresa Barbosa', 'Carlos Moutinho', 3, 'photography').
ligacao('Teresa Barbosa', 'Breno Granja', 2, 'cooking').
ligacao('Teresa Barbosa', 'Rodrigo Sousa', 1, 'video game').
ligacao('Teresa Barbosa', 'Andreia Sousa', 1, 'nature').
ligacao('Teresa Barbosa', 'Deolinda Varzeas', 3, 'music').
ligacao('Teresa Barbosa', 'Beatriz Varzeas', 1, 'run').
ligacao('Teresa Barbosa', 'Antonio Morais', 3, 'outdoors').
ligacao('Teresa Barbosa', 'Rosa Machado', 1, 'handball').
ligacao('Teresa Barbosa', 'Guilherme Araujo', 3, 'surf').
ligacao('Teresa Barbosa', 'Joana Araujo', 2, 'trip').
ligacao('Teresa Barbosa', 'Alberto Estrela', 3, 'meditation').
ligacao('Teresa Barbosa', 'Alberto Camara', 2, 'rap').
ligacao('Teresa Barbosa', 'Diana Chaves', 1, 'baseball').
ligacao('Teresa Barbosa', 'Joao Prada', 2, 'run').
ligacao('Helena Peixoto', 'Carlos Moutinho', 2, 'outdoors').
ligacao('Helena Peixoto', 'Breno Granja', 2, 'swim').
ligacao('Helena Peixoto', 'Rodrigo Sousa', 3, 'nature').
ligacao('Helena Peixoto', 'Andreia Sousa', 1, 'surf').
ligacao('Helena Peixoto', 'Deolinda Varzeas', 2, 'sport').
ligacao('Helena Peixoto', 'Beatriz Varzeas', 3, 'folk').
ligacao('Helena Peixoto', 'Antonio Morais', 2, 'sport').
ligacao('Helena Peixoto', 'Rosa Machado', 2, 'backing').
ligacao('Helena Peixoto', 'Guilherme Araujo', 1, 'introspection').
ligacao('Helena Peixoto', 'Joana Araujo', 2, 'travel').
ligacao('Helena Peixoto', 'Alberto Estrela', 3, 'tour').
ligacao('Helena Peixoto', 'Alberto Camara', 1, 'rock').
ligacao('Helena Peixoto', 'Diana Chaves', 1, 'swim').
ligacao('Helena Peixoto', 'Joao Prada', 1, 'photo').
ligacao('Rosa Machado', 'Rui Mariske', 3, 'photography').
ligacao('Rosa Machado', 'Lisandra Batata', 1, 'photo').
ligacao('Rosa Machado', 'Alma Velasco', 3, 'outdoors').
ligacao('Rosa Machado', 'Zavier Salomao', 1, 'photo').
ligacao('Rosa Machado', 'Xavier Alcaide', 2, 'trip').
ligacao('Rosa Machado', 'Teresa Barbosa', 2, 'handball').
ligacao('Rosa Machado', 'Helena Peixoto', 3, 'backing').
ligacao('Rosa Machado', 'Telmo Catarino', 2, 'photo').
ligacao('Rosa Machado', 'Guilherme Vital', 1, 'baseball').
ligacao('Rosa Machado', 'Rita Brandao', 2, 'nature').
ligacao('Rosa Machado', 'Sara Homem', 1, 'baseball').
ligacao('Rosa Machado', 'Veronica Colaca', 1, 'volunteering').
ligacao('Rosa Machado', 'Emilia Monforte', 1, 'music').
ligacao('Rosa Machado', 'Olivia Vidal', 3, 'sport').
ligacao('Guilherme Araujo', 'Rui Mariske', 1, 'swim').
ligacao('Guilherme Araujo', 'Lisandra Batata', 2, 'meditation').
ligacao('Guilherme Araujo', 'Alma Velasco', 1, 'video game').
ligacao('Guilherme Araujo', 'Zavier Salomao', 3, 'nature').
ligacao('Guilherme Araujo', 'Xavier Alcaide', 2, 'music').
ligacao('Guilherme Araujo', 'Teresa Barbosa', 1, 'surf').
ligacao('Guilherme Araujo', 'Helena Peixoto', 3, 'introspection').
ligacao('Guilherme Araujo', 'Telmo Catarino', 3, 'introspection').
ligacao('Guilherme Araujo', 'Guilherme Vital', 3, 'video game').
ligacao('Guilherme Araujo', 'Rita Brandao', 2, 'photography').
ligacao('Guilherme Araujo', 'Sara Homem', 3, 'handball').
ligacao('Guilherme Araujo', 'Veronica Colaca', 2, 'cooking').
ligacao('Guilherme Araujo', 'Emilia Monforte', 1, 'sport').
ligacao('Guilherme Araujo', 'Olivia Vidal', 3, 'music').
ligacao('Joana Araujo', 'Rui Mariske', 2, 'handball').
ligacao('Joana Araujo', 'Lisandra Batata', 3, 'photo').
ligacao('Joana Araujo', 'Alma Velasco', 3, 'nature').
ligacao('Joana Araujo', 'Zavier Salomao', 1, 'run').
ligacao('Joana Araujo', 'Xavier Alcaide', 1, 'photo').
ligacao('Joana Araujo', 'Teresa Barbosa', 2, 'trip').
ligacao('Joana Araujo', 'Helena Peixoto', 1, 'travel').
ligacao('Joana Araujo', 'Telmo Catarino', 1, 'volunteering').
ligacao('Joana Araujo', 'Guilherme Vital', 3, 'meditation').
ligacao('Joana Araujo', 'Rita Brandao', 2, 'folk').
ligacao('Joana Araujo', 'Sara Homem', 3, 'rap').
ligacao('Joana Araujo', 'Veronica Colaca', 3, 'introspection').
ligacao('Joana Araujo', 'Emilia Monforte', 3, 'run').
ligacao('Joana Araujo', 'Olivia Vidal', 1, 'meditation').
ligacao('Alberto Estrela', 'Rui Mariske', 1, 'photo').
ligacao('Alberto Estrela', 'Lisandra Batata', 2, 'trip').
ligacao('Alberto Estrela', 'Alma Velasco', 3, 'tour').
ligacao('Alberto Estrela', 'Zavier Salomao', 2, 'cooking').
ligacao('Alberto Estrela', 'Xavier Alcaide', 3, 'sport').
ligacao('Alberto Estrela', 'Teresa Barbosa', 2, 'meditation').
ligacao('Alberto Estrela', 'Helena Peixoto', 1, 'tour').
ligacao('Alberto Estrela', 'Telmo Catarino', 2, 'folk').
ligacao('Alberto Estrela', 'Guilherme Vital', 3, 'travel').
ligacao('Alberto Estrela', 'Rita Brandao', 2, 'photography').
ligacao('Alberto Estrela', 'Sara Homem', 1, 'rap').
ligacao('Alberto Estrela', 'Veronica Colaca', 3, 'swim').
ligacao('Alberto Estrela', 'Emilia Monforte', 2, 'swim').
ligacao('Alberto Estrela', 'Olivia Vidal', 2, 'travel').
ligacao('Alberto Camara', 'Rui Mariske', 3, 'tour').
ligacao('Alberto Camara', 'Lisandra Batata', 3, 'rap').
ligacao('Alberto Camara', 'Alma Velasco', 2, 'tour').
ligacao('Alberto Camara', 'Zavier Salomao', 2, 'tour').
ligacao('Alberto Camara', 'Xavier Alcaide', 1, 'tour').
ligacao('Alberto Camara', 'Teresa Barbosa', 2, 'rap').
ligacao('Alberto Camara', 'Helena Peixoto', 2, 'rock').
ligacao('Alberto Camara', 'Telmo Catarino', 3, 'photo').
ligacao('Alberto Camara', 'Guilherme Vital', 1, 'video game').
ligacao('Alberto Camara', 'Rita Brandao', 2, 'folk').
ligacao('Alberto Camara', 'Sara Homem', 2, 'handball').
ligacao('Alberto Camara', 'Veronica Colaca', 3, 'sport').
ligacao('Alberto Camara', 'Emilia Monforte', 1, 'rock').
ligacao('Alberto Camara', 'Olivia Vidal', 2, 'handball').
ligacao('Diana Chaves', 'Rui Mariske', 2, 'backing').
ligacao('Diana Chaves', 'Lisandra Batata', 3, 'introspection').
ligacao('Diana Chaves', 'Alma Velasco', 1, 'football').
ligacao('Diana Chaves', 'Zavier Salomao', 3, 'trip').
ligacao('Diana Chaves', 'Xavier Alcaide', 3, 'photo').
ligacao('Diana Chaves', 'Teresa Barbosa', 2, 'baseball').
ligacao('Diana Chaves', 'Helena Peixoto', 3, 'swim').
ligacao('Diana Chaves', 'Telmo Catarino', 2, 'trip').
ligacao('Diana Chaves', 'Guilherme Vital', 1, 'surf').
ligacao('Diana Chaves', 'Rita Brandao', 3, 'handball').
ligacao('Diana Chaves', 'Sara Homem', 2, 'folk').
ligacao('Diana Chaves', 'Veronica Colaca', 3, 'travel').
ligacao('Diana Chaves', 'Emilia Monforte', 2, 'folk').
ligacao('Diana Chaves', 'Olivia Vidal', 3, 'rap').
ligacao('Joao Prada', 'Rui Mariske', 3, 'rock').
ligacao('Joao Prada', 'Lisandra Batata', 1, 'video game').
ligacao('Joao Prada', 'Alma Velasco', 1, 'music').
ligacao('Joao Prada', 'Zavier Salomao', 2, 'introspection').
ligacao('Joao Prada', 'Xavier Alcaide', 2, 'outdoors').
ligacao('Joao Prada', 'Teresa Barbosa', 1, 'run').
ligacao('Joao Prada', 'Helena Peixoto', 3, 'photo').
ligacao('Joao Prada', 'Telmo Catarino', 1, 'football').
ligacao('Joao Prada', 'Guilherme Vital', 1, 'outdoors').
ligacao('Joao Prada', 'Rita Brandao', 1, 'video game').
ligacao('Joao Prada', 'Sara Homem', 2, 'meditation').
ligacao('Joao Prada', 'Veronica Colaca', 1, 'volunteering').
ligacao('Joao Prada', 'Emilia Monforte', 3, 'cooking').
ligacao('Joao Prada', 'Olivia Vidal', 1, 'baseball').
ligacao('Telmo Catarino', 'Rosa Machado', 3, 'photo').
ligacao('Telmo Catarino', 'Guilherme Araujo', 1, 'introspection').
ligacao('Telmo Catarino', 'Joana Araujo', 2, 'volunteering').
ligacao('Telmo Catarino', 'Alberto Estrela', 3, 'folk').
ligacao('Telmo Catarino', 'Alberto Camara', 1, 'photo').
ligacao('Telmo Catarino', 'Diana Chaves', 3, 'trip').
ligacao('Telmo Catarino', 'Joao Prada', 2, 'football').
ligacao('Telmo Catarino', 'Maria Francisca', 1, 'photo').
ligacao('Telmo Catarino', 'Rui Duraes', 3, 'music').
ligacao('Telmo Catarino', 'Rui Pedro', 1, 'travel').
ligacao('Telmo Catarino', 'Alice Monforte', 2, 'surf').
ligacao('Telmo Catarino', 'Antero Ouro', 2, 'photo').
ligacao('Telmo Catarino', 'Rafaela Uria', 3, 'music').
ligacao('Telmo Catarino', 'Liliana Infante', 1, 'meditation').
ligacao('Guilherme Vital', 'Rosa Machado', 3, 'baseball').
ligacao('Guilherme Vital', 'Guilherme Araujo', 3, 'video game').
ligacao('Guilherme Vital', 'Joana Araujo', 1, 'meditation').
ligacao('Guilherme Vital', 'Alberto Estrela', 3, 'travel').
ligacao('Guilherme Vital', 'Alberto Camara', 3, 'video game').
ligacao('Guilherme Vital', 'Diana Chaves', 1, 'surf').
ligacao('Guilherme Vital', 'Joao Prada', 1, 'outdoors').
ligacao('Guilherme Vital', 'Maria Francisca', 2, 'run').
ligacao('Guilherme Vital', 'Rui Duraes', 1, 'sport').
ligacao('Guilherme Vital', 'Rui Pedro', 2, 'surf').
ligacao('Guilherme Vital', 'Alice Monforte', 2, 'surf').
ligacao('Guilherme Vital', 'Antero Ouro', 3, 'surf').
ligacao('Guilherme Vital', 'Rafaela Uria', 3, 'photo').
ligacao('Guilherme Vital', 'Liliana Infante', 1, 'video game').
ligacao('Rita Brandao', 'Rosa Machado', 3, 'nature').
ligacao('Rita Brandao', 'Guilherme Araujo', 2, 'photography').
ligacao('Rita Brandao', 'Joana Araujo', 3, 'folk').
ligacao('Rita Brandao', 'Alberto Estrela', 1, 'photography').
ligacao('Rita Brandao', 'Alberto Camara', 1, 'folk').
ligacao('Rita Brandao', 'Diana Chaves', 2, 'handball').
ligacao('Rita Brandao', 'Joao Prada', 2, 'video game').
ligacao('Rita Brandao', 'Maria Francisca', 1, 'folk').
ligacao('Rita Brandao', 'Rui Duraes', 1, 'trip').
ligacao('Rita Brandao', 'Rui Pedro', 1, 'swim').
ligacao('Rita Brandao', 'Alice Monforte', 2, 'folk').
ligacao('Rita Brandao', 'Antero Ouro', 1, 'nature').
ligacao('Rita Brandao', 'Rafaela Uria', 1, 'swim').
ligacao('Rita Brandao', 'Liliana Infante', 3, 'backing').
ligacao('Sara Homem', 'Rosa Machado', 2, 'baseball').
ligacao('Sara Homem', 'Guilherme Araujo', 2, 'handball').
ligacao('Sara Homem', 'Joana Araujo', 2, 'rap').
ligacao('Sara Homem', 'Alberto Estrela', 1, 'rap').
ligacao('Sara Homem', 'Alberto Camara', 2, 'handball').
ligacao('Sara Homem', 'Diana Chaves', 3, 'folk').
ligacao('Sara Homem', 'Joao Prada', 1, 'meditation').
ligacao('Sara Homem', 'Maria Francisca', 3, 'surf').
ligacao('Sara Homem', 'Rui Duraes', 1, 'photography').
ligacao('Sara Homem', 'Rui Pedro', 2, 'outdoors').
ligacao('Sara Homem', 'Alice Monforte', 1, 'photo').
ligacao('Sara Homem', 'Antero Ouro', 1, 'nature').
ligacao('Sara Homem', 'Rafaela Uria', 2, 'video game').
ligacao('Sara Homem', 'Liliana Infante', 3, 'introspection').
ligacao('Veronica Colaca', 'Rosa Machado', 3, 'volunteering').
ligacao('Veronica Colaca', 'Guilherme Araujo', 3, 'cooking').
ligacao('Veronica Colaca', 'Joana Araujo', 1, 'introspection').
ligacao('Veronica Colaca', 'Alberto Estrela', 3, 'swim').
ligacao('Veronica Colaca', 'Alberto Camara', 2, 'sport').
ligacao('Veronica Colaca', 'Diana Chaves', 3, 'travel').
ligacao('Veronica Colaca', 'Joao Prada', 1, 'volunteering').
ligacao('Veronica Colaca', 'Maria Francisca', 1, 'trip').
ligacao('Veronica Colaca', 'Rui Duraes', 3, 'outdoors').
ligacao('Veronica Colaca', 'Rui Pedro', 3, 'rap').
ligacao('Veronica Colaca', 'Alice Monforte', 2, 'outdoors').
ligacao('Veronica Colaca', 'Antero Ouro', 2, 'handball').
ligacao('Veronica Colaca', 'Rafaela Uria', 2, 'meditation').
ligacao('Veronica Colaca', 'Liliana Infante', 3, 'surf').
ligacao('Emilia Monforte', 'Rosa Machado', 3, 'music').
ligacao('Emilia Monforte', 'Guilherme Araujo', 1, 'sport').
ligacao('Emilia Monforte', 'Joana Araujo', 2, 'run').
ligacao('Emilia Monforte', 'Alberto Estrela', 2, 'swim').
ligacao('Emilia Monforte', 'Alberto Camara', 2, 'rock').
ligacao('Emilia Monforte', 'Diana Chaves', 2, 'folk').
ligacao('Emilia Monforte', 'Joao Prada', 2, 'cooking').
ligacao('Emilia Monforte', 'Maria Francisca', 1, 'tour').
ligacao('Emilia Monforte', 'Rui Duraes', 3, 'rock').
ligacao('Emilia Monforte', 'Rui Pedro', 3, 'music').
ligacao('Emilia Monforte', 'Alice Monforte', 3, 'video game').
ligacao('Emilia Monforte', 'Antero Ouro', 3, 'travel').
ligacao('Emilia Monforte', 'Rafaela Uria', 3, 'introspection').
ligacao('Emilia Monforte', 'Liliana Infante', 1, 'rock').
ligacao('Olivia Vidal', 'Rosa Machado', 1, 'sport').
ligacao('Olivia Vidal', 'Guilherme Araujo', 2, 'music').
ligacao('Olivia Vidal', 'Joana Araujo', 3, 'meditation').
ligacao('Olivia Vidal', 'Alberto Estrela', 3, 'travel').
ligacao('Olivia Vidal', 'Alberto Camara', 2, 'handball').
ligacao('Olivia Vidal', 'Diana Chaves', 1, 'rap').
ligacao('Olivia Vidal', 'Joao Prada', 3, 'baseball').
ligacao('Olivia Vidal', 'Maria Francisca', 2, 'handball').
ligacao('Olivia Vidal', 'Rui Duraes', 1, 'photography').
ligacao('Olivia Vidal', 'Rui Pedro', 3, 'meditation').
ligacao('Olivia Vidal', 'Alice Monforte', 1, 'music').
ligacao('Olivia Vidal', 'Antero Ouro', 2, 'backing').
ligacao('Olivia Vidal', 'Rafaela Uria', 1, 'rock').
ligacao('Olivia Vidal', 'Liliana Infante', 3, 'photography').
ligacao('Maria Francisca', 'Pedro Mourao', 3, 'nature').
ligacao('Maria Francisca', 'Telmo Catarino', 1, 'photo').
ligacao('Maria Francisca', 'Guilherme Vital', 3, 'run').
ligacao('Maria Francisca', 'Rita Brandao', 1, 'folk').
ligacao('Maria Francisca', 'Sara Homem', 2, 'surf').
ligacao('Maria Francisca', 'Veronica Colaca', 2, 'trip').
ligacao('Maria Francisca', 'Emilia Monforte', 3, 'tour').
ligacao('Maria Francisca', 'Olivia Vidal', 3, 'handball').
ligacao('Rui Duraes', 'Pedro Mourao', 2, 'run').
ligacao('Rui Duraes', 'Telmo Catarino', 2, 'music').
ligacao('Rui Duraes', 'Guilherme Vital', 3, 'sport').
ligacao('Rui Duraes', 'Rita Brandao', 1, 'trip').
ligacao('Rui Duraes', 'Sara Homem', 2, 'photography').
ligacao('Rui Duraes', 'Veronica Colaca', 1, 'outdoors').
ligacao('Rui Duraes', 'Emilia Monforte', 1, 'rock').
ligacao('Rui Duraes', 'Olivia Vidal', 2, 'photography').
ligacao('Rui Pedro', 'Pedro Mourao', 3, 'trip').
ligacao('Rui Pedro', 'Telmo Catarino', 1, 'travel').
ligacao('Rui Pedro', 'Guilherme Vital', 1, 'surf').
ligacao('Rui Pedro', 'Rita Brandao', 3, 'swim').
ligacao('Rui Pedro', 'Sara Homem', 2, 'outdoors').
ligacao('Rui Pedro', 'Veronica Colaca', 3, 'rap').
ligacao('Rui Pedro', 'Emilia Monforte', 3, 'music').
ligacao('Rui Pedro', 'Olivia Vidal', 1, 'meditation').
ligacao('Alice Monforte', 'Pedro Mourao', 2, 'handball').
ligacao('Alice Monforte', 'Telmo Catarino', 2, 'surf').
ligacao('Alice Monforte', 'Guilherme Vital', 3, 'surf').
ligacao('Alice Monforte', 'Rita Brandao', 3, 'folk').
ligacao('Alice Monforte', 'Sara Homem', 3, 'photo').
ligacao('Alice Monforte', 'Veronica Colaca', 1, 'outdoors').
ligacao('Alice Monforte', 'Emilia Monforte', 1, 'video game').
ligacao('Alice Monforte', 'Olivia Vidal', 1, 'music').
ligacao('Antero Ouro', 'Pedro Mourao', 1, 'video game').
ligacao('Antero Ouro', 'Telmo Catarino', 2, 'photo').
ligacao('Antero Ouro', 'Guilherme Vital', 1, 'surf').
ligacao('Antero Ouro', 'Rita Brandao', 1, 'nature').
ligacao('Antero Ouro', 'Sara Homem', 2, 'nature').
ligacao('Antero Ouro', 'Veronica Colaca', 3, 'handball').
ligacao('Antero Ouro', 'Emilia Monforte', 2, 'travel').
ligacao('Antero Ouro', 'Olivia Vidal', 1, 'backing').
ligacao('Rafaela Uria', 'Pedro Mourao', 2, 'outdoors').
ligacao('Rafaela Uria', 'Telmo Catarino', 2, 'music').
ligacao('Rafaela Uria', 'Guilherme Vital', 2, 'photo').
ligacao('Rafaela Uria', 'Rita Brandao', 3, 'swim').
ligacao('Rafaela Uria', 'Sara Homem', 1, 'video game').
ligacao('Rafaela Uria', 'Veronica Colaca', 1, 'meditation').
ligacao('Rafaela Uria', 'Emilia Monforte', 1, 'introspection').
ligacao('Rafaela Uria', 'Olivia Vidal', 2, 'rock').
ligacao('Liliana Infante', 'Pedro Mourao', 3, 'swim').
ligacao('Liliana Infante', 'Telmo Catarino', 3, 'meditation').
ligacao('Liliana Infante', 'Guilherme Vital', 3, 'video game').
ligacao('Liliana Infante', 'Rita Brandao', 2, 'backing').
ligacao('Liliana Infante', 'Sara Homem', 2, 'introspection').
ligacao('Liliana Infante', 'Veronica Colaca', 1, 'surf').
ligacao('Liliana Infante', 'Emilia Monforte', 3, 'rock').
ligacao('Liliana Infante', 'Olivia Vidal', 1, 'photography').
