//import the fs module
//const fs = require('fs');

//import npm modules
const chalk = require("chalk");

//import project files
const notes = require('./notes');

//decalre variables
var command = process.argv[2];
console.log(process.argv)
//check what command to run
if(command === "add"){
    console.log(`adding note`);
}else if(command === "remove"){
    console.log(`removing note`);
}
