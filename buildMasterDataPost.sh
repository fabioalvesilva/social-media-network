#!/bin/bash
#1
# Kills any process running in the current port
kill -9 $(lsof -ti:3000)
#2
#Run Project 
#swipl -f ./Planeamento/SPRINT_C/Webservice/Webservice.pl -g "server(8000)."

#swipl -f ./Planeamento/SPRINT\ B/Webservice/Webservice.pl -g "server(8000)."
cd MasterDataPost
npm run start
