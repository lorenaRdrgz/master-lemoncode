import React, { FormEvent, useEffect } from "react";
import { Button, Card, CardActionArea, CardContent, CardMedia, IconButton, Paper, Table, TableBody, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { routes } from "@/router/routes";
import { CharacterEntity } from "./rick-and-morty.vm";
import { StyledTableCell } from "@/common/components/styled-table-cell.component";
import { TextField } from "@/common/components/text-field.component";
import { StyledTableRow } from "@/common/components/styled-table-row.component";

interface Props {
    characters: CharacterEntity[];
    onSearch: (name: string) => void;
}

export const RickAndMortyComponent: React.FC<Props> = (props) => {
    const { characters, onSearch } = props;
    const [name, setName] = React.useState('Rick');
    const navigate = useNavigate();

    const handleSearch = (e: FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        onSearch(name);
    }

    return <>
        <div>
            <h1>Rick and Morty Character: {name.toLocaleUpperCase()}</h1>
            <br />
            <form className="buscador" onSubmit={handleSearch}>
                <TextField
                    className="txtBusqueda"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Buscar..."
                    label="Nombre"
                />
                <IconButton type="submit" aria-label="search">
                    <SearchIcon className="lupa" style={{ fill: "black" }} />
                </IconButton>
            </form>
            <hr />
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Avatar</StyledTableCell>
                            <StyledTableCell>Id</StyledTableCell>
                            <StyledTableCell>Name</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            characters.map((char) => (
                                <>
                                    <StyledTableRow key={char.id}>
                                        <StyledTableCell><img className="avatar" src={char.image} alt="character image" /></StyledTableCell>
                                        <StyledTableCell><span>{char.id}</span></StyledTableCell>
                                        <StyledTableCell><span>{char.name}</span></StyledTableCell>
                                    </StyledTableRow>
                                </>
                            ))
                        }
                    </TableBody >
                </Table>
            </TableContainer>
            <hr />
            <div className="botonera">
                <Button
                    type="button"
                    variant="contained"
                    onClick={() => {
                        navigate(routes.home);
                    }}>
                    Volver
                </Button>
            </div>
        </div>
    </>
};