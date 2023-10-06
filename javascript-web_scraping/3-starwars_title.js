#!/usr/bin/node

const request = require('request');
const MovieId = process.argv[2];
const apiUrl = `https://swapi-api.alx-tools.com/api/films/` + MovieId;

request.get(apiUrl, function(error, response, body) => {
	if (error) {
		console.log(error);}
	else {
		console.log(JSON.parse(res.body).title);}
});

