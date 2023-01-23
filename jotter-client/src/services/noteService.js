import axios from "axios";
const NOTES_URL = process.env.REACT_APP_SERVER_URL;

const getAllNotes = async () => {
  try {
    const response = await axios.get(NOTES_URL);
    return response.data;
  } catch (error) {
    console.log(`Caught Error: ${error}`);
  }
};
const createNewNote = async (body) => {
  try {
    const response = await axios.post(NOTES_URL, body);
    return response.data;
  } catch (error) {
    console.log(`Caught Error: ${error}`);
  }
};
const getSpecificNote = async (id, body) => {
  try {
    const response = await axios.get(NOTES_URL + "/" + id, body);
    return response.data;
  } catch (error) {
    console.log(`Caught Error: ${error}`);
  }
};
const updateSpecificNote = async (id, body) => {
  try {
    const response = await axios.put(NOTES_URL + "/" + id, body);
    return response.data;
  } catch (error) {
    console.log(`Caught Error: ${error}`);
  }
};
const deleteSpecificNote = async (id, body) => {
  try {
    const response = await axios.delete(NOTES_URL + "/" + id, body);
    return response.data;
  } catch (error) {
    console.log(`Caught Error: ${error}`);
  }
};

const noteService = {
  getAllNotes,
  createNewNote,
  getSpecificNote,
  updateSpecificNote,
  deleteSpecificNote,
};
export default noteService;
