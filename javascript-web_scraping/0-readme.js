#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2]; 


if (!filePath) {
  console.error('Please provide a file path as the first argument.');
  process.exit(1); 
}


fs.readFile(filePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('An error occurred while reading the file:', err);
  } else {
    console.log('File content:');
    console.log(data);
  }
});

