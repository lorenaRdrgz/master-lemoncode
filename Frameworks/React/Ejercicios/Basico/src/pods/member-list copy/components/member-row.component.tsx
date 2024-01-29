import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { Member } from "../member-list.vm";
import { Avatar, TableCell, TableRow } from "@mui/material";

interface Props {
  member: Member;
  onClick: () => void;
}

export const MemberRow: React.FC<Props> = (props) => {
  const { member, onClick } = props;

  return (
    <>
      <TableCell onClick={onClick}><Avatar alt={member.login} src={member.avatarUrl} /></TableCell>
      <TableCell onClick={onClick}>{member.id}</TableCell>
      <TableCell onClick={onClick}>{member.login}</TableCell>
    </>
  );
};
