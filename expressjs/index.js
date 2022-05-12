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
function executeSSHCommand(_os, _serverHost, _serverUser, _serverPass, _serverCommand, _game, _name, _savedfileurl, _address, _port) {
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

				//reinitializare the json result
				var jsonResult = {
					"Game": _game,
					"Name": _name,
					"SavedFileURL": _savedfileurl,
					"Address": _address,
					"Port": _port,
					"Description": _game,
					"IsOnline": false,
					"Version": "N/A",
				}

				if (_os == 'Windows'){
					if (result == -1) {
						return;
					}
		
					jsonResult = {
						"Game": _game,
						"Name": _name,
						"SavedFileURL": _savedfileurl,
						"Address": _address,
						"Port": _port,
						"Description": _game,
						"IsOnline": result.length > 2 ? true : false,
						"Version": "N/A",
					}
				}
				else if (_os == 'Linux'){
					if (result == -1) {
						return;
					}
		
					result.forEach(function (currentValue, index, arr) {
						if (/Internet IP/g.test(currentValue)) {
							serverIPString = currentValue
						}
						if (/Status/g.test(currentValue)) {
							serverStatusString = currentValue
						}
						//Appears in LinuxGSM, Satisfactory uses the Server IP and not the Internet IP
						if (_game == 'Satisfactory') {
							if (/Server IP/g.test(currentValue)) {
								serverIPString = currentValue
							}
						}
					});
		
					var serverIPArray = serverIPString.split(':');
					var serverStatusArray = serverStatusString.split(':');
		
					jsonResult = {
						"Game": _game,
						"Name": _name,
						"SavedFileURL": _savedfileurl,
						"Address": serverIPArray.length > 1 ? serverIPArray[1].trim() : "N/A",
						"Port": serverIPArray.length > 2 ? serverIPArray[2].trim() : "N/A",
						"Description": _game,
						"IsOnline": serverStatusArray[1].trim() == 'STARTED' ? true : false,
						"Version": "N/A",
					}
				}

				resolve(jsonResult);
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

app.get('/api/gameservers', async (req,res) => {
	var promiseArray = [];

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

		promiseArray.push(executeSSHCommand(os, serverhost, serverUser, serverPass, servercommand, game, name, savedfileurl, address, port))
	}

	Promise.all(promiseArray).then((result) => {
		//console.log(result);
		res.json(result);

	})
	.catch((e) => {
		//console.log("Errors: " + e);
		res.json('{"Error": -1}');
	})


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
