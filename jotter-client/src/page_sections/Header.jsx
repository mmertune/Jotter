import "../assets/css/header.css";
import { Description, Search } from "@mui/icons-material";
import {
  OutlinedInput,
  InputAdornment,
  InputLabel,
  TextField,
  Button,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Description fontSize="large" />
      <form action="submit" className="header_frmContainer">
        {/* <Search fontSize="small" /> */}
        {/* <input type="text" name="" id="" className="header_frmInput"/> */}
        {/* <InputLabel htmlFor="header_input">Search</InputLabel>
        <OutlinedInput id="header_input" size="small" fullWidth={true} startAdornment={
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          }/> */}
        <TextField
          id="outlined-basic"
          variant="outlined"
          size="small"
          label="Search"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Search />
              </InputAdornment>
            ),
          }}
        />
      </form>
      <Button component={RouterLink} to="/">
        Login
      </Button>
    </header>
  );
};
export default Header;
