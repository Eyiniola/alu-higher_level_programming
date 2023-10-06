#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];
const characterId = 18;

request.get(apiUrl, function(error, response, body) {
	if (error) {
		console.log(error);
	}
	else {
		 data = JSON.parse(res.body).results;
    data.forEach((obj) => {
      obj.characters.forEach((character) => {
        if (character.includes('/18/')) count++;
      });
    });
  }
  console.log(count);
});
