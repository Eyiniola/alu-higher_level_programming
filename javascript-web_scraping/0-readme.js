#!/usr/bin/node
const fs = require('fs').promises;
const FileName = process.argv[2];
fs.readFile(FileName, 'utf8', function (err, line) {
  if (err) {
    console.log(err);
  } else {
    console.log(line);
  }
});

