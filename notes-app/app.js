//import the fs module
//const fs = require('fs');

//import npm modules
const validator = require("validator");

//import project files
//const utils = require('./utils');
const notes = require('./notes');

//get the notes
var notesList = notes.getNotes();
console.log(notesList);

//check if email is valid
console.log(validator.isEmail("dev.gsoft@gmail.com"));
console.log(validator.isURL("https://wakikevin.io"));