import { useEffect, useState } from "react";
import noteService from "../services/noteService";
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
  const [arr, setArr] = useState([]);
  const [isLoading, setLoadingState] = useState(true);
  const [hasError, setErrorState] = useState(false);

  useEffect(() => {
    setLoadingState(true);
    setErrorState(false);
    const getNotes = async () => {
      try {
        const temp = await noteService.getAllNotes();
        setArr(temp);
      } catch (error) {
        setErrorState(true);
      }
    };
    getNotes();
    setLoadingState(false);
  }, [setArr]);

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
          {(isLoading ? Array.from(new Array(16)) : arr).map((note, index) => (
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
          ))}
        </Masonry>
      </div>
    );
};
export default NoteCards;
