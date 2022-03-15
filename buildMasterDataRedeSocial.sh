#!/bin/bash

#1
#Clean project
dotnet clean MasterDataRedeSocial/MasterDataRedeSocial.sln 
#2
#build project
dotnet build MasterDataRedeSocial/MasterDataRedeSocial.sln 
#3
#update migrations file
dotnet ef database update  --project MasterDataRedeSocial/MasterDataRedeSocial.csproj 
#4
# Run Unit Tests 
dotnet test MasterDataRedeSocialTests/MasterDataRedeSocialTests.csproj 
#5
# Kills any process running in the current port
kill -9 $(lsof -ti:5000,5001)
#Run Project 
dotnet run --project MasterDataRedeSocial/
