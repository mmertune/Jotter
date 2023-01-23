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

  useEffect(() => {
    // setLoadingState(()=> true);
    getNotes();
    // setLoadingState(()=> false);
  }, []);

  const getNotes = async () => {
    const temp = await noteService.getAllNotes();
    setArr(temp);
  };
  const theme = useTheme();
  const smallphoneView = useMediaQuery(theme.breakpoints.down("sm"));
  const smallTabletView = useMediaQuery(theme.breakpoints.up("sm"));
  const largeTabletView = useMediaQuery(theme.breakpoints.up("md"));
  const laptopView = useMediaQuery(theme.breakpoints.up("lg"));
  const lgDesktopView = useMediaQuery(theme.breakpoints.up("xl"));

  const columnVal = () => {
    if (lgDesktopView) {
      console.log("5");
      return 5;
    } else if (laptopView) {
      console.log("4");
      return 4;
    } else if (largeTabletView) {
      console.log("3");
      return 3;
    } else if (smallTabletView) {
      console.log("2");
      return 2;
    } else if (smallphoneView) {
      console.log("1");
      return 1;
    }
  };
  return (
    <div className="noteCards">
      <Masonry columns={columnVal()}>
        {(isLoading ? Array.from(new Array(16)) : arr).map((note,index) => (
          <Card
            key={(isLoading ? index : note.id)}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isLoading ? (
              <>
                <Skeleton
                  variant="text"
                  animation="wave"
                  sx={{
                    fontSize: "32px",
                    marginTop:"8px"
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
