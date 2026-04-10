import { FormControl, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function SearchForm() {
  const [showClearIcon, setShowClearIcon] = useState("none");
  const [keyword, setKeyword] = useState("");
  const handleChange = (event) => {
    setShowClearIcon(event.target.value === "" ? "none" : "flex");
    setKeyword(event.target.value);
  };
  const handleClick = () => {
    setKeyword("");
  };
  return (
    <FormControl sx={{ margin: 0, paddingBottom: 2 }} fullWidth={true}>
      <TextField
        size="small"
        variant="outlined"
        onChange={handleChange}
        fullWidth={true}
        placeholder="Từ khóa tìm kiếm..."
        value={keyword}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <InputAdornment
              position="end"
              style={{ display: showClearIcon }}
              onClick={handleClick}
            >
              <ClearIcon style={{ cursor: "pointer" }} />
            </InputAdornment>
          ),
        }}
      />
    </FormControl>
  );
}
