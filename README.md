noredlace_server_monitor

Simple Website I made to have my Game Servers I run all consolidated for Status Checks.

UX written in Angular with Backend Server in expressjs/nodejs for API Calls.

requires a .env file for anything with API Keys. It should be placed in /noredlace/expressjs_server.

The .env file would look like 
API_KEY_TERRARIA = blahblahblah
API_KEY_SDTD = blahblahblah

Then you would pass those in the index.js of the index.js file in the expressjs folder. Then it can handle any API calls server side and return it back to client without exposing API Keys.

This is a heavy WIP and I was trying to get the hang of deploying an Angular Front End/Node JS backend website that I can selfhost on my own Server.

URL: https://noredlace.com
