//import the fs module
//const fs = require('fs');

//import npm modules
const chalk = require("chalk");
const yargs = require("yargs");

//import project files
const notes = require('./notes');

//delare variables
//var command = process.argv[2];

//customize yargs varsion
yargs.version('1.1.0');


//command required for notes app add, remove, read, list
//setup the add command
yargs.command({
    command:'add',
    describe: "Add a new note",
    handler: () =>{
        console.log("adding a new note!");
    }
});

//setup the add command
yargs.command({
    command:'remove',
    describe: "Remove a new note",
    handler: () =>{
        console.log("removing a note!");
    }
});

//setup the read command
yargs.command({
    command:'read',
    describe: "Read a new note",
    handler: () =>{
        console.log("reading a note!");
    }
});

//setup the list command
yargs.command({
    command:'list',
    describe: "List all notes",
    handler: () =>{
        console.log("listing all notes!");
    }
});


console.log(yargs.argv);