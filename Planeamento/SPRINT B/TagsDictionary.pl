%------------------
% Tags Dictionary
%------------------

:-dynamic sinonym/3.

% Exemplo: 'travel' tem como sinonimos 'tour' e 'trip'



%TRAVEL

sinonym('travel', ['tour', 'trip'],'travel').
sinonym('tour', ['travel', 'trip'],'travel').
sinonym('trip', ['tour', 'travel'],'travel').



%MUSIC SECTION

sinonym('music', ['rock', 'pop', 'folk', 'rap'],'music').
sinonym('rock', ['music', 'pop', 'folk', 'rap'],'music').
sinonym('folk', ['music', 'pop', 'rock', 'rap'],'music').
sinonym('rap', ['music', 'pop', 'folk', 'rock'],'music').



%SPORTS SECTION

sinonym('sport', ['football', 'surf', 'baseball', 'handball', 'swim', 'run'],'sport').
sinonym('football', ['sport', 'surf', 'baseball', 'handball', 'swim', 'run'],'sport').
sinonym('surf', ['football', 'sport', 'baseball', 'handball', 'swim', 'run'],'sport').
sinonym('baseball', ['football', 'surf', 'sport', 'handball', 'swim', 'run'],'sport').
sinonym('handball', ['football', 'surf', 'baseball', 'sport', 'swim', 'run'],'sport').
sinonym('swim', ['football', 'surf', 'baseball', 'handball', 'sport', 'run'],'sport').
sinonym('run', ['football', 'surf', 'baseball', 'handball', 'swim', 'sport'],'sport').



%VOLUNTEERING SECTION

sinonym('volunteering', [],'volunteering').



%MEDITATION SECTION

sinonym('meditation', ['introspection'],'meditation').
sinonym('introspection', ['meditation'],'meditation').



%COOCKING SECTION

sinonym('cooking', ['baking'],'cooking').
sinonym('baking', ['cooking'],'cooking').


%VIDEO GAME SECTION

sinonym('video game', [],'video game').


%PHOTOGRAPHY SECTION

sinonym('photography', ['photo'],'photography').
sinonym('photo', ['photography'],'photography').


%NATURE SECTION

sinonym('nature', ['outdoors'],'nature').
sinonym('outdoors', ['nature'],'nature').






















