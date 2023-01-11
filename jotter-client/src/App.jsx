import { useEffect, useState } from "react";
import "./assets/css/app.css";
import noteService from "./services/noteService.js";

const App = () => {
  const [arr, setArr] = useState([]);
  const getNote = async () => {
    const temp = await noteService.getAllNotes();
    setArr(temp);
  };
  useEffect(() => {
    getNote();
  }, []);

  console.log(arr);
  return (
    <div className="app">
      {arr.map((note) => {
        return <p key={note.id}>{note.title}</p>;
      })}
    </div>
  );
};
export default App;
