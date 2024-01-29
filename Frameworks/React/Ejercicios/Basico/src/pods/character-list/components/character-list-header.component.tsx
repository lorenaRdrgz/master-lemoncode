import { TableCell } from "@mui/material";
import React from "react";

export const CharacterListHeader: React.FC = () => {
  return (
    <>
      <TableCell className="list-header">Image</TableCell>
      <TableCell className="list-header">ID</TableCell>
      <TableCell className="list-header">Name</TableCell>
    </>
  );
};
