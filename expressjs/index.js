const express = require('express');
const app = express();
const fetch = require("node-fetch");
require('dotenv').config();

/*
const MongoClient = require('mongodb').MongoClient;
const uri = ""+process.env.API_MONGO_URI+"";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('Connected!!!');
  client.close();
});
*/

console.log(process.env);

const url_minecraft = "https://api.mcsrvstat.us/2/minecraft.noredlace.com"
const url_terraria = "https://terraria-servers.com/api/?object=servers&element=detail&key="
const url_sdtd = "https://7daystodie-servers.com/api/?object=servers&element=detail&key="
const url_dst = "https://s3.amazonaws.com/klei-lobby/US-Steam-noevent.json.gz"
const url_empyrion = "https://empyrion-servers.com/api/?object=servers&element=detail&key="
const url_theforest = "https://empyrion-servers.com/api/?object=servers&element=detail&key="
const url_valheim = "https://valheim-servers.io/api/?object=servers&element=detail&key="

const api_key_dst = process.env.API_KEY_DST
const api_key_terraria = process.env.API_KEY_TERRARIA
const api_key_sdtd = process.env.API_KEY_SDTD
const api_key_empyrion = process.env.API_KEY_EMPYRION
const api_key_theforest = process.env.API_KEY_THEFOREST
const api_key_valheim = process.env.API_KEY_VALHEIM || "qVyyfChBMd5IpGSGNyE97pQf2sX4Bf8qQd"

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/servers', (req, res) => {
  res.send(['Minecraft', 'Terraria', 'Dont Starve Together', '7 Days To Die', 'Empyrion Server', 'Valheim Server', 'The Forest']);
});

app.get('/api/minecraft', async (req, res) => {
  const api_url = url_minecraft;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.get('/api/terraria', async (req, res) => {
  const api_url = url_terraria + api_key_terraria;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});


app.get('/api/dst', async (req, res) => {
  const api_url = url_dst;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  
  var noredCount = 0;
  var serverFound = false;
  for(var i = 0; i < json.GET.length; i++){
	  if (json.GET[i].host == api_key_dst){
		  noredCount = i;
		  serverFound = true;
		  break;
	  }
  }
  
  if (serverFound){
	  res.json(json.GET[noredCount]);
  }
  else {
	  res.json({
		  __addr: "136.49.186.15",
		  __lastPing: 1593685686,
		  __rowId: "5f8eb99a424df012c16098c4531aa22b",
		  allownewplayers: true,
		  clanonly: false,
		  clienthosted: false,
		  connected: 0,
		  dedicated: true,
		  event: false,
		  fo: false,
		  guid: "18323691452106159383",
		  host: "Default",
		  intent: "cooperative",
		  lanonly: false,
		  maxconnections: 20,
		  mode: "survival",
		  mods: false,
		  name: "noredlace server",
		  password: true,
		  platform: 1,
		  port: 11000,
		  pvp: false,
		  season: "autumn",
		  secondaries: {
			2102590470: {
			  __addr: "136.49.186.15",
			  __lastPing: 1593685504,
			  id: "2102590470",
			  steamid: "90136661465548800",
			  port: 11001
			}
		  },
		  session: "691935D1E9F9EB7C",
		  slaves: {
			"2102590470": {
			  __addr: "136.49.186.15",
			  __lastPing: 1593685504,
			  id: "2102590470",
			  steamid: "90136661465548800",
			  port: 11001
			}
		  },
		  steamid: "",
		  steamroom: "0",
		  tags: "english,survival,vote,caves",
		  v: 418572,
		  valvecloudserver: false,
		  valvepopid: ""
		});
  }
  
});


app.get('/api/sdtd', async (req, res) => {
  const api_url = url_sdtd + api_key_sdtd;
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.get('/api/empyrion', async (req, res) => {
	const api_url = url_empyrion + api_key_empyrion;
	const fetch_response = await fetch(api_url);
	const json = await fetch_response.json();
	res.json(json);
  });

app.get('/api/theforest', async (req, res) => {
	const api_url = url_theforest + api_key_theforest;
	const fetch_response = await fetch(api_url);
	const json = await fetch_response.json();
	res.json(json);
  });


app.get('/api/valheim', async (req, res) => {
	const api_url = url_valheim + api_key_valheim;
	const fetch_response = await fetch(api_url);
	const json = await fetch_response.json();
	res.json(json);
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
