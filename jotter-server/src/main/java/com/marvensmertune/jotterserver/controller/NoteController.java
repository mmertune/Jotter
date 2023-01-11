package com.marvensmertune.jotterserver.controller;

import com.marvensmertune.jotterserver.exception.ResourceNotFoundException;
import com.marvensmertune.jotterserver.model.Note;
import com.marvensmertune.jotterserver.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/v1/")
public class NoteController {

    @Autowired
    private NoteRepository noteRepository;
    //get all notes
    @GetMapping("/notes")
    public List<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    //create a note
    @PostMapping("/notes")
    public Note createNote(@RequestBody Note note){
        return noteRepository.save(note);
    }

    //get note by ID
    @GetMapping("/notes/{id}")
    public ResponseEntity<Note> getNoteByID(@PathVariable Long id){
        Note note = noteRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Note does not exist with id:" + id));
        return ResponseEntity.ok(note);
    }

    @PutMapping("/notes/{id}")
    public ResponseEntity<Note> updateNoteByID(@PathVariable Long id,@RequestBody Note newNote){
        Note note = noteRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Note does not exist with id:" + id));
        note.setTitle(newNote.getTitle());
        note.setMessage(newNote.getMessage());

        Note updatedNote = noteRepository.save(note);
        return ResponseEntity.ok(updatedNote);
    }
    @DeleteMapping("/notes/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteNoteByID(@PathVariable Long id){
        Note note = noteRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Note does not exist with id:" + id));
        noteRepository.delete(note);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

}
