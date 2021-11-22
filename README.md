# noredlace_server_monitor | https://noredlace.com

Simple Website I made to have my Game Servers I run all consolidated for Status Checks.

UX written in Angular with Backend Server in expressjs/nodejs for API Calls.

## DEPRECATED SOON TO BE REMOVED
requires a .env file for anything with API Keys. It should be placed in /noredlace/expressjs_server.

The .env file would look like 
API_KEY_TERRARIA = blahblahblah
API_KEY_SDTD = blahblahblah

Then you would pass those in the index.js of the index.js file in the expressjs folder. Then it can handle any API calls server side and return it back to client without exposing API Keys.

## Config File for Sites Angular
Requires a config.json

Below is an example of the Json Model in the Config (Array of Json)

```
{
  "Game": "",
  "Name": "",
  "URL": "",
  "APIKey": "",
  "SavedFileURL": "",
  "Address": "",
  "Port": "",
  "Description": "",
  "IsOnline": "",
  "Version": ""
}
```

Values are set to be able to be the following
1. Direct Name to be Used - Useful for Static Information
2. N/A - Useful if the API being used does not return a relevant value for the field
3. Key Name of the Server API being used - Useful to transform Individual API Values into a Specific Key to the Model 

### This is a heavy WIP and I was trying to get the hang of deploying an Angular Front End/Node JS backend website that I can selfhost on my own Server.


