const fs = require("fs");
const myNotes = require("../db/db.json")

module.exports = function (app) {
   
   app.get("/api/notes", function (req,res) {
        return res.json(myNotes);
    });
    
    app.post("/api/notes", function (req,res) {
        let newNote = req.body
        newNote.id = myNotes.length.toString();
        myNotes.push(newNote);
        return res.json(newNote)
    });
    
    app.delete("/api/notes/:id", function (req,res) {

        let id = req.params.id
        let noteId = (element) => element.id === id;
        let deleteNote = myNotes.findIndex(noteId);
        myNotes.splice(deleteNote, 1);
        return res.send("Note deleted")
        // const notesIndex = myNotes.findIndex(note => note.id === id)
        // myNotes.splice(notesIndex, 1)
        
    });
};
