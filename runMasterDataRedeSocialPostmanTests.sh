#!/bin/bash

#Run Project 
newman run --silent "PostmanTests/Collections/SocialNetwork.postman_collection.json" -e "PostmanTests/Environments/SN_Local.postman_environment.json"