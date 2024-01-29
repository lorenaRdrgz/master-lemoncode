import { TableCell } from "@mui/material";
import React from "react";

export const MemberListHeader: React.FC = () => {
  return (
    <>
      <TableCell className="list-header">Avatar</TableCell>
      <TableCell className="list-header">ID</TableCell>
      <TableCell className="list-header">Name</TableCell>
    </>
  );
};
