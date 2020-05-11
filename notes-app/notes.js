//require modules
const fs = require('fs');

//define variables
const log = console.log;

//function to get notes
const getNotes = ()=>{
    return "Your notes are ...";
}

//add note function
const addNote = (title, body) =>{
    //get all notes
    var notes = loadNotes();

    //check if title exists
    var duplicateNotes = notes.filter((note)=>{
         return note.title === title   
    });

    if(duplicateNotes.length === 0){
        //add new note to the notes object
        notes.push({
            title:title,
            body:body
        });

        saveNotes(notes);
        log(`New note added`);
    }else{
        log(`Note title exists`);
    }
}

//remove note function
const removeNote = (title) =>{
    //get all notes
    var notes = loadNotes();

    //check if title exists and remove it
    var cleanNotes = notes.filter((note)=>{
         return note.title !== title   
    });

    saveNotes(cleanNotes);
    log(`Note Removed`);
   
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

//export the required functions & variables
module.exports = {
    getNotes,
    addNote,
    removeNote
}