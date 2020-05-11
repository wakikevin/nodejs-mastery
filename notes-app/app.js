//import the fs module
const fs = require('fs');

//write to file
//fs.writeFileSync('notes.txt', "This is my first file by Node.js");

//append data to file
fs.appendFileSync('notes.txt', "This is appended text for the challenge!");