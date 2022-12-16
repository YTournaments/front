import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import TextField from "../Input/TextField";
import CustomButton from "../Button/Button";
export const SearchBar = ({ setSearchQuery }) => {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchQuery(search);
  };

  return (
    <form onSubmit={handleSearch}>
      <TextField
        id="search"
        margin="normal"
        required
        fullWidth
        label="search"
        name="search"
        type="text"
        placeholder="Chercher"
        //disabled={loading ? true : false}
        //error={passwordErrText !== ""}
        //helperText={passwordErrText}
        //value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{
          backgroundColor: "#34353C",
          maxWidth: "100%",
          margin: "auto",
          display: "flex",
          marginTop: "30px",
        }}
        startAdornment={<SearchIcon />}
        endAbornment={
          <CustomButton
            sx={{
              backgroundColor: "#34353C",
              color: "white",
              margin: "auto",
              display: "flex",
              marginTop: "30px",
            }}
            type="submit"
          >
            Chercher
          </CustomButton>
        }
      />
    </form>
  );
};
