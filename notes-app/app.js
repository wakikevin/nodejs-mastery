//import the fs module
//const fs = require('fs');

//import npm modules
const validator = require("validator");
//import validator from "validator"; //es6

//import project files
//const utils = require('./utils');
const notes = require('./notes');
//import notes from "./notes";

//get the notes
var notesList = notes.getNotes();
console.log(notesList);

//check if email is valid
console.log(validator.isEmail("dev.gsoft@gmail.com"));
console.log(validator.isURL("https://wakikevin.io"));