const express = require('express');
const app = express();
const fetch = require("node-fetch");
require('dotenv').config();


const MongoClient = require('mongodb').MongoClient;
const uri = ""+API_MONGO_URI+"";
const client = new MongoClient(uri, { useNewUrlParser: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log('Connected!!!');
  client.close();
});


const api_key_terraria = process.env.API_KEY_TERRARIA
const api_key_sdtd = process.env.API_KEY_SDTD

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/api/servers', (req, res) => {
  res.send(['Minecraft', 'Terraria', 'Dont Starve Together', '7 Days To Die', 'Empyrion Server']);
});

app.get('/api/minecraft', async (req, res) => {
  const api_url = 'https://api.mcsrvstat.us/2/noredlace.us.to:25565';
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

app.get('/api/terraria', async (req, res) => {
  const api_url = 'https://terraria-servers.com/api/?object=servers&element=detail&key='+api_key_terraria+'';
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});

/*
app.get('/api/dst', async (req, res) => {
  const api_url = 'https://api.minetools.eu/ping/noredlace.us.to/25565';
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();
  res.json(json);
});
*/

app.get('/api/sdtd', async (req, res) => {
  const api_url = 'https://7daystodie-servers.com/api/?object=servers&element=detail&key='+api_key_sdtd+'';
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
app.listen(3000, () => console.log("listening on port 3000..."));
