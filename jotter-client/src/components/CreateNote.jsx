import { TextField, Fab, InputAdornment } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useContext, useState } from "react";
import noteService from "../services/noteService";
import "../assets/css/createnote.css";
import { GlobalContext } from "../context/GlobalContext";

const CreateNote = () => {
  const [isTitleFieldVisible, setTitleFieldVisibility] = useState(true);
  // const [note, setNote] = useState({
  //   title: "",
  //   message: "",
  // });
  const { notesArray, setNotesArray } = useContext(GlobalContext);
  const { hasError, setErrorState } = useContext(GlobalContext);
  const { note, setNote } = useContext(GlobalContext);
  const { title, message } = note;
  const saveInput = (event) => {
    setNote((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const submitNote = async () => {
    try {
      await noteService.createNewNote(note);
      setNote({
        title: "",
        message: "",
      });
      const retrievedData = await noteService.getAllNotes();
      setNotesArray(retrievedData);
    } catch (error) {
      setErrorState(true);
    }
  };
  return (
    <form action="submit" className="createNote_formContainer">
      {isTitleFieldVisible && (
        <TextField
          // id="hwh"
          placeholder="Title"
          name="title"
          value={title}
          variant="filled"
          fullWidth
          InputProps={{
            disableUnderline: true,
          }}
          hiddenLabel
          size="small"
          onFocus={() => {}}
          sx={{
            margin: "0 auto 0",
            // display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            // "& fieldset": {
            //   borderRadius: "0px",
            // },
          }}
          onChange={saveInput}
        />
      )}
      <TextField
        // id="hwh"
        placeholder="Jot something down..."
        name="message"
        value={message}
        variant="filled"
        multiline
        fullWidth
        hiddenLabel
        size="small"
        onFocus={() => {}}
        InputProps={{
          disableUnderline: true,
          endAdornment: (
            <InputAdornment position="end">
              <Fab
                aria-label="add"
                size="small"
                sx={
                  {
                    // position: "relative",
                    // float: "right",
                    // top: "-50px",
                    // left: "-8px",
                  }
                }
                onClick={submitNote}
              >
                <AddIcon />
              </Fab>
            </InputAdornment>
          ),
        }}
        sx={{
          margin: "0 auto",
          // paddingRight:"48px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onChange={saveInput}
      />
      {/* <Fab
        aria-label="add"
        size="small"
        sx={{ position: "relative", float: "right", top: "-48px", left: "-8px" }}
        onClick={submitNote}
      >
        <AddIcon />
      </Fab> */}
    </form>
  );
};
export default CreateNote;
