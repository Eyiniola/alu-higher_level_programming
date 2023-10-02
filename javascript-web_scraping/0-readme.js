#!/usr/bin/node
const fs = require('fs').promises;

const filePath = process.argv[2]; // Get the file path from command-line arguments

async function readFile() {
  try {
    const data = await fs.readFile(filePath, 'utf-8');
    console.log('File content:');
    console.log(data);
  } catch (err) {
    console.error('An error occurred while reading the file:', err);
  }
}

if (!filePath) {
  console.error('Please provide a file path as the first argument.');
} else {
  readFile();
}


