#!/bin/bash

# Kills any process running in the current port
kill -9 $(lsof -ti:5000,5001)
#Run Project 
dotnet run --project MasterDataRedeSocial/
