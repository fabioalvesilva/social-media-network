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
ligacao('Sarah Silva', 'Nancy Sodre', 3, 14).
ligacao('Pedro Mourao', 'Rosa Machado', 3, 34).
ligacao('Pedro Mourao', 'Guilherme Araujo', 3, -5).
ligacao('Pedro Mourao', 'Joana Araujo', 2, -3).
ligacao('Pedro Mourao', 'Alberto Estrela', 1, 13).
ligacao('Pedro Mourao', 'Alberto Camara', 1, 29).
ligacao('Rafael Soares', 'Sarah Silva', 1, 7).
ligacao('Rafael Soares', 'Fabio Silva', 2, 23).
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 10).
ligacao('Rafael Soares', 'Marco Gravato', 1, 19).
ligacao('Rafael Soares', 'Denzel Rufino', 2, 8).
ligacao('Rafael Soares', 'Joao Bulhosa', 2, -6).
ligacao('Dario Ornelas', 'Sarah Silva', 3, -8).
ligacao('Dario Ornelas', 'Fabio Silva', 2, 47).
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 28).
ligacao('Dario Ornelas', 'Marco Gravato', 2, 46).
ligacao('Dario Ornelas', 'Denzel Rufino', 3, 17).
ligacao('Dario Ornelas', 'Joao Bulhosa', 1, -10).
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, -10).
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 27).
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, -7).
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 0).
ligacao('Yuri Serralheiro', 'Denzel Rufino', 1, 38).
ligacao('Yuri Serralheiro', 'Joao Bulhosa', 2, 0).
ligacao('Francisco Vilar', 'Sarah Silva', 3, 16).
ligacao('Francisco Vilar', 'Fabio Silva', 2, -4).
ligacao('Francisco Vilar', 'Jonatas Granjeiro', 3, 9).
ligacao('Francisco Vilar', 'Marco Gravato', 3, -1).
ligacao('Francisco Vilar', 'Denzel Rufino', 1, 7).
ligacao('Francisco Vilar', 'Joao Bulhosa', 3, -9).
ligacao('Nancy Sodre', 'Sarah Silva', 2, 10).
ligacao('Nancy Sodre', 'Fabio Silva', 1, 41).
ligacao('Nancy Sodre', 'Jonatas Granjeiro', 3, 31).
ligacao('Nancy Sodre', 'Marco Gravato', 1, 44).
ligacao('Nancy Sodre', 'Denzel Rufino', 2, 1).
ligacao('Nancy Sodre', 'Joao Bulhosa', 1, 34).
ligacao('Fabio Silva', 'Rafael Soares', 1, 5).
ligacao('Fabio Silva', 'Dario Ornelas', 2, 23).
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 24).
ligacao('Fabio Silva', 'Francisco Vilar', 1, 45).
ligacao('Fabio Silva', 'Nancy Sodre', 2, 10).
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 31).
ligacao('Fabio Silva', 'Breno Granja', 3, 13).
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 47).
ligacao('Fabio Silva', 'Andreia Sousa', 3, 35).
ligacao('Fabio Silva', 'Deolinda Varzeas', 3, 40).
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 41).
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 8).
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, -3).
ligacao('Jonatas Granjeiro', 'Francisco Vilar', 1, 50).
ligacao('Jonatas Granjeiro', 'Nancy Sodre', 2, 38).
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 11).
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 46).
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 45).
ligacao('Jonatas Granjeiro', 'Andreia Sousa', 2, 30).
ligacao('Jonatas Granjeiro', 'Deolinda Varzeas', 2, 30).
ligacao('Marco Gravato', 'Rafael Soares', 3, 23).
ligacao('Marco Gravato', 'Dario Ornelas', 3, 12).
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 14).
ligacao('Marco Gravato', 'Francisco Vilar', 2, -3).
ligacao('Marco Gravato', 'Nancy Sodre', 2, 22).
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 0).
ligacao('Marco Gravato', 'Breno Granja', 3, 13).
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 26).
ligacao('Marco Gravato', 'Andreia Sousa', 2, 33).
ligacao('Marco Gravato', 'Deolinda Varzeas', 1, 44).
ligacao('Denzel Rufino', 'Rafael Soares', 2, 13).
ligacao('Denzel Rufino', 'Dario Ornelas', 2, -8).
ligacao('Denzel Rufino', 'Yuri Serralheiro', 3, 25).
ligacao('Denzel Rufino', 'Francisco Vilar', 1, 25).
ligacao('Denzel Rufino', 'Nancy Sodre', 2, 4).
ligacao('Denzel Rufino', 'Carlos Moutinho', 2, 29).
ligacao('Denzel Rufino', 'Breno Granja', 3, 15).
ligacao('Denzel Rufino', 'Rodrigo Sousa', 3, 45).
ligacao('Denzel Rufino', 'Andreia Sousa', 1, 30).
ligacao('Denzel Rufino', 'Deolinda Varzeas', 1, 27).
ligacao('Joao Bulhosa', 'Rafael Soares', 2, -1).
ligacao('Joao Bulhosa', 'Dario Ornelas', 1, 31).
ligacao('Joao Bulhosa', 'Yuri Serralheiro', 2, 3).
ligacao('Joao Bulhosa', 'Francisco Vilar', 1, 30).
ligacao('Joao Bulhosa', 'Nancy Sodre', 1, 17).
ligacao('Joao Bulhosa', 'Carlos Moutinho', 3, 38).
ligacao('Joao Bulhosa', 'Breno Granja', 1, -4).
ligacao('Joao Bulhosa', 'Rodrigo Sousa', 3, 45).
ligacao('Joao Bulhosa', 'Andreia Sousa', 3, 14).
ligacao('Joao Bulhosa', 'Deolinda Varzeas', 1, -1).
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 27).
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 32).
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 16).
ligacao('Carlos Moutinho', 'Denzel Rufino', 3, 35).
ligacao('Carlos Moutinho', 'Joao Bulhosa', 3, 13).
ligacao('Carlos Moutinho', 'Rui Mariske', 3, 48).
ligacao('Carlos Moutinho', 'Lisandra Batata', 1, 6).
ligacao('Carlos Moutinho', 'Alma Velasco', 3, 47).
ligacao('Carlos Moutinho', 'Zavier Salomao', 3, 16).
ligacao('Carlos Moutinho', 'Xavier Alcaide', 3, 41).
ligacao('Breno Granja', 'Fabio Silva', 3, -6).
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, -9).
ligacao('Breno Granja', 'Marco Gravato', 2, 46).
ligacao('Breno Granja', 'Denzel Rufino', 1, 46).
ligacao('Breno Granja', 'Joao Bulhosa', 2, 13).
ligacao('Breno Granja', 'Rui Mariske', 3, 20).
ligacao('Breno Granja', 'Lisandra Batata', 3, -1).
ligacao('Breno Granja', 'Alma Velasco', 1, 3).
ligacao('Breno Granja', 'Zavier Salomao', 3, 1).
ligacao('Breno Granja', 'Xavier Alcaide', 1, 23).
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 22).
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 11).
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 44).
ligacao('Rodrigo Sousa', 'Denzel Rufino', 2, 15).
ligacao('Rodrigo Sousa', 'Joao Bulhosa', 2, 38).
ligacao('Rodrigo Sousa', 'Rui Mariske', 3, -4).
ligacao('Rodrigo Sousa', 'Lisandra Batata', 2, 23).
ligacao('Rodrigo Sousa', 'Alma Velasco', 1, -3).
ligacao('Rodrigo Sousa', 'Zavier Salomao', 2, 1).
ligacao('Rodrigo Sousa', 'Xavier Alcaide', 1, -3).
ligacao('Andreia Sousa', 'Fabio Silva', 2, 22).
ligacao('Andreia Sousa', 'Jonatas Granjeiro', 3, 0).
ligacao('Andreia Sousa', 'Marco Gravato', 3, 35).
ligacao('Andreia Sousa', 'Denzel Rufino', 3, 8).
ligacao('Andreia Sousa', 'Joao Bulhosa', 1, 28).
ligacao('Andreia Sousa', 'Rui Mariske', 2, 20).
ligacao('Andreia Sousa', 'Lisandra Batata', 2, -6).
ligacao('Andreia Sousa', 'Alma Velasco', 1, -10).
ligacao('Andreia Sousa', 'Zavier Salomao', 1, 3).
ligacao('Andreia Sousa', 'Xavier Alcaide', 1, 46).
ligacao('Deolinda Varzeas', 'Fabio Silva', 2, 21).
ligacao('Deolinda Varzeas', 'Jonatas Granjeiro', 1, 18).
ligacao('Deolinda Varzeas', 'Marco Gravato', 1, -6).
ligacao('Deolinda Varzeas', 'Denzel Rufino', 2, 48).
ligacao('Deolinda Varzeas', 'Joao Bulhosa', 3, 27).
ligacao('Deolinda Varzeas', 'Rui Mariske', 3, 36).
ligacao('Deolinda Varzeas', 'Lisandra Batata', 3, 0).
ligacao('Deolinda Varzeas', 'Alma Velasco', 1, 18).
ligacao('Deolinda Varzeas', 'Zavier Salomao', 1, 45).
ligacao('Deolinda Varzeas', 'Xavier Alcaide', 1, 47).
ligacao('Rui Mariske', 'Carlos Moutinho', 1, -10).
ligacao('Rui Mariske', 'Breno Granja', 1, -7).
ligacao('Rui Mariske', 'Rodrigo Sousa', 3, 43).
ligacao('Rui Mariske', 'Andreia Sousa', 1, 7).
ligacao('Rui Mariske', 'Deolinda Varzeas', 2, 39).
ligacao('Rui Mariske', 'Rosa Machado', 1, 29).
ligacao('Rui Mariske', 'Guilherme Araujo', 3, 18).
ligacao('Rui Mariske', 'Joana Araujo', 1, 41).
ligacao('Rui Mariske', 'Alberto Estrela', 1, 47).
ligacao('Rui Mariske', 'Alberto Camara', 1, -7).
ligacao('Lisandra Batata', 'Carlos Moutinho', 3, 10).
ligacao('Lisandra Batata', 'Breno Granja', 2, 6).
ligacao('Lisandra Batata', 'Rodrigo Sousa', 3, 4).
ligacao('Lisandra Batata', 'Andreia Sousa', 2, 1).
ligacao('Lisandra Batata', 'Deolinda Varzeas', 2, 40).
ligacao('Lisandra Batata', 'Rosa Machado', 1, 27).
ligacao('Lisandra Batata', 'Guilherme Araujo', 2, 35).
ligacao('Lisandra Batata', 'Joana Araujo', 3, 32).
ligacao('Lisandra Batata', 'Alberto Estrela', 1, 26).
ligacao('Lisandra Batata', 'Alberto Camara', 1, 16).
ligacao('Alma Velasco', 'Carlos Moutinho', 1, 28).
ligacao('Alma Velasco', 'Breno Granja', 2, 34).
ligacao('Alma Velasco', 'Rodrigo Sousa', 3, 41).
ligacao('Alma Velasco', 'Andreia Sousa', 2, 46).
ligacao('Alma Velasco', 'Deolinda Varzeas', 2, 39).
ligacao('Alma Velasco', 'Rosa Machado', 3, 47).
ligacao('Alma Velasco', 'Guilherme Araujo', 2, 8).
ligacao('Alma Velasco', 'Joana Araujo', 2, 32).
ligacao('Alma Velasco', 'Alberto Estrela', 1, 3).
ligacao('Alma Velasco', 'Alberto Camara', 2, 11).
ligacao('Zavier Salomao', 'Carlos Moutinho', 1, 50).
ligacao('Zavier Salomao', 'Breno Granja', 3, 12).
ligacao('Zavier Salomao', 'Rodrigo Sousa', 1, 14).
ligacao('Zavier Salomao', 'Andreia Sousa', 3, -10).
ligacao('Zavier Salomao', 'Deolinda Varzeas', 3, 19).
ligacao('Zavier Salomao', 'Rosa Machado', 2, -4).
ligacao('Zavier Salomao', 'Guilherme Araujo', 3, 28).
ligacao('Zavier Salomao', 'Joana Araujo', 2, 31).
ligacao('Zavier Salomao', 'Alberto Estrela', 1, 30).
ligacao('Zavier Salomao', 'Alberto Camara', 1, 47).
ligacao('Xavier Alcaide', 'Carlos Moutinho', 3, 3).
ligacao('Xavier Alcaide', 'Breno Granja', 2, 33).
ligacao('Xavier Alcaide', 'Rodrigo Sousa', 3, 49).
ligacao('Xavier Alcaide', 'Andreia Sousa', 3, 32).
ligacao('Xavier Alcaide', 'Deolinda Varzeas', 1, -1).
ligacao('Xavier Alcaide', 'Rosa Machado', 1, 37).
ligacao('Xavier Alcaide', 'Guilherme Araujo', 3, 50).
ligacao('Xavier Alcaide', 'Joana Araujo', 2, 4).
ligacao('Xavier Alcaide', 'Alberto Estrela', 3, 40).
ligacao('Xavier Alcaide', 'Alberto Camara', 2, 42).
ligacao('Rosa Machado', 'Pedro Mourao', 2, 1).
ligacao('Rosa Machado', 'Rui Mariske', 3, 17).
ligacao('Rosa Machado', 'Lisandra Batata', 1, 27).
ligacao('Rosa Machado', 'Alma Velasco', 3, -6).
ligacao('Rosa Machado', 'Zavier Salomao', 1, 26).
ligacao('Rosa Machado', 'Xavier Alcaide', 2, 5).
ligacao('Guilherme Araujo', 'Pedro Mourao', 1, 10).
ligacao('Guilherme Araujo', 'Rui Mariske', 1, 24).
ligacao('Guilherme Araujo', 'Lisandra Batata', 2, 11).
ligacao('Guilherme Araujo', 'Alma Velasco', 1, -10).
ligacao('Guilherme Araujo', 'Zavier Salomao', 3, 5).
ligacao('Guilherme Araujo', 'Xavier Alcaide', 2, 30).
ligacao('Joana Araujo', 'Pedro Mourao', 1, 38).
ligacao('Joana Araujo', 'Rui Mariske', 2, 45).
ligacao('Joana Araujo', 'Lisandra Batata', 3, 7).
ligacao('Joana Araujo', 'Alma Velasco', 3, 35).
ligacao('Joana Araujo', 'Zavier Salomao', 1, 7).
ligacao('Joana Araujo', 'Xavier Alcaide', 1, 49).
ligacao('Alberto Estrela', 'Pedro Mourao', 2, 48).
ligacao('Alberto Estrela', 'Rui Mariske', 1, 47).
ligacao('Alberto Estrela', 'Lisandra Batata', 2, 34).
ligacao('Alberto Estrela', 'Alma Velasco', 3, -4).
ligacao('Alberto Estrela', 'Zavier Salomao', 2, -1).
ligacao('Alberto Estrela', 'Xavier Alcaide', 3, 22).
ligacao('Alberto Camara', 'Pedro Mourao', 3, 14).
ligacao('Alberto Camara', 'Rui Mariske', 3, -4).
ligacao('Alberto Camara', 'Lisandra Batata', 3, 3).
ligacao('Alberto Camara', 'Alma Velasco', 2, 22).
ligacao('Alberto Camara', 'Zavier Salomao', 2, 29).
ligacao('Alberto Camara', 'Xavier Alcaide', 1, 0).
