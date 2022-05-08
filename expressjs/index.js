const express = require('express');
const exec = require('ssh-exec');
const app = express();
const fetch = require("node-fetch");

//Prod Environment
require('dotenv').config({path:'/mnt/Media/Websites/express-noredlace/.env'});
var config = require('/mnt/Media/Websites/express-noredlace/config.json');

//Local Dev Environment
//require('dotenv').config({ path: "D:/GitFork/noredlace_server_monitor/expressjs/.env" });
//var config = require("D:/GitFork/noredlace_server_monitor/expressjs/config.json");

const serverUser = config.ServerCreds.UserName
const serverPass = config.ServerCreds.Password

//Function to support SSH commands to Server
function executeSSHCommand(_serverHost, _serverUser, _serverPass, _serverCommand) {
	try {
		return new Promise((resolve, reject) => {
			exec(_serverCommand, {
				user: _serverUser,
				password: _serverPass,
				host: _serverHost,
			}, (err, stdout) => {
				if (err) {
					return reject(err)
				}

				//replace all ANSI escape codes
				result = stdout.toString().replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, '');
				//return each line to an array
				result = result.split('\n');

				resolve(result)
			})
		})
	}
	catch {
		return -1;
	}
}

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/api/gameservers', async (req, res) => {
	var result = '[';
	for (var i = 0; i < config.Games.length; i++) {
		//Grab the relevant Info off the Config Json for the Game
		const os = config.Games[i].OS;
		const game = config.Games[i].Game;
		const name = config.Games[i].Name;
		const servercommand = config.Games[i].ServerCommand;
		const serverhost = config.Games[i].ServerHost
		const savedfileurl = config.Games[i].SavedFileURL;
		const address = config.Games[i].Address;
		const port = config.Games[i].Port;
		const description = config.Games[i].Description;
		const isonline = config.Games[i].IsOnline;
		const version = config.Games[i].Version;

		var results;
		var serverIPString;
		var serverStatusString;

		//Reset the Json Result on Loop
		var jsonResult = {
			"Game": game,
			"Name": name,
			"SavedFileURL": savedfileurl,
			"Address": address,
			"Port": port,
			"Description": game,
			"IsOnline": false,
			"Version": "N/A",
		}

		//console.log("Game: " + game + ", Index: " + i + ", Length: " + config.Games.length);

		/*
		Run the SSH Command on Windows for the LinuxGSM Details Page
		Grab the ServerIP and ServerStatus by parsing the STDOut Page
		*/
		if (os == 'Linux') {
			results = await executeSSHCommand(serverhost, serverUser, serverPass, servercommand);
			if (results == -1) {
				continue;
			}

			results.forEach(function (currentValue, index, arr) {
				if (/Internet IP/g.test(currentValue)) {
					serverIPString = currentValue
				}
				if (/Status/g.test(currentValue)) {
					serverStatusString = currentValue
				}
				//Appears in LinuxGSM, Satisfactory uses the Server IP and not the Internet IP
				if (game == 'Satisfactory') {
					if (/Server IP/g.test(currentValue)) {
						serverIPString = currentValue
					}
				}
			});

			var serverIPArray = serverIPString.split(':');
			var serverStatusArray = serverStatusString.split(':');

			jsonResult = {
				"Game": game,
				"Name": name,
				"SavedFileURL": savedfileurl,
				"Address": serverIPArray.length > 1 ? serverIPArray[1].trim() : "N/A",
				"Port": serverIPArray.length > 2 ? serverIPArray[2].trim() : "N/A",
				"Description": game,
				"IsOnline": serverStatusArray[1].trim() == 'STARTED' ? true : false,
				"Version": "N/A",
			}
		}


		/*
		Run the SSH Command on Windows for the .exe process
		Should be a list of current running Tasks/Processes with a matching Name
		If we have more than 2 results, then our process is running
		*/
		else if (os == 'Windows') {
			results = await executeSSHCommand(serverhost, serverUser, serverPass, servercommand);

			if (results == -1) {
				continue;
			}

			jsonResult = {
				"Game": game,
				"Name": name,
				"SavedFileURL": savedfileurl,
				"Address": address,
				"Port": port,
				"Description": game,
				"IsOnline": results.length > 2 ? true : false,
				"Version": "N/A",
			}
		}

		//Add Stringified Json Object from Above Steps 
		result += JSON.stringify(jsonResult);

		//Add Comma for an Array of JSON objects. Only if this isn't the last element
		if (i != config.Games.length - 1) {
			result += ',';
		}

	}
	result += ']';
	//res.json(jsonResults);
	res.json(JSON.parse(result));

});

app.get('/api/servers', (req, res) => {
	res.send(['Minecraft', 'Terraria', 'Dont Starve Together', '7 Days To Die', 'Empyrion Server', 'Valheim Server', 'The Forest']);
});

app.get('/api/jokes/jod', async (req, res) => {
	const api_url = 'https://api.jokes.one/jod';
	const fetch_response = await fetch(api_url);
	const json = await fetch_response.json();
	res.json(json);
});

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("listening on port 3000..."));
