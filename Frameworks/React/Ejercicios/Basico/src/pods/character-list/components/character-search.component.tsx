import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { Button, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export const CharacterSearch: React.FC = () => {
  return (
    <>
      <div className="buscador">
        <TextField id="outlined-basic" label="Character" variant="outlined" />
        <Button type="submit" variant="contained">
          <SearchIcon />
          Search
        </Button>
      </div>
    </>
  );
};