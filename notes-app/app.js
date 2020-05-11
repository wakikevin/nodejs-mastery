//import the fs module
//const fs = require('fs');

//import project files
//const utils = require('./utils');
const notes = require('./notes');

//write to file
//fs.writeFileSync('notes.txt', "This is my first file by Node.js");

//append data to file
//fs.appendFileSync('notes.txt', "This is appended text for the challenge!");

//define variable
//const name = "Kevin";
//const sum = utils.add(1,1);
//console.log(sum);

//console.log(utils.name);

//get the notes
var notesList = notes.getNotes();
console.log(notesList);