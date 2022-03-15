#!/bin/bash

#1
#Clean project
#2
#build project
#3
#update migrations file
#4
# Run Unit Tests 
#dotnet test SPATests/SPA/SPATests.csproj 
#5
# Kills any process running in the current port
kill -9 $(lsof -ti:4200)
#run unit tests
ng test
#Run Project 
cd ./SPA
ng serve --open
