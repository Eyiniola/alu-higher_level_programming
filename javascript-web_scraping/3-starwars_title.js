#!/usr/bin/node

const request = require('request');
const episodeId = process.argv[2];
const apiUrl = 'https://swapi-api.alx-tools.com/api/films/' + episodeId;

request.get(apiUrl, function (error, response, body) {
  if (error) {
    console.log(error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
