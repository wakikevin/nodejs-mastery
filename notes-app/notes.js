//require modules
const fs = require('fs');


//require npm mopdules
const chalk = require('chalk');

//define variables
const log = console.log;

//function to get notes
const getNotes = ()=>{
    log(chalk.blue.underline(`Your notes : `));
    var notes = loadNotes();
    if(notes.length > 0){
        //print each note
        notes.forEach((note)=>{
            log(`Title: ${note.title}`);
            log('-------------');
        });
    } else{
        log(chalk.red.inverse(`No notes found!`));
    }
}

//add note function
const addNote = (title, body) =>{
    //get all notes
    var notes = loadNotes();

    //check if title exists
    //var duplicateNotes = notes.filter((note)=>note.title === title);
    var duplicateNote = notes.find((note)=>note.title === title);

    if(!duplicateNote){
        //add new note to the notes object
        notes.push({
            title:title,
            body:body
        });

        saveNotes(notes);
        log(chalk.green.inverse(`New note added`));
    }else{
        log(chalk.green.inverse(`Note title exists`));
    }
}

//remove note function
const removeNote = (title) =>{
    //get all notes
    var notes = loadNotes();

    //check if title exists and remove it
    var cleanNotes = notes.filter((note)=>note.title !== title);

    //check if note exists
    if(notes.length > cleanNotes.length){
        saveNotes(cleanNotes);
        log(chalk.green.inverse(`${title} - Has been Removed`));
    }else{
        log(chalk.red.inverse(`${title} - Does not exist!`));
    }
}

//save all notes
const saveNotes =(notes)=>{
    var notesStr = JSON.stringify(notes);
    fs.writeFileSync('notes.json', notesStr);
}

//get all the notes
const loadNotes = ()=>{
    try{
        var dataBuffer = fs.readFileSync('notes.json');
        var notesObj = JSON.parse(dataBuffer.toString());

        return notesObj;
    }catch(err){
        return [];
    }
} 

//add note function
const readNote = (title) =>{
    //get all notes
    var notes = loadNotes();

    //check if title exists
    var noteToRead = notes.find((note)=>note.title === title);

    if(noteToRead){
        log(chalk.blue(`Title: ${noteToRead.title}`));
        log(`Body: ${noteToRead.body}`);
    }else{
        log(chalk.red.inverse(`Note title doesnt exists`));
    }
}

//export the required functions & variables
module.exports = {
    getNotes,
    addNote,
    removeNote,
    readNote
}