echo " "
echo ----------------------------------------------------
echo                1. Clean project
echo ----------------------------------------------------
dotnet clean MasterDataRedeSocial/MasterDataRedeSocial.sln 

echo " "
echo ----------------------------------------------------
echo                2. Build project
echo ----------------------------------------------------
dotnet build MasterDataRedeSocial/MasterDataRedeSocial.sln 

echo " "
echo ----------------------------------------------------
echo             3. Update migrations file
echo ----------------------------------------------------
dotnet ef database update  --project MasterDataRedeSocial/MasterDataRedeSocial.csproj 

echo " "
echo ----------------------------------------------------
echo                  4. Run Unit Tests
echo ----------------------------------------------------
dotnet test MasterDataRedeSocialTests/MasterDataRedeSocialTests.csproj 

echo " "
echo ----------------------------------------------------
echo 5. Kills any process running in the current port
echo ----------------------------------------------------
echo kill -9 $(lsof -ti:5000,5001)

echo " "
echo ----------------------------------------------------
echo               6. Run Project
echo ----------------------------------------------------
dotnet run --project MasterDataRedeSocial/
