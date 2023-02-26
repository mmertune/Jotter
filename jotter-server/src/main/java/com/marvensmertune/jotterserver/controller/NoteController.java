package com.marvensmertune.jotterserver.controller;

import com.marvensmertune.jotterserver.model.Note;
import com.marvensmertune.jotterserver.service.NoteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "https://jotter.marvensmertune.com")
@RestController
@RequestMapping("/api/v1/")
public class NoteController {
    private final NoteService noteService;

    @Autowired
    public NoteController(NoteService noteService){
    this.noteService = noteService;
    }

    @GetMapping("/notes")
    public List<Note> getAllNotes(){
       return noteService.getAllNotes();
    }

    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note){
        return noteService.createNote(note);
    }

    @GetMapping("/notes/{id}")
    public ResponseEntity<Note> getNoteByID(@PathVariable Long id){
        return noteService.getNoteByID(id);
    }

    @PutMapping("/notes/{id}")
    public ResponseEntity<Note> updateNoteByID(@PathVariable Long id,@RequestBody Note newNote){
        return noteService.updateNoteByID(id,newNote);
    }

    @DeleteMapping("/notes/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteNoteByID(@PathVariable Long id){
        return noteService.deleteNoteByID(id);
    }

}
