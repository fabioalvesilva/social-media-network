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
ligacao('Sarah Silva', 'David Correia', 1, 24).
ligacao('Pedro Mourao', 'Telmo Catarino', 1, 35).
ligacao('Pedro Mourao', 'Guilherme Vital', 3, 45).
ligacao('Pedro Mourao', 'Rita Brandao', 3, 35).
ligacao('Pedro Mourao', 'Sara Homem', 2, 48).
ligacao('Pedro Mourao', 'Veronica Colaca', 1, -3).
ligacao('Pedro Mourao', 'Emilia Monforte', 2, 40).
ligacao('Rafael Soares', 'Sarah Silva', 1, 7).
ligacao('Rafael Soares', 'Fabio Silva', 2, 23).
ligacao('Rafael Soares', 'Jonatas Granjeiro', 2, 10).
ligacao('Rafael Soares', 'Marco Gravato', 1, 19).
ligacao('Rafael Soares', 'Denzel Rufino', 2, 8).
ligacao('Rafael Soares', 'Joao Bulhosa', 2, -6).
ligacao('Rafael Soares', 'Ana Camarinho', 1, 48).
ligacao('Dario Ornelas', 'Sarah Silva', 3, -8).
ligacao('Dario Ornelas', 'Fabio Silva', 2, 47).
ligacao('Dario Ornelas', 'Jonatas Granjeiro', 1, 28).
ligacao('Dario Ornelas', 'Marco Gravato', 2, 46).
ligacao('Dario Ornelas', 'Denzel Rufino', 3, 17).
ligacao('Dario Ornelas', 'Joao Bulhosa', 1, -10).
ligacao('Dario Ornelas', 'Ana Camarinho', 1, 19).
ligacao('Yuri Serralheiro', 'Sarah Silva', 2, -10).
ligacao('Yuri Serralheiro', 'Fabio Silva', 2, 27).
ligacao('Yuri Serralheiro', 'Jonatas Granjeiro', 1, -7).
ligacao('Yuri Serralheiro', 'Marco Gravato', 3, 0).
ligacao('Yuri Serralheiro', 'Denzel Rufino', 1, 38).
ligacao('Yuri Serralheiro', 'Joao Bulhosa', 2, 0).
ligacao('Yuri Serralheiro', 'Ana Camarinho', 1, 32).
ligacao('Francisco Vilar', 'Sarah Silva', 3, 16).
ligacao('Francisco Vilar', 'Fabio Silva', 2, -4).
ligacao('Francisco Vilar', 'Jonatas Granjeiro', 3, 9).
ligacao('Francisco Vilar', 'Marco Gravato', 3, -1).
ligacao('Francisco Vilar', 'Denzel Rufino', 1, 7).
ligacao('Francisco Vilar', 'Joao Bulhosa', 3, -9).
ligacao('Francisco Vilar', 'Ana Camarinho', 3, 31).
ligacao('Nancy Sodre', 'Sarah Silva', 2, 10).
ligacao('Nancy Sodre', 'Fabio Silva', 1, 41).
ligacao('Nancy Sodre', 'Jonatas Granjeiro', 3, 31).
ligacao('Nancy Sodre', 'Marco Gravato', 1, 44).
ligacao('Nancy Sodre', 'Denzel Rufino', 2, 1).
ligacao('Nancy Sodre', 'Joao Bulhosa', 1, 34).
ligacao('Nancy Sodre', 'Ana Camarinho', 3, 25).
ligacao('David Correia', 'Sarah Silva', 1, 28).
ligacao('David Correia', 'Fabio Silva', 1, 22).
ligacao('David Correia', 'Jonatas Granjeiro', 3, -6).
ligacao('David Correia', 'Marco Gravato', 2, 12).
ligacao('David Correia', 'Denzel Rufino', 3, 46).
ligacao('David Correia', 'Joao Bulhosa', 2, -8).
ligacao('David Correia', 'Ana Camarinho', 1, 32).
ligacao('Fabio Silva', 'Rafael Soares', 1, 5).
ligacao('Fabio Silva', 'Dario Ornelas', 2, 23).
ligacao('Fabio Silva', 'Yuri Serralheiro', 1, 24).
ligacao('Fabio Silva', 'Francisco Vilar', 1, 45).
ligacao('Fabio Silva', 'Nancy Sodre', 2, 10).
ligacao('Fabio Silva', 'David Correia', 3, 34).
ligacao('Fabio Silva', 'Carlos Moutinho', 1, 31).
ligacao('Fabio Silva', 'Breno Granja', 3, 13).
ligacao('Fabio Silva', 'Rodrigo Sousa', 3, 47).
ligacao('Fabio Silva', 'Andreia Sousa', 3, 35).
ligacao('Fabio Silva', 'Deolinda Varzeas', 3, 40).
ligacao('Fabio Silva', 'Beatriz Varzeas', 1, 20).
ligacao('Jonatas Granjeiro', 'Rafael Soares', 2, 41).
ligacao('Jonatas Granjeiro', 'Dario Ornelas', 1, 8).
ligacao('Jonatas Granjeiro', 'Yuri Serralheiro', 3, -3).
ligacao('Jonatas Granjeiro', 'Francisco Vilar', 1, 50).
ligacao('Jonatas Granjeiro', 'Nancy Sodre', 2, 38).
ligacao('Jonatas Granjeiro', 'David Correia', 2, 0).
ligacao('Jonatas Granjeiro', 'Carlos Moutinho', 1, 11).
ligacao('Jonatas Granjeiro', 'Breno Granja', 3, 46).
ligacao('Jonatas Granjeiro', 'Rodrigo Sousa', 1, 45).
ligacao('Jonatas Granjeiro', 'Andreia Sousa', 2, 30).
ligacao('Jonatas Granjeiro', 'Deolinda Varzeas', 2, 30).
ligacao('Jonatas Granjeiro', 'Beatriz Varzeas', 2, 15).
ligacao('Marco Gravato', 'Rafael Soares', 3, 23).
ligacao('Marco Gravato', 'Dario Ornelas', 3, 12).
ligacao('Marco Gravato', 'Yuri Serralheiro', 1, 14).
ligacao('Marco Gravato', 'Francisco Vilar', 2, -3).
ligacao('Marco Gravato', 'Nancy Sodre', 2, 22).
ligacao('Marco Gravato', 'David Correia', 2, 1).
ligacao('Marco Gravato', 'Carlos Moutinho', 3, 0).
ligacao('Marco Gravato', 'Breno Granja', 3, 13).
ligacao('Marco Gravato', 'Rodrigo Sousa', 1, 26).
ligacao('Marco Gravato', 'Andreia Sousa', 2, 33).
ligacao('Marco Gravato', 'Deolinda Varzeas', 1, 44).
ligacao('Marco Gravato', 'Beatriz Varzeas', 2, 24).
ligacao('Denzel Rufino', 'Rafael Soares', 2, 13).
ligacao('Denzel Rufino', 'Dario Ornelas', 2, -8).
ligacao('Denzel Rufino', 'Yuri Serralheiro', 3, 25).
ligacao('Denzel Rufino', 'Francisco Vilar', 1, 25).
ligacao('Denzel Rufino', 'Nancy Sodre', 2, 4).
ligacao('Denzel Rufino', 'David Correia', 3, 42).
ligacao('Denzel Rufino', 'Carlos Moutinho', 2, 29).
ligacao('Denzel Rufino', 'Breno Granja', 3, 15).
ligacao('Denzel Rufino', 'Rodrigo Sousa', 3, 45).
ligacao('Denzel Rufino', 'Andreia Sousa', 1, 30).
ligacao('Denzel Rufino', 'Deolinda Varzeas', 1, 27).
ligacao('Denzel Rufino', 'Beatriz Varzeas', 3, 11).
ligacao('Joao Bulhosa', 'Rafael Soares', 2, -1).
ligacao('Joao Bulhosa', 'Dario Ornelas', 1, 31).
ligacao('Joao Bulhosa', 'Yuri Serralheiro', 2, 3).
ligacao('Joao Bulhosa', 'Francisco Vilar', 1, 30).
ligacao('Joao Bulhosa', 'Nancy Sodre', 1, 17).
ligacao('Joao Bulhosa', 'David Correia', 2, 21).
ligacao('Joao Bulhosa', 'Carlos Moutinho', 3, 38).
ligacao('Joao Bulhosa', 'Breno Granja', 1, -4).
ligacao('Joao Bulhosa', 'Rodrigo Sousa', 3, 45).
ligacao('Joao Bulhosa', 'Andreia Sousa', 3, 14).
ligacao('Joao Bulhosa', 'Deolinda Varzeas', 1, -1).
ligacao('Joao Bulhosa', 'Beatriz Varzeas', 3, 18).
ligacao('Ana Camarinho', 'Rafael Soares', 1, 45).
ligacao('Ana Camarinho', 'Dario Ornelas', 1, -10).
ligacao('Ana Camarinho', 'Yuri Serralheiro', 2, 48).
ligacao('Ana Camarinho', 'Francisco Vilar', 3, 27).
ligacao('Ana Camarinho', 'Nancy Sodre', 1, 12).
ligacao('Ana Camarinho', 'David Correia', 1, 23).
ligacao('Ana Camarinho', 'Carlos Moutinho', 2, 5).
ligacao('Ana Camarinho', 'Breno Granja', 2, -3).
ligacao('Ana Camarinho', 'Rodrigo Sousa', 3, 28).
ligacao('Ana Camarinho', 'Andreia Sousa', 2, 9).
ligacao('Ana Camarinho', 'Deolinda Varzeas', 1, -10).
ligacao('Ana Camarinho', 'Beatriz Varzeas', 3, 5).
ligacao('Carlos Moutinho', 'Fabio Silva', 2, 27).
ligacao('Carlos Moutinho', 'Jonatas Granjeiro', 2, 32).
ligacao('Carlos Moutinho', 'Marco Gravato', 3, 16).
ligacao('Carlos Moutinho', 'Denzel Rufino', 3, 35).
ligacao('Carlos Moutinho', 'Joao Bulhosa', 3, 13).
ligacao('Carlos Moutinho', 'Ana Camarinho', 1, 44).
ligacao('Carlos Moutinho', 'Rui Mariske', 3, 48).
ligacao('Carlos Moutinho', 'Lisandra Batata', 1, 6).
ligacao('Carlos Moutinho', 'Alma Velasco', 3, 47).
ligacao('Carlos Moutinho', 'Zavier Salomao', 3, 16).
ligacao('Carlos Moutinho', 'Xavier Alcaide', 3, 41).
ligacao('Carlos Moutinho', 'Teresa Barbosa', 2, 43).
ligacao('Breno Granja', 'Fabio Silva', 3, -6).
ligacao('Breno Granja', 'Jonatas Granjeiro', 1, -9).
ligacao('Breno Granja', 'Marco Gravato', 2, 46).
ligacao('Breno Granja', 'Denzel Rufino', 1, 46).
ligacao('Breno Granja', 'Joao Bulhosa', 2, 13).
ligacao('Breno Granja', 'Ana Camarinho', 1, 31).
ligacao('Breno Granja', 'Rui Mariske', 3, 20).
ligacao('Breno Granja', 'Lisandra Batata', 3, -1).
ligacao('Breno Granja', 'Alma Velasco', 1, 3).
ligacao('Breno Granja', 'Zavier Salomao', 3, 1).
ligacao('Breno Granja', 'Xavier Alcaide', 1, 23).
ligacao('Breno Granja', 'Teresa Barbosa', 2, -8).
ligacao('Rodrigo Sousa', 'Fabio Silva', 3, 22).
ligacao('Rodrigo Sousa', 'Jonatas Granjeiro', 3, 11).
ligacao('Rodrigo Sousa', 'Marco Gravato', 1, 44).
ligacao('Rodrigo Sousa', 'Denzel Rufino', 2, 15).
ligacao('Rodrigo Sousa', 'Joao Bulhosa', 2, 38).
ligacao('Rodrigo Sousa', 'Ana Camarinho', 2, 14).
ligacao('Rodrigo Sousa', 'Rui Mariske', 3, -4).
ligacao('Rodrigo Sousa', 'Lisandra Batata', 2, 23).
ligacao('Rodrigo Sousa', 'Alma Velasco', 1, -3).
ligacao('Rodrigo Sousa', 'Zavier Salomao', 2, 1).
ligacao('Rodrigo Sousa', 'Xavier Alcaide', 1, -3).
ligacao('Rodrigo Sousa', 'Teresa Barbosa', 2, 47).
ligacao('Andreia Sousa', 'Fabio Silva', 2, 22).
ligacao('Andreia Sousa', 'Jonatas Granjeiro', 3, 0).
ligacao('Andreia Sousa', 'Marco Gravato', 3, 35).
ligacao('Andreia Sousa', 'Denzel Rufino', 3, 8).
ligacao('Andreia Sousa', 'Joao Bulhosa', 1, 28).
ligacao('Andreia Sousa', 'Ana Camarinho', 1, 4).
ligacao('Andreia Sousa', 'Rui Mariske', 2, 20).
ligacao('Andreia Sousa', 'Lisandra Batata', 2, -6).
ligacao('Andreia Sousa', 'Alma Velasco', 1, -10).
ligacao('Andreia Sousa', 'Zavier Salomao', 1, 3).
ligacao('Andreia Sousa', 'Xavier Alcaide', 1, 46).
ligacao('Andreia Sousa', 'Teresa Barbosa', 2, 5).
ligacao('Deolinda Varzeas', 'Fabio Silva', 2, 21).
ligacao('Deolinda Varzeas', 'Jonatas Granjeiro', 1, 18).
ligacao('Deolinda Varzeas', 'Marco Gravato', 1, -6).
ligacao('Deolinda Varzeas', 'Denzel Rufino', 2, 48).
ligacao('Deolinda Varzeas', 'Joao Bulhosa', 3, 27).
ligacao('Deolinda Varzeas', 'Ana Camarinho', 2, -8).
ligacao('Deolinda Varzeas', 'Rui Mariske', 3, 36).
ligacao('Deolinda Varzeas', 'Lisandra Batata', 3, 0).
ligacao('Deolinda Varzeas', 'Alma Velasco', 1, 18).
ligacao('Deolinda Varzeas', 'Zavier Salomao', 1, 45).
ligacao('Deolinda Varzeas', 'Xavier Alcaide', 1, 47).
ligacao('Deolinda Varzeas', 'Teresa Barbosa', 1, -10).
ligacao('Beatriz Varzeas', 'Fabio Silva', 3, 9).
ligacao('Beatriz Varzeas', 'Jonatas Granjeiro', 3, 19).
ligacao('Beatriz Varzeas', 'Marco Gravato', 2, 5).
ligacao('Beatriz Varzeas', 'Denzel Rufino', 2, 19).
ligacao('Beatriz Varzeas', 'Joao Bulhosa', 2, -4).
ligacao('Beatriz Varzeas', 'Ana Camarinho', 3, 38).
ligacao('Beatriz Varzeas', 'Rui Mariske', 3, 17).
ligacao('Beatriz Varzeas', 'Lisandra Batata', 1, 49).
ligacao('Beatriz Varzeas', 'Alma Velasco', 2, 12).
ligacao('Beatriz Varzeas', 'Zavier Salomao', 3, 17).
ligacao('Beatriz Varzeas', 'Xavier Alcaide', 2, 47).
ligacao('Beatriz Varzeas', 'Teresa Barbosa', 3, 50).
ligacao('Rui Mariske', 'Carlos Moutinho', 1, -10).
ligacao('Rui Mariske', 'Breno Granja', 1, -7).
ligacao('Rui Mariske', 'Rodrigo Sousa', 3, 43).
ligacao('Rui Mariske', 'Andreia Sousa', 1, 7).
ligacao('Rui Mariske', 'Deolinda Varzeas', 2, 39).
ligacao('Rui Mariske', 'Beatriz Varzeas', 3, 15).
ligacao('Rui Mariske', 'Rosa Machado', 1, 29).
ligacao('Rui Mariske', 'Guilherme Araujo', 3, 18).
ligacao('Rui Mariske', 'Joana Araujo', 1, 41).
ligacao('Rui Mariske', 'Alberto Estrela', 1, 47).
ligacao('Rui Mariske', 'Alberto Camara', 1, -7).
ligacao('Rui Mariske', 'Diana Chaves', 3, 9).
ligacao('Lisandra Batata', 'Carlos Moutinho', 3, 10).
ligacao('Lisandra Batata', 'Breno Granja', 2, 6).
ligacao('Lisandra Batata', 'Rodrigo Sousa', 3, 4).
ligacao('Lisandra Batata', 'Andreia Sousa', 2, 1).
ligacao('Lisandra Batata', 'Deolinda Varzeas', 2, 40).
ligacao('Lisandra Batata', 'Beatriz Varzeas', 1, 47).
ligacao('Lisandra Batata', 'Rosa Machado', 1, 27).
ligacao('Lisandra Batata', 'Guilherme Araujo', 2, 35).
ligacao('Lisandra Batata', 'Joana Araujo', 3, 32).
ligacao('Lisandra Batata', 'Alberto Estrela', 1, 26).
ligacao('Lisandra Batata', 'Alberto Camara', 1, 16).
ligacao('Lisandra Batata', 'Diana Chaves', 3, 7).
ligacao('Alma Velasco', 'Carlos Moutinho', 1, 28).
ligacao('Alma Velasco', 'Breno Granja', 2, 34).
ligacao('Alma Velasco', 'Rodrigo Sousa', 3, 41).
ligacao('Alma Velasco', 'Andreia Sousa', 2, 46).
ligacao('Alma Velasco', 'Deolinda Varzeas', 2, 39).
ligacao('Alma Velasco', 'Beatriz Varzeas', 3, -7).
ligacao('Alma Velasco', 'Rosa Machado', 3, 47).
ligacao('Alma Velasco', 'Guilherme Araujo', 2, 8).
ligacao('Alma Velasco', 'Joana Araujo', 2, 32).
ligacao('Alma Velasco', 'Alberto Estrela', 1, 3).
ligacao('Alma Velasco', 'Alberto Camara', 2, 11).
ligacao('Alma Velasco', 'Diana Chaves', 3, 12).
ligacao('Zavier Salomao', 'Carlos Moutinho', 1, 50).
ligacao('Zavier Salomao', 'Breno Granja', 3, 12).
ligacao('Zavier Salomao', 'Rodrigo Sousa', 1, 14).
ligacao('Zavier Salomao', 'Andreia Sousa', 3, -10).
ligacao('Zavier Salomao', 'Deolinda Varzeas', 3, 19).
ligacao('Zavier Salomao', 'Beatriz Varzeas', 3, 25).
ligacao('Zavier Salomao', 'Rosa Machado', 2, -4).
ligacao('Zavier Salomao', 'Guilherme Araujo', 3, 28).
ligacao('Zavier Salomao', 'Joana Araujo', 2, 31).
ligacao('Zavier Salomao', 'Alberto Estrela', 1, 30).
ligacao('Zavier Salomao', 'Alberto Camara', 1, 47).
ligacao('Zavier Salomao', 'Diana Chaves', 2, 30).
ligacao('Xavier Alcaide', 'Carlos Moutinho', 3, 3).
ligacao('Xavier Alcaide', 'Breno Granja', 2, 33).
ligacao('Xavier Alcaide', 'Rodrigo Sousa', 3, 49).
ligacao('Xavier Alcaide', 'Andreia Sousa', 3, 32).
ligacao('Xavier Alcaide', 'Deolinda Varzeas', 1, -1).
ligacao('Xavier Alcaide', 'Beatriz Varzeas', 3, -3).
ligacao('Xavier Alcaide', 'Rosa Machado', 1, 37).
ligacao('Xavier Alcaide', 'Guilherme Araujo', 3, 50).
ligacao('Xavier Alcaide', 'Joana Araujo', 2, 4).
ligacao('Xavier Alcaide', 'Alberto Estrela', 3, 40).
ligacao('Xavier Alcaide', 'Alberto Camara', 2, 42).
ligacao('Xavier Alcaide', 'Diana Chaves', 3, 3).
ligacao('Teresa Barbosa', 'Carlos Moutinho', 3, 9).
ligacao('Teresa Barbosa', 'Breno Granja', 2, 39).
ligacao('Teresa Barbosa', 'Rodrigo Sousa', 1, -4).
ligacao('Teresa Barbosa', 'Andreia Sousa', 1, 33).
ligacao('Teresa Barbosa', 'Deolinda Varzeas', 3, 1).
ligacao('Teresa Barbosa', 'Beatriz Varzeas', 1, 12).
ligacao('Teresa Barbosa', 'Rosa Machado', 1, 33).
ligacao('Teresa Barbosa', 'Guilherme Araujo', 3, 5).
ligacao('Teresa Barbosa', 'Joana Araujo', 2, 42).
ligacao('Teresa Barbosa', 'Alberto Estrela', 3, 48).
ligacao('Teresa Barbosa', 'Alberto Camara', 2, 34).
ligacao('Teresa Barbosa', 'Diana Chaves', 1, 33).
ligacao('Rosa Machado', 'Rui Mariske', 3, 17).
ligacao('Rosa Machado', 'Lisandra Batata', 1, 27).
ligacao('Rosa Machado', 'Alma Velasco', 3, -6).
ligacao('Rosa Machado', 'Zavier Salomao', 1, 26).
ligacao('Rosa Machado', 'Xavier Alcaide', 2, 5).
ligacao('Rosa Machado', 'Teresa Barbosa', 2, 9).
ligacao('Rosa Machado', 'Telmo Catarino', 2, 14).
ligacao('Rosa Machado', 'Guilherme Vital', 1, 14).
ligacao('Rosa Machado', 'Rita Brandao', 2, 12).
ligacao('Rosa Machado', 'Sara Homem', 1, 0).
ligacao('Rosa Machado', 'Veronica Colaca', 1, 45).
ligacao('Rosa Machado', 'Emilia Monforte', 1, 10).
ligacao('Guilherme Araujo', 'Rui Mariske', 1, 24).
ligacao('Guilherme Araujo', 'Lisandra Batata', 2, 11).
ligacao('Guilherme Araujo', 'Alma Velasco', 1, -10).
ligacao('Guilherme Araujo', 'Zavier Salomao', 3, 5).
ligacao('Guilherme Araujo', 'Xavier Alcaide', 2, 30).
ligacao('Guilherme Araujo', 'Teresa Barbosa', 1, 40).
ligacao('Guilherme Araujo', 'Telmo Catarino', 3, 8).
ligacao('Guilherme Araujo', 'Guilherme Vital', 3, 45).
ligacao('Guilherme Araujo', 'Rita Brandao', 2, 12).
ligacao('Guilherme Araujo', 'Sara Homem', 3, 48).
ligacao('Guilherme Araujo', 'Veronica Colaca', 2, 28).
ligacao('Guilherme Araujo', 'Emilia Monforte', 1, 12).
ligacao('Joana Araujo', 'Rui Mariske', 2, 45).
ligacao('Joana Araujo', 'Lisandra Batata', 3, 7).
ligacao('Joana Araujo', 'Alma Velasco', 3, 35).
ligacao('Joana Araujo', 'Zavier Salomao', 1, 7).
ligacao('Joana Araujo', 'Xavier Alcaide', 1, 49).
ligacao('Joana Araujo', 'Teresa Barbosa', 2, 0).
ligacao('Joana Araujo', 'Telmo Catarino', 1, 21).
ligacao('Joana Araujo', 'Guilherme Vital', 3, 11).
ligacao('Joana Araujo', 'Rita Brandao', 2, 27).
ligacao('Joana Araujo', 'Sara Homem', 3, -5).
ligacao('Joana Araujo', 'Veronica Colaca', 3, -10).
ligacao('Joana Araujo', 'Emilia Monforte', 3, -9).
ligacao('Alberto Estrela', 'Rui Mariske', 1, 47).
ligacao('Alberto Estrela', 'Lisandra Batata', 2, 34).
ligacao('Alberto Estrela', 'Alma Velasco', 3, -4).
ligacao('Alberto Estrela', 'Zavier Salomao', 2, -1).
ligacao('Alberto Estrela', 'Xavier Alcaide', 3, 22).
ligacao('Alberto Estrela', 'Teresa Barbosa', 2, 30).
ligacao('Alberto Estrela', 'Telmo Catarino', 2, 13).
ligacao('Alberto Estrela', 'Guilherme Vital', 3, 35).
ligacao('Alberto Estrela', 'Rita Brandao', 2, 31).
ligacao('Alberto Estrela', 'Sara Homem', 1, 20).
ligacao('Alberto Estrela', 'Veronica Colaca', 3, -4).
ligacao('Alberto Estrela', 'Emilia Monforte', 2, 50).
ligacao('Alberto Camara', 'Rui Mariske', 3, -4).
ligacao('Alberto Camara', 'Lisandra Batata', 3, 3).
ligacao('Alberto Camara', 'Alma Velasco', 2, 22).
ligacao('Alberto Camara', 'Zavier Salomao', 2, 29).
ligacao('Alberto Camara', 'Xavier Alcaide', 1, 0).
ligacao('Alberto Camara', 'Teresa Barbosa', 2, 11).
ligacao('Alberto Camara', 'Telmo Catarino', 3, 3).
ligacao('Alberto Camara', 'Guilherme Vital', 1, 35).
ligacao('Alberto Camara', 'Rita Brandao', 2, -4).
ligacao('Alberto Camara', 'Sara Homem', 2, -6).
ligacao('Alberto Camara', 'Veronica Colaca', 3, 25).
ligacao('Alberto Camara', 'Emilia Monforte', 1, 42).
ligacao('Diana Chaves', 'Rui Mariske', 2, 46).
ligacao('Diana Chaves', 'Lisandra Batata', 3, 11).
ligacao('Diana Chaves', 'Alma Velasco', 1, 30).
ligacao('Diana Chaves', 'Zavier Salomao', 3, 18).
ligacao('Diana Chaves', 'Xavier Alcaide', 3, -5).
ligacao('Diana Chaves', 'Teresa Barbosa', 2, 7).
ligacao('Diana Chaves', 'Telmo Catarino', 2, 0).
ligacao('Diana Chaves', 'Guilherme Vital', 1, 7).
ligacao('Diana Chaves', 'Rita Brandao', 3, -7).
ligacao('Diana Chaves', 'Sara Homem', 2, 5).
ligacao('Diana Chaves', 'Veronica Colaca', 3, 21).
ligacao('Diana Chaves', 'Emilia Monforte', 2, -9).
ligacao('Telmo Catarino', 'Pedro Mourao', 1, 45).
ligacao('Telmo Catarino', 'Rosa Machado', 3, 2).
ligacao('Telmo Catarino', 'Guilherme Araujo', 1, -9).
ligacao('Telmo Catarino', 'Joana Araujo', 2, 45).
ligacao('Telmo Catarino', 'Alberto Estrela', 3, 29).
ligacao('Telmo Catarino', 'Alberto Camara', 1, 12).
ligacao('Telmo Catarino', 'Diana Chaves', 3, 34).
ligacao('Guilherme Vital', 'Pedro Mourao', 1, 15).
ligacao('Guilherme Vital', 'Rosa Machado', 3, 41).
ligacao('Guilherme Vital', 'Guilherme Araujo', 3, -4).
ligacao('Guilherme Vital', 'Joana Araujo', 1, 31).
ligacao('Guilherme Vital', 'Alberto Estrela', 3, 40).
ligacao('Guilherme Vital', 'Alberto Camara', 3, 29).
ligacao('Guilherme Vital', 'Diana Chaves', 1, 30).
ligacao('Rita Brandao', 'Pedro Mourao', 1, 25).
ligacao('Rita Brandao', 'Rosa Machado', 3, 42).
ligacao('Rita Brandao', 'Guilherme Araujo', 2, 30).
ligacao('Rita Brandao', 'Joana Araujo', 3, 28).
ligacao('Rita Brandao', 'Alberto Estrela', 1, -6).
ligacao('Rita Brandao', 'Alberto Camara', 1, 33).
ligacao('Rita Brandao', 'Diana Chaves', 2, 26).
ligacao('Sara Homem', 'Pedro Mourao', 1, 41).
ligacao('Sara Homem', 'Rosa Machado', 2, 38).
ligacao('Sara Homem', 'Guilherme Araujo', 2, 19).
ligacao('Sara Homem', 'Joana Araujo', 2, 3).
ligacao('Sara Homem', 'Alberto Estrela', 1, 0).
ligacao('Sara Homem', 'Alberto Camara', 2, 38).
ligacao('Sara Homem', 'Diana Chaves', 3, 16).
ligacao('Veronica Colaca', 'Pedro Mourao', 1, 41).
ligacao('Veronica Colaca', 'Rosa Machado', 3, 5).
ligacao('Veronica Colaca', 'Guilherme Araujo', 3, 45).
ligacao('Veronica Colaca', 'Joana Araujo', 1, 5).
ligacao('Veronica Colaca', 'Alberto Estrela', 3, 41).
ligacao('Veronica Colaca', 'Alberto Camara', 2, -10).
ligacao('Veronica Colaca', 'Diana Chaves', 3, 37).
ligacao('Emilia Monforte', 'Pedro Mourao', 2, -5).
ligacao('Emilia Monforte', 'Rosa Machado', 3, 15).
ligacao('Emilia Monforte', 'Guilherme Araujo', 1, -4).
ligacao('Emilia Monforte', 'Joana Araujo', 2, -8).
ligacao('Emilia Monforte', 'Alberto Estrela', 2, 43).
ligacao('Emilia Monforte', 'Alberto Camara', 2, 33).
ligacao('Emilia Monforte', 'Diana Chaves', 2, 36).
