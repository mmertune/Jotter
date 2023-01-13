package com.marvensmertune.jotterserver.service;

import com.marvensmertune.jotterserver.model.Note;
import com.marvensmertune.jotterserver.repository.NoteRepository;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class NoteServiceTest {

    @Mock
    private NoteRepository mockNoteRepository;
    private NoteService testNoteService;

    @BeforeEach
    void setUp() {
        testNoteService = new NoteService(mockNoteRepository);
    }

    // verify the repository invoked the findAll() method in Repository
    // when we call getAllNotes() in Service
    @Test
    void getAllNotes() {
        //when
        testNoteService.getAllNotes();
        //then
        verify(mockNoteRepository).findAll();
    }

    // verify the repository invoked the save() method in Repository
    // when we call createNote() in Service and verify the argument for createNote()
    // is the same info passed into the save() method
    @Test
    void createNote() {
        //given
        Note note = new Note("Unit Test Title","Unit Test Message");
        //when
        testNoteService.createNote(note);
        //then
        ArgumentCaptor<Note> noteArgumentCaptor =
                ArgumentCaptor.forClass(Note.class);
        verify(mockNoteRepository).save(noteArgumentCaptor.capture());
        Note capturedNoteArg = noteArgumentCaptor.getValue();

        assertThat(capturedNoteArg).isEqualTo(note);
    }

    @Test
    @Disabled
    void getNoteByID() {
        //given
        //when
        //then
    }

    @Test
    @Disabled
    void updateNoteByID() {
        //given
        //when
        //then
    }

    @Test
    @Disabled
    void deleteNoteByID() {
        //given
        //when
        //then
    }
}