import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiMasonry: {
      defaultProps: {
        columns: 3,
      },
    },
  },
});

export default theme;
