#!/bin/bash

# Kills any process running in the current port
kill -9 $(lsof -ti:4200)
#Run Project 
cd ./SPA
ng serve --open
