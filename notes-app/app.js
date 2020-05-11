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
    builder:{
        title :{
            describe:"Title of note",
            demandOption:true,
            type:'string'
        },
        body :{
            describe:"Body of note",
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes.addNote(argv.title, argv.body);
    }
});

//setup the remove command
yargs.command({
    command:'remove',
    describe: "Remove a new note",
    builder:{
        title :{
            describe:"Title of note",
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
});

//setup the read command
yargs.command({
    command:'read',
    describe: "Read a new note",
    builder:{
        title :{
            describe:"Title of note",
            demandOption:true,
            type:'string'
        },
    },
    handler(argv){
        console.log(`Title: ${argv.title}`);
    }
});

//setup the list command
yargs.command({
    command:'list',
    describe: "List all notes",
    handler(){
        console.log("listing all notes!");
    }
});

//ensure yargs works
yargs.parse();