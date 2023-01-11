import axios from "axios";
const NOTES_URL = process.env.REACT_APP_SERVER_URL;

const getAllNotes = async () => {
  try {
    const response = await axios.get(NOTES_URL);
    return response.data;
  } catch (error) {}
};

const noteService = { getAllNotes };
export default noteService;
