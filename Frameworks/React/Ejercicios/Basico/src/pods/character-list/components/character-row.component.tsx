import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "@/router";
import { Avatar, TableCell } from "@mui/material";
import { Character } from "../character-list.vm";

interface Props {
  character: Character;
  onClick: () => void;
}

export const CharacterRow: React.FC<Props> = (props) => {
  const { character, onClick } = props;

  return (
    <>
      <TableCell onClick={onClick}><Avatar alt={character.name} src={character.image} /></TableCell>
      <TableCell onClick={onClick}>{character.id}</TableCell>
      <TableCell onClick={onClick}>{character.name}</TableCell>
    </>
  );
};
