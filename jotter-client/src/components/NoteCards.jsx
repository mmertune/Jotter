import { useEffect, useState } from "react";
import noteService from "../services/noteService";

const NoteCards = () => {
    const [arr, setArr] = useState([]);

  const getNotes = async () => {
    const temp = await noteService.getAllNotes();
    setArr(temp);
  };
//   const addNewNote = async () => {
//     const temp2 = await noteService.createNewNote({
//       title: "New Title3",
//       message: "New Message",
//     });
//     console.log(temp2);
//   };
//   const updateNote = async () => {
//     const temp3 = await noteService.updateSpecificNote();
//     console.log(temp3);
//   };
  useEffect(() => {
    getNotes();
  }, []);

  return (
    <div className="app">
    {arr.map((note) => {
      return <p key={note.id}>{note.title}</p>;
    })}
  </div>  )
}
export default NoteCards