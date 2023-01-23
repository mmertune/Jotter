import "./assets/css/app.css";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./page_sections/Body";
import Header from "./page_sections/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/materialUI/materialUITheme";
import { GlobalContext } from "./context/GlobalContext";

const App = () => {
  const [note, setNote] = useState({
    title: "",
    message: "",
  });
  const [notesArray, setNotesArray] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [hasError, setErrorState] = useState(false);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <GlobalContext.Provider value={{ note, setNote, notesArray, setNotesArray, isLoading, setLoadingState,hasError, setErrorState }}>
                    {/* <Header /> */}
                    <Body />
                  </GlobalContext.Provider>
                </>
              }
            ></Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};
export default App;
