import { useEffect, useState, useContext } from "react";
import noteService from "../services/noteService";
import { GlobalContext } from "../context/GlobalContext";
import {
  Card,
  CardContent,
  Typography,
  useMediaQuery,
  Skeleton,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Masonry } from "@mui/lab";
import "../assets/css/notecards.css";

const NoteCards = () => {
  const { notesArray, setNotesArray } = useContext(GlobalContext);
  const { isLoading, setLoadingState } = useContext(GlobalContext);
  const { hasError, setErrorState } = useContext(GlobalContext);


  useEffect(() => {
    setLoadingState(true);
    setErrorState(false);
    const getNotes = async () => {
      try {
        const retrievedData = await noteService.getAllNotes();
        setNotesArray(retrievedData);
      } catch (error) {
        setErrorState(true);
      }
    };
    getNotes();
    setLoadingState(false);
  }, [setNotesArray]);

  const theme = useTheme();
  const smallphoneView = useMediaQuery(theme.breakpoints.down("sm"));
  const smallTabletView = useMediaQuery(theme.breakpoints.up("sm"));
  const largeTabletView = useMediaQuery(theme.breakpoints.up("md"));
  const laptopView = useMediaQuery(theme.breakpoints.up("lg"));
  const lgDesktopView = useMediaQuery(theme.breakpoints.up("xl"));

  const columnVal = () => {
    if (lgDesktopView) {
      return 5;
    } else if (laptopView) {
      return 4;
    } else if (largeTabletView) {
      return 3;
    } else if (smallTabletView) {
      return 2;
    } else if (smallphoneView) {
      return 1;
    }
  };
  if (hasError) {
    return <div>Error</div>;
  } else
    return (
      <div className="noteCards">
        <Masonry columns={columnVal()}>
          {(isLoading ? Array.from(new Array(4)) : notesArray).map(
            (note, index) => (
              <Card
                key={isLoading ? index : note.id}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "left",
                }}
              >
                {isLoading ? (
                  <>
                    <Skeleton
                      variant="text"
                      animation="wave"
                      sx={{
                        fontSize: "32px",
                        marginTop: "8px",
                      }}
                      width="80%"
                    />
                    <Skeleton
                      variant="text"
                      animation="wave"
                      sx={{
                        fontSize: "160px",
                      }}
                      width="80%"
                    />
                  </>
                ) : (
                  <>
                    <CardContent>
                      <Typography variant="subtitle1">{note.title}</Typography>
                      <Typography variant="body1">{note.message}</Typography>
                    </CardContent>
                  </>
                )}
              </Card>
            )
          )}
        </Masonry>
      </div>
    );
};
export default NoteCards;
