const express = require('express');
const app = express();
const fetch = require("node-fetch");
const fs = require('fs')

//Prod Environment
//require('dotenv').config({path:'/mnt/Media/Websites/express-noredlace/.env'});
//var config = require('/mnt/Media/Websites/express-noredlace/config.json');

//Local Dev Environment
require('dotenv').config({ path: "D:/GitFork/noredlace_server_monitor/expressjs/.env" });
var config = require("D:/GitFork/noredlace_server_monitor/expressjs/config.json");

const serverUser = config.ServerCreds.UserName
const serverPass = config.ServerCreds.Password

//Function to support SSH commands to Server

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

app.get('/api/gameservers', async (req,res) => {
		res.json('{"Error": -1}');
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

app.get('/api/wakfu/professions', async (req,res) => {

	try {
		professionList = []

		var professionsFolder = './WakfuRecipes/'
		fs.readdirSync(professionsFolder).forEach(file => {
			professionObject = new Object();
			professionObject.profession = file.replace('Recipes.json','');
			professionObject.modifiedDate = fs.statSync(professionsFolder+file).ctime.toDateString();
			professionList.push(professionObject);
		  });

		res.json(professionList);
	} catch (error) {
		res.json('{"Error": "' + error + '"}');
	}

});

app.get('/api/wakfu/profession/:ProfessionName', async (req,res) => {
	var professionName = req.params.ProfessionName
	var professionFolder = './WakfuRecipes/'
	var professionFileName = professionName + "Recipes.json"
	var professionFilePath = professionFolder + professionFileName

	try {
		var recipeJson = fs.readFileSync(professionFilePath, 'utf-8');

		res.json(recipeJson);
	} catch (error) {
		res.json('{"Error": "' + error + '"}');
	}
});

// PORT
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("listening on port 3000..."));


