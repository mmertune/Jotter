import NoteCards from "../components/NoteCards";
import CreateNote from "../components/CreateNote";

const Body = () => {
  return (
    <main className="body">
      <CreateNote />
      <NoteCards />
    </main>
  );
};
export default Body;
