#!/usr/bin/node
const fs = require('fs');

const filePath = process.argv[2]; // Get the file path from command-line arguments

// Check if a file path was provided
if (!filePath) {
  console.error('Please provide a file path as the first argument.');
  process.exit(1); // Exit the script with an error code
}

try {
  // Read the file synchronously in utf-8 encoding
  const data = fs.readFileSync(filePath, 'utf-8');
  console.log('File content:');
  console.log(data);
} catch (err) {
  console.error('An error occurred while reading the file:', err);
}

