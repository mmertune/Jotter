package com.marvensmertune.jotterserver.service;

import com.marvensmertune.jotterserver.exception.ResourceNotFoundException;
import com.marvensmertune.jotterserver.model.Note;
import com.marvensmertune.jotterserver.repository.NoteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class NoteService {
    private NoteRepository noteRepository;

    @Autowired
    public NoteService(NoteRepository noteRepository){
        this.noteRepository = noteRepository;
    }

    public List<Note> getAllNotes(){
        return noteRepository.findAll();
    }

    public Note createNote(Note note){
        return noteRepository.save(note);
    }

    public ResponseEntity<Note> getNoteByID(Long id){
        Note note = noteRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Note does not exist with id:" + id));
        return ResponseEntity.ok(note);
    }

    public ResponseEntity<Note> updateNoteByID(Long id,Note newNote){
        Note note = noteRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Note does not exist with id:" + id));
        note.setTitle(newNote.getTitle());
        note.setMessage(newNote.getMessage());

        Note updatedNote = noteRepository.save(note);
        return ResponseEntity.ok(updatedNote);
    }

    public ResponseEntity<Map<String,Boolean>> deleteNoteByID(Long id){
        Note note = noteRepository.findById(id)
                .orElseThrow(()-> new ResourceNotFoundException("Note does not exist with id:" + id));
        noteRepository.delete(note);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }
}
