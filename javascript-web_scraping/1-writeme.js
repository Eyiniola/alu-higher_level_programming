#!/usr/bin/node
const fs = require('fs');
const FileNmae = process.argv[2];
const content = process.argv[3];
fs.writeFile(FileName, content, 'utf-8', function(err){
	if (err){
		console.log(err)}
});

