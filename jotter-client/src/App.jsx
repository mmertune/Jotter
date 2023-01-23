import "./assets/css/app.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./page_sections/Body";
import Header from "./page_sections/Header";
import { ThemeProvider } from "@mui/material";
import theme from "./assets/materialUI/materialUITheme"

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  {/* <Header /> */}
                  <Body />
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
